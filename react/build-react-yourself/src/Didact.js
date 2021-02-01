// https://pomb.us/build-your-own-react/

/* ----------------------------------------------------------------------------------
Kick start a render cycle
convert JSX to didact elements
and create initial unit of work
---------------------------------------------------------------------------------- */

let nextUnitOfWork = null;
// to track the root of the fiber tree so once all the work is done (no more next unit of work), we commit the whole fiber tree to the DOM in commitRoot.
let wipRoot = null;
// to track the last fiber tree we committed to the DOM, so that to compare the elements we receive on the render function (reconciliation).
let currentRoot = null;
let deletions = null;

function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  };
}

function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function render(element, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
    /**
     * This property is a link to the old fiber, the fiber that we committed to the DOM in the previous commit phase (for reconciliation).
     */
    alternate: currentRoot,
  };
  deletions = [];
  nextUnitOfWork = wipRoot;
}

/* ----------------------------------------------------------------------------------
Reconciliation
---------------------------------------------------------------------------------- */

function workLoop(deadline) {
  let shouldYield = false;
  /**
   * if there is more work and there is still time, do the next work
   */
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    /**
     * after the work done, check if there is still time
     */
    shouldYield = deadline.timeRemaining() < 1;
  }

  /**
   * if no more work and there is a root, finally commit it to the DOM
   */
  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }

  /**
   * hey browser, thanks for doing some work,
   * I either have no work for you to do now or you are busy
   * let me know next time you are free
   */
  requestIdleCallback(workLoop);
}

/**
 * hey browser,
 * do this (workLoop) when you have time
 */
requestIdleCallback(workLoop);

function performUnitOfWork(fiber) {
  /**
   * check if the fiber type is a function, and depending on that we go to a different update function.
   */
  const isFunctionComponent = fiber.type instanceof Function;
  if (isFunctionComponent) {
    updateFunctionComponent(fiber);
  } else {
    updateHostComponent(fiber);
  }

  /**
   * Finally we search for the next unit of work and return it. We first try with the child,
   * then with the sibling, then back to the parent, and so on.
   */
  if (fiber.child) {
    return fiber.child;
  }
  let nextFiber = fiber;
  while (nextFiber) {
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    nextFiber = nextFiber.parent;
  }
}

function updateHostComponent(fiber) {
  // add dom node
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }

  reconcileChildren(fiber, fiber.props.children);
}

/**
 * Reconciliation: compare the old fibers with the new elements. See if there’s any change we need to apply to the DOM.
 * Old fiber: what we rendered last time
 * New element: what we going to render
 */
/**
 * One of the goals of fiber's structure is to make it easy to find the next unit of work.
 * That’s why each fiber has a link to its first child, its next sibling and its parent.
 */
/**
 * creating new links between React elements while iterating old fibers through the links already created.
 */
function reconcileChildren(wipFiber, elements) {
  let index = 0;
  let oldFiber = wipFiber.alternate && wipFiber.alternate.child; // All about the childrens
  let prevSibling = null;

  // for each child of the current fiber, we create a new fiber.
  while (index < elements.length || oldFiber) {
    const element = elements[index];
    let newFiber = null;

    // compare oldFiber to element
    const sameType = oldFiber && element && element.type === oldFiber.type;

    // if the old fiber and the new element have the same type, we can keep the DOM node and just update it with the new props
    if (sameType) {
      // we create a new fiber keeping the DOM node from the old fiber and the props from the element.
      newFiber = {
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom,
        parent: wipFiber,
        alternate: oldFiber,
        effectTag: 'UPDATE',
      };
    }
    // if the type is different and there is a new element, it means we need to create a new DOM node
    if (element && !sameType) {
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        parent: wipFiber,
        alternate: null,
        effectTag: 'PLACEMENT',
      };
    }
    // and if the types are different and there is an old fiber, we need to remove the old node
    if (oldFiber && !sameType) {
      oldFiber.effectTag = 'DELETION';
      /**
       * Deleting is a specific case.
       * since it is delete, no new fiber will be created. effect tag is added to old fiber.
       * But when we commit the fiber tree to the DOM we do it from the work in progress root, which doesn’t have the old fibers.
       * So we need an array to keep track of the nodes we want to remove.
       */
      deletions.push(oldFiber);
    }

    if (oldFiber) {
      oldFiber = oldFiber.sibling;
    }

    // And we add it to the fiber tree setting it either as a child or as a sibling, depending on whether it’s the first child or not.
    if (index === 0) {
      wipFiber.child = newFiber;
    } else if (element) {
      prevSibling.sibling = newFiber;
    }

    prevSibling = newFiber;
    index++;
  }
}

