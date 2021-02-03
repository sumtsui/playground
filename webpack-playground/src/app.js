import axios from './vendor';
// import * as _ from 'lodash-es';
import _ from 'lodash';

const root = document.querySelector('#root');

const a = 2;
const b = 3;

const result = a + b;
const message = '    hey there!    ';

_.trim(message);

_.upperCase(message);

root.innerHTML = `
  <h3>result is ${message}</h3>
  <button>Lazy load</button>
`;

const btn = document.querySelector('button');

// btn.addEventListener('click', () => {
//   import(/* webpackPrefetch: true, webpackChunkName: "lodash" */ 'lodash').then(
//     ({ default: _ }) => {
//       const trimed = _.trim(message);
//       const header = document.createElement('h3');
//       header.innerText = trimed;
//       root.appendChild(header);
//     }
//   );
// });

window.onload = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => console.log(res))
    .catch((err) => console.log('err:', err));
};
