# Reconciliation

https://reactjs.org/docs/reconciliation.html

State or prop update in component

⏬

`render()` being called

⏬

A different tree of React elements (previously known as the "Vitual DOM Tree") is returned

⏬

Recusing and diffing between the new and the old tree

⏬

Update the DOM



## The Diffing Algorithm and the DOM Update Stratege

- If the root elements have different types, React will tear down the old tree and build the new tree from scratch. Any components below the root will also get unmounted and have their state destroyed.

  > When tearing down a tree, old DOM nodes are destroyed. Component instances receive `componentWillUnmount()`. When building up a new tree, new DOM nodes are inserted into the DOM. Component instances receive `componentWillMount()` and then `componentDidMount()`. Any state associated with the old tree is lost.

  

- If the react elements are of the same type, React looks at the attributes, keeps the same DOM node, and only updates the changed attributes in the DOM.

- When updating the children, the `key` attribute help to match children in the old tree and the new tree, to let React identify the efficient way to update the DOM.



## How React handles state or prop update in component

When a component updates, the instance stays the same, so that state is maintained across renders. React updates the props of the underlying component instance to match the new element, and calls `componentWillReceiveProps()` and `componentWillUpdate()` on the underlying instance.

Next, the `render()` method is called and the diff algorithm recurses on the previous result and the new result.



https://medium.com/react-in-depth/inside-fiber-in-depth-overview-of-the-new-reconciliation-algorithm-in-react-e1c04700ef6e

