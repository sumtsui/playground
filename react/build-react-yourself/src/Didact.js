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
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type);

  // assign the element props to the node.
  const isProperty = (key) => key !== 'children';
  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      dom[name] = element.props[name];
    });

  element.props.children.forEach((child) => render(child, dom));

  container.appendChild(dom);
}

const Didact = {
  createElement,
  render,
};

export default Didact;
