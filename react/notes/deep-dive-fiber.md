https://blog.logrocket.com/deep-dive-into-react-fiber-internals/

```javascript
ReactDOM.render(<App />, document.getElementById('root'))
```

`<App />` is a React element, and “elements describe the tree.”

*“An element is a plain object describing a component instance or DOM node and its desired properties.” –* [React Blog](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html#elements-describe-the-tree)

In other words, **elements** are *not* actual DOM nodes or component instances; they are a way to *describe* to React what kind of elements they are, what properties they hold, and who their children are.

This is where React’s real power lies. React abstracts away all the complex pieces of how to build, render, and manage the lifecycle of the actual DOM tree by itself

In React, there are two kinds of elements:

- **DOM element:** When the element’s type is a string, e.g., ` OK `
- **Component element:** When the type is a class or a function, e.g., ` OK `, where `` is a either a class or a functional component. These are the typical React components we generally use

When React encounters a class or a function component, it will ask that element what element it renders to based on its props and will call `render()`. React will repeat this process until it knows the underlying DOM tag elements for every component on the page.

This exact process of recursively traversing a tree to know the underlying DOM tag elements of a React app’s component tree is known as **reconciliation**.

By the end of the reconciliation, React knows the result of the DOM tree, and a renderer like react-dom or react-native applies the minimal set of changes necessary to update the DOM nodes.

### Before React 16:

So this means that when you call `ReactDOM.render()` or `setState()`, React performs a reconciliation. In the case of `setState`, it performs a traversal and figures out what changed in the tree by diffing the new tree with the rendered tree. Then it applies those changes to the current tree, thereby updating the state corresponding to the `setState()` call.

The reconciliation algorithm we just saw is a purely recursive algorithm. An update results in the entire subtree being re-rendered immediately. While this works well, this has some limitations. As [Andrew Clark notes](https://github.com/acdlite/react-fiber-architecture):

- In a UI, it’s not necessary for every update to be applied immediately; in fact, doing so can be wasteful, causing frames to drop and degrading the user experience
- Different types of updates have different priorities — an animation update needs to complete more quickly than, say, an update from a data store

-----------------------------------------------------------

#### Side note:

Frame rate is the frequency at which consecutive images appear on a display. Everything we see on our computer screens are composed of images or frames played on the screen at a rate that appears instantaneous to the eye.

Typically, for video to feel smooth and instantaneous to the human eye, the video needs to play at a rate of about 30 frames per second (FPS). Anything higher than that will give an even better experience.

Having said that, most devices these days refresh their screens at 60 FPS — or, in other words, 1/60 = **16.67ms**, which means a new frame is displayed every 16ms. This number is very important because if React renderer takes more than 16ms to render something on the screen, the browser will drop that frame.

In reality, however, the browser has housekeeping work to do, so all of your work needs to be completed inside **10ms**. When you fail to meet this budget, the frame rate drop, and the content judders on screen. This is often referred to as jank, and it negatively impacts the user’s experience.

--------------------------------

Of course, this is not a big cause of concern for static and textual content. But in the case of displaying animations, this number is critical. So if the React reconciliation algorithm traverses the entire `App` tree each time there is an update and re-renders it, and if that traversal takes more than 16ms, it will cause dropped frames, and dropped frames are bad.

This is a big reason why it would be nice to have updates categorized by priority and not blindly apply every update passed down to the reconciler. Also, another nice feature to have is the ability to pause and resume work in the next frame. This way, React will have better control over working with the 16ms budget it has for rendering.

This led the React team to rewrite the reconciliation algorithm, and the new algorithm is called Fiber. I hope now it makes sense as to how and why Fiber exists and what significance it holds. Let’s look at how Fiber works to solve this problem.

### React 16, here comes Fiber

Now that we know what motivated the development of Fiber, let’s summarize the features that are needed to achieve it.

Again, I am referring to Andrew Clark’s notes for this:

- Assign priority to different types of work
- Pause work and come back to it later
- Abort work if it’s no longer needed
- Reuse previously completed work

One of the challenges with implementing something like this is how the JavaScript engine works and to a little extent the lack of threads in the language. In order to understand this, let’s briefly explore how the JavaScript engine handles execution contexts.

Call stack, execution context, event loop ....

Coming back to our stack reconciler, when React traverses the tree, it is doing so in the *call stack*. So when updates arrive, they arrive in the event queue (sort of). And only when the execution stack becomes empty, the updates get handled. This is precisely the problem Fiber solves by almost reimplementing the stack with intelligent capabilities — pausing and resuming, aborting, etc.

Again referencing Andrew Clark’s notes here:

> “Fiber is reimplementation of the stack, specialized for React components. You can think of a single fiber as a virtual stack frame.
>
> The advantage of reimplementing the stack is that you can keep stack frames in memory and execute them however (and whenever) you want. This is crucial for accomplishing the goals we have for scheduling.
>
> Aside from scheduling, manually dealing with stack frames unlocks the potential for features such as concurrency and error boundaries. We will cover these topics in future sections.”

In simple terms, a fiber represents a unit of work with its own virtual stack. 

+ In the previous implementation of the reconciliation algorithm, React created a tree of objects (React elements) that are immutable and traversed the tree recursively.

+ In the current implementation, React creates a tree of fiber nodes that can be mutated. The fiber node effectively holds the component’s state, props, and the underlying DOM element it renders to.

And since fiber nodes can be mutated, React doesn’t need to recreate every node for updates — it can simply clone and update the node when there is an update. Also, in the case of a fiber tree, React doesn’t do a recursive traversal; instead, it creates a singly linked list and does a parent-first, depth-first traversal.

### Singly linked list of fiber nodes

A fiber node represents a stack frame, but it also represents an instance of a React component. A fiber node comprises the following members:

#### Type

`<div>`, `<span>`, etc. for host components (string), and class or function for composite components.

#### Key

Same as the key we pass to the React element.

#### Child

Represents the element returned when we call `render()` on the component. For example:

```
const Name = (props) => {
  return(
    <div className="name">
      {props.name}
    </div>
  )
}
```

The child of `` is `` here as it returns a `` element.

#### Sibling

Represents a case where `render` returns a list of elements.

```
const Name = (props) => {
  return([<Customdiv1 />, <Customdiv2 />])
}
```

In the above case, `` and `` are the children of ``, which is the parent. The two children form a singly linked list.

#### Return

Represents the return back to the stack frame, which is logically a return back to the parent fiber node. Thus, it represents the parent.

#### `pendingProps` and `memoizedProps`

Memoization means storing the values of a function execution’s result so you can use it later on, thereby avoiding recomputation. `pendingProps` represents the props passed to the component, and `memoizedProps` gets initialized at the end of the execution stack, storing the props of this node.

When the incoming `pendingProps` are equal to `memoizedProps`, it signals that the fiber’s previous output can be reused, preventing unnecessary work.

<!--- Interesting... 🧐 -->

#### `pendingWorkPriority`

A number indicating the priority of the work represented by the fiber. The [`ReactPriorityLevel`](https://github.com/facebook/react/blob/master/src/renderers/shared/fiber/ReactPriorityLevel.js) module lists the different priority levels and what they represent. With the exception of `NoWork`, which is zero, a larger number indicates a lower priority.

For example, you could use the following function to check if a fiber’s priority is at least as high as the given level. The scheduler uses the priority field to search for the next unit of work to perform.

```javascript
function matchesPriority(fiber, priority) {
  return fiber.pendingWorkPriority !== 0 &&
         fiber.pendingWorkPriority <= priority
}
```

#### Alternate

At any time, a component instance has at most two fibers that correspond to it: the current fiber and the in-progress fiber. The alternate of the current fiber is the fiber in progress, and the alternate of the fiber in progress is the current fiber. The current fiber represents what is rendered already, and the in-progress fiber is conceptually the stack frame that has not returned.

#### Output

The leaf nodes of a React application. They are specific to the rendering environment (e.g., in a browser app, they are `div`, `span`, etc.). In JSX, they are denoted using lowercase tag names.

Conceptually, the output of a fiber is the return value of a function. Every fiber eventually has output, but output is created only at the leaf nodes by host components. The output is then transferred up the tree.

The output is eventually given to the renderer so that it can flush the changes to the rendering environment.

For example, let’s look at how the fiber tree would look for an app whose code looks like this:

```javascript
const Parent1 = (props) => {
  return([<Child11 />, <Child12 />])
}

const Parent2 = (props) => {
  return(<Child21 />)
}

class App extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    <div>
      <Parent1 />
      <Parent2 />
    </div>
  }
}

ReactDOM.render(<App />, document.getElementById('root'))
```

![Fiber Tree Diagram](https://i0.wp.com/blog.logrocket.com/wp-content/uploads/2019/11/fiber-tree-diagram.png?resize=730%2C586&ssl=1)

We can see that the fiber tree is composed of singly linked lists of child nodes linked to each other (sibling relationship) and a linked list of parent-to-child relationships. This tree can be traversed using a [depth-first search](https://en.wikipedia.org/wiki/Depth-first_search).



### Render phase

`createFiberFromTypeAndProps()` is the function that creates each React fiber using the data from the specific React element. When we run the test, put a breakpoint at this function, and look at the call stack, it looks something like this:

<img src="/var/folders/kf/qtkby15s1xv60zv0qfkc24g80000gn/T/se.razola.Glui2/DB49E6A5-3BBF-4911-B1F9-4B282808B4F0-812-000AD590A1FA9C32/2020-09-25 at 9.35 PM.png" alt="2020-09-25 at 9.35 PM" style="zoom:150%;" />



As we can see, the call stack tracks back to a `render()` call, which eventually goes down to `createFiberFromTypeAndProps()`. There are a few other functions that are of interest to us here: `workLoopSync()`, `performUnitOfWork()`, and `beginWork()`.

workLoopSync() is where React starts building up the tree, starting with the <App> node and recursively moving on to <div>, <div>, and <button>, which are the children of <App>. The workInProgress holds a reference to the next fiber node that has work to do.

`performUnitOfWork()` takes a fiber node as an input argument, gets the alternate of the node, and calls `beginWork()`. This is the equivalent to starting the execution of the function execution contexts in the execution stack.

<!---So unitOfWork is same as a fiber node. -->

When React builds the tree, beginWork() simply leads up to createFiberFromTypeAndProps() and creates the fiber nodes. React recursively performs work and eventually performUnitOfWork() returns a null, indicating that it has reached the end of the tree.

Now what happens when we do instance.handleClick(), which basically clicks the button and triggers a state update? In this case, React traverses the fiber tree, clones each node, and checks whether it needs to perform any work on each node. When we look at the call stack of this scenario, it looks something like this:

![instance.handleClick() Call Stack](https://i1.wp.com/blog.logrocket.com/wp-content/uploads/2019/11/function-call-stack-2.png?resize=730%2C517&ssl=1)

Although we did not see completeUnitOfWork() and completeWork() in the first call stack, we can see them here. Just like performUnitOfWork() and beginWork(), these two functions perform the completion part of the current execution which effectively means returning back to the stack.

As we can see, these four functions together perform the work of executing the unit of work, and also give control over the work being done currently, which is exactly what was missing in the stack reconciler. As we can see from the image below, each fiber node is composed of four phases required to complete that unit of work.

![Fiber Node Diagram](https://i0.wp.com/blog.logrocket.com/wp-content/uploads/2019/11/fiber-node-diagram.png?resize=730%2C405&ssl=1)

It’s important to note here that each node doesn’t move to completeUnitOfWork() until its children and siblings return completeWork(). For instance, it starts with performUnitOfWork() and beginWork() for <App/>, then moves on to performUnitOfWork() and beginWork() for Parent1, and so on. It comes back and completes the work on <App> once all the children of <App/> complete work.

This is when React completes its render phase. The tree that’s newly built based on the click() update is called the workInProgress tree. This is basically the draft tree waiting to be rendered.

## Commit phase

Once the render phase completes, React moves on to the commit phase, where it basically swaps the root pointers of the current tree and workInProgress tree, thereby effectively swapping the current tree with the draft tree it built up based on the click() update.

![Commit Phase Diagram](https://i1.wp.com/blog.logrocket.com/wp-content/uploads/2019/11/commit-phase-diagram.png?resize=730%2C874&ssl=1)

Not just that, React also reuses the old current after swapping the pointer from Root to the `workInProgress` tree. The net effect of this optimized process is a smooth transition from the previous state of the app to the next state, and the next state, and so on.

And what about the 16ms frame time? React effectively runs an internal timer for each unit of work being performed and constantly monitors this time limit while performing the work. The moment the time runs out, React pauses the current unit of work being performed, hands the control back to the main thread, and lets the browser render whatever is finished at that point.

Then, in the next frame, React picks up where it left off and continues building the tree. Then, when it has enough time, it commits the `workInProgress` tree and completes the render.



https://indepth.dev/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react/



