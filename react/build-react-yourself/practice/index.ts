// object returned from React.createElement()
interface ITree {
  type: string,
  props: {
    [key: string]: any,
    children: ITree[],
  },
  dom?: any,
}

const tree: ITree = {
  type: 'div',
  props: {
    className: 'foo',
    children: [
      {
        type: 'h1',
        props: {
          children: [
            {
              type: 'TEXT',
              props: {
                children: [],
                nodeValue: 'Hello,' 
              }
            },
            {
              type: 'TEXT',
              props: {
                children: [],
                nodeValue: ' World' 
              }
            }
          ]
        }
      },
      {
        type: 'p',
        props: {
          id: 'bar',
          children: [
            {
              type: 'TEXT',
              props: {
                nodeValue: 'hahahaha',
                children: []
              }
            },
            {
              type: 'br',
              props: {
                children: []
              }
            },
            {
              type: 'TEXT',
              props: {
                children: [],
                nodeValue: 'hohoho',
              }
            },
          ]
        }
      },
      {
        type: 'p',
        props: {
          children: [
            {
              type: 'TEXT',
              props: {
                nodeValue: 'this is ',
                children: []
              }
            },
            {
              type: 'strong',
              props: {
                children: [
                  {
                    type: 'TEXT',
                    props: {
                      nodeValue: 'another',
                      children: []
                    }
                  },
                ]
              }
            },
            {
              type: 'TEXT',
              props: {
                children: [],
                nodeValue: ' paragraph.',
              }
            },
          ]
        }
      },
    ]   
  }
};

// root element
const rootEl = document.getElementById('root');

// iterate the tree
function processTree(tree: ITree) {
  const arr = [tree];

  while (arr.length) {
    const node = arr.shift();

    if (!node) break;

    arr.push(...node.props.children);
    
    createDOMElement(node);
    
    console.log('node', node);
  }
} 

processTree(tree);

function createDOMElement(node: ITree) {
  let dom: any;
  if (node.type === 'TEXT') {
    dom = document.createTextNode('');
  } else {
    dom = document.createElement(node.type);
  }
  Object.keys(node.props)
    .filter(key => key !== 'children')
    .forEach((name) => {
      dom[name] = node.props[name];
    });
  node.dom = dom;
}

function commitToDOM(tree: ITree, parentDOMNode: HTMLElement) {
  if (!tree) return;
  
  parentDOMNode.appendChild(tree.dom);

  tree.props.children.forEach(c => {
    commitToDOM(c, tree.dom);
  });
}

commitToDOM(tree, rootEl!);