/**
 * We need to initialize some global variables before calling the function component so we can use them inside of the useState function.
 */
let wipFiber = null;
let hookIndex = null; // And we keep track of the current hook index.

/**
 * Function components are differents in two ways:
 * 1. the fiber from a function component doesn’t have a DOM node
 * 2. and the children come from running the function instead of getting them directly from the props
 */
function updateFunctionComponent(fiber) {
  wipFiber = fiber;
  hookIndex = 0;
  wipFiber.hooks = []; // We also add a hooks array to the fiber to support calling useState several times in the same component.
  const children = [fiber.type(fiber.props)];
  reconcileChildren(fiber, children);
}

/* ----------------------------------------------------------------------------------
Didact hooks
---------------------------------------------------------------------------------- */

function useState(initial) {
  const oldHook =
    wipFiber.alternate &&
    wipFiber.alternate.hooks &&
    wipFiber.alternate.hooks[hookIndex];
  const hook = {
    state: oldHook ? oldHook.state : initial, // If old hook, copy old hook state to new hook, if not, initialize the state.
    queue: [],
  };

  const actions = oldHook ? oldHook.queue : [];
  /**
   * get all the actions from the old hook queue,
   * then apply them one by one to the new hook state, so when the state returned it’s updated.
   */
  actions.forEach((action) => {
    hook.state = action(hook.state);
  });

  const setState = (action) => {
    /**
     * action is run next time the component is rendered (when useState is called)
     * here simply push the action to the hook queue
     */
    hook.queue.push(action);
    wipRoot = {
      dom: currentRoot.dom,
      props: currentRoot.props,
      alternate: currentRoot,
    };
    nextUnitOfWork = wipRoot; // set a new work in progress root as the next unit of work so the work loop can start a new render phase when setState is called
    deletions = [];
  };

  wipFiber.hooks.push(hook);
  hookIndex++;

  return [hook.state, setState];
}

/* ----------------------------------------------------------------------------------
Commit the new fiber tree to the DOM
Update the DOM based on the result of reconciliation
---------------------------------------------------------------------------------- */

/**
 * we recursively append all the nodes to the dom here.
 */
function commitRoot() {
  deletions.forEach(commitWork);
  commitWork(wipRoot.child);
  currentRoot = wipRoot;
  wipRoot = null;
}

function commitWork(fiber) {
  if (!fiber) {
    return;
  }
  /**
   * Because of functional component, which has no DOM (it is just a function. you can't pass the function name to createDom and expect a DOM node)
   * we’ll need to go up the fiber tree until we find a fiber with a DOM node.
   */
  let domParentFiber = fiber.parent;
  while (!domParentFiber.dom) {
    domParentFiber = domParentFiber.parent;
  }
  const domParent = domParentFiber.dom;
  if (fiber.effectTag === 'PLACEMENT' && fiber.dom !== null) {
    domParent.appendChild(fiber.dom);
  } else if (fiber.effectTag === 'UPDATE' && fiber.dom !== null) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props);
  } else if (fiber.effectTag === 'DELETION') {
    commitDeletion(fiber, domParent);
  }

  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

function commitDeletion(fiber, domParent) {
  /**
   * also because of functional component,
   * when removing a node we need to keep going until we find a child with a DOM node.
   */
  if (fiber.dom) {
    domParent.removeChild(fiber.dom);
  } else {
    commitDeletion(fiber.child, domParent);
  }
}

function createDom(fiber) {
  const dom =
    fiber.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(fiber.type);

  updateDom(dom, {}, fiber.props);

  return dom;
}

/**
 * compare the props from the old fiber to the props of the new fiber, remove the props that are gone, and set the props that are new or changed.
 */
const isEvent = (key) => key.startsWith('on');
const isProperty = (key) => key !== 'children' && !isEvent(key);
const isNew = (prev, next) => (key) => prev[key] !== next[key];
const isGone = (prev, next) => (key) => !(key in next);
function updateDom(dom, prevProps, nextProps) {
  //Remove old or changed event listeners
  Object.keys(prevProps)
    .filter(isEvent)
    .filter((key) => !(key in nextProps) || isNew(prevProps, nextProps)(key))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });

  // Remove old properties
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach((name) => {
      dom[name] = '';
    });

  // Set new or changed properties
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      dom[name] = nextProps[name];
    });

  // Add event listeners
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
}

const Didact = {
  createElement,
  render,
  useState,
};

export default Didact;
