import stringifyObj from './utils/stringify-obj';

/*
 For example, createElement("div") returns:
{
  "type": "div",
  "props": { "children": [] }
}

createElement("div", null, a) returns:
{
  "type": "div",
  "props": { "children": [a] }
}

createElement("div", null, a, b) returns:
{
  "type": "div",
  "props": { "children": [a, b] }
}
*/

/**
 * React.createElement creates an object from its arguments.
 * Besides some validations, that’s all it does.
 */

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

/**
 * now React element has a fancy name "fiber"
 */
function createDom(fiber) {
  const dom =
    fiber.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(fiber.type);

  const isProperty = (key) => key !== 'children';
  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = fiber.props[name];
    });

  return dom;
}

let nextUnitOfWork = null;
// work in progress root
let wipRoot = null;

/**
 * render is where React changes the DOM
 */
function render(element, container) {
  wipRoot = {
    dom: container,
    props: {
      children: [element],
    },
  };
  nextUnitOfWork = wipRoot;
  // console.log('nextUnitOfWork', stringifyObj(nextUnitOfWork));
  console.log('nextUnitOfWork', nextUnitOfWork);
}

function commitRoot() {
  //
}

function workLoop(deadline) {
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    shouldYield = deadline.timeRemaining() < 1;
  }

  if (!nextUnitOfWork && wipRoot) {
    commitRoot();
  }

  requestIdleCallback(workLoop);
}

requestIdleCallback(workLoop);

function performUnitOfWork(fiber) {
  console.log('fiber', stringifyObj(fiber));
  // TODO add dom node
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  // TODO create new fibers
  const elements = fiber.props.children;
  let index = 0;
  let prevSibling = null;

  // Then for each child we create a new fiber.
  while (index < elements.length) {
    const element = elements[index];
    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber,
      dom: null,
    };

    // And we add it to the fiber tree setting it
    // either as a child or as a sibling, depending on whether it’s the first child or not.
    if (index === 0) {
      fiber.child = newFiber;
    } else {
      prevSibling.sibling = newFiber;
    }
    prevSibling = newFiber;
    index++;
  }
  // TODO return next unit of work
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

const Didact = {
  createElement,
  render,
};

export default Didact;
