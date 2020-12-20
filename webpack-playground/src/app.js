import axios from './vendor';

const root = document.querySelector('#root');

const a = 2;
const b = 3;

const result = a + b;
const message = '    hey there!    ';

root.innerHTML = `
  <h3>result is ${result}</h3>
  <button>Lazy load</button>
`;

const btn = document.querySelector('button');

btn.addEventListener('click', () => {
  import(/* webpackPrefetch: true, webpackChunkName: "lodash" */ 'lodash').then(
    ({ default: _ }) => {
      const trimed = _.trim(message);
      const header = document.createElement('h3');
      header.innerText = trimed;
      root.appendChild(header);
    }
  );
});

window.onload = () => {
  axios
    .get('https://jsonplaceholder.typicode.com/todos/1')
    .then((res) => console.log(res))
    .catch((err) => console.log('err:', err));
};
