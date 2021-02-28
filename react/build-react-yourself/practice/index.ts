// object returned from React.createElement()
interface ITree {
  type: string,
  props: {
    [key: string]: any,
    children: ITree[],
  },
  dom?: any,
  isParent?: boolean
}

const nodeTree: ITree = {
  type: 'div',
  props: {
    class: 'foo',
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
    ]   
  }
};

// root element
const rootEl = document.getElementById('root');

// iterate the tree
function processTree(tree: ITree) {
  let arr = [tree, {type: '*', props: {children: []}}];
  let parent = rootEl;
  let preNode = tree;

  while (arr.length) {
    const node = arr.shift();

    if (!node) break;

    if (node.type === '*') {
      parent = preNode.dom;
    } else {
      // create DOM for each node
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

      // append DOM to current node's parent
      parent?.appendChild(node.dom);
    }

    console.log('node', node);
    
    if (node.props.children.length > 0) {
      arr = [...arr, ...node.props.children, {type: '*', props: {children: []}}];
      preNode = node;
    }
  }
} 

processTree(nodeTree);

// function commitToDOM(tree: ITree) {
//   if (!tree) return; 

//   const parent = rootEl;

//   parent?.appendChild(tree.dom);
// }

// commitToDOM(nodeTree);














