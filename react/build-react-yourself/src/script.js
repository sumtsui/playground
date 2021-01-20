import Didact from './Didact';

/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <div>
      <h1>
        <p />
        <a />
      </h1>
      <h2></h2>
    </div>
  </div>
);
/**
 * Babel will transform the above code into:
 * */
// const elementProccessedByBabel = Didact.createElement(
//   'div',
//   { id: 'foo' },
//   Didact.createElement('h3', null, 'this is jsx transformed html!'),
//   Didact.createElement(
//     'p',
//     null,
//     'haha this is ',
//     Didact.createElement('b', null, 'bar')
//   ),
//   Didact.createElement('p', null, 'what up')
// );

const container = document.getElementById('root');
Didact.render(element, container);
