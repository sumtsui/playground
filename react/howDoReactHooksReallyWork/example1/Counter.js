// Example 1
const useState = require('./useState');

function Counter() {
  const [count, setCount] = useState(0); // same useState as above
  return {
    click: () => setCount(count() + 1),
    render: () => console.log('render:', { count: count() }),
  };
}
const C = Counter();
C.render(); // render: { count: 0 }
C.click();
C.render(); // render: { count: 1 }
