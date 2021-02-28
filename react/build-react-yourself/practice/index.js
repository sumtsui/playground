"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var nodeTree = {
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
var rootEl = document.getElementById('root');
// iterate the tree
function processTree(tree) {
    var arr = [tree, { type: '*', props: { children: [] } }];
    var parent = rootEl;
    var preNode = tree;
    var _loop_1 = function () {
        var node = arr.shift();
        if (!node)
            return "break";
        if (node.type === '*') {
            parent = preNode.dom;
        }
        else {
            // create DOM for each node
            var dom_1;
            if (node.type === 'TEXT') {
                dom_1 = document.createTextNode('');
            }
            else {
                dom_1 = document.createElement(node.type);
            }
            Object.keys(node.props)
                .filter(function (key) { return key !== 'children'; })
                .forEach(function (name) {
                dom_1[name] = node.props[name];
            });
            node.dom = dom_1;
            // append DOM to current node's parent
            parent === null || parent === void 0 ? void 0 : parent.appendChild(node.dom);
        }
        console.log('node', node);
        if (node.props.children.length > 0) {
            arr = __spreadArrays(arr, node.props.children, [{ type: '*', props: { children: [] } }]);
            preNode = node;
        }
    };
    while (arr.length) {
        var state_1 = _loop_1();
        if (state_1 === "break")
            break;
    }
}
processTree(nodeTree);
// function commitToDOM(tree: ITree) {
//   if (!tree) return; 
//   const parent = rootEl;
//   parent?.appendChild(tree.dom);
// }
// commitToDOM(nodeTree);
