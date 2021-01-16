import Didact from './Didact';

/** @jsx Didact.createElement */
const element = (
  <div id="foo">
    <h3>this is jsx transformed html!</h3>
    <a>foo</a>
    <a>bar</a>
    <b />
  </div>
);

const container = document.getElementById('root');
Didact.render(element, container);
