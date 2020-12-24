// Example 1
const MyReact = require('./MyReact');

function Counter() {
  const [count, setCount] = MyReact.useState(0);

  MyReact.useEffect(() => {
    console.log('effect', count);
  }, [count]);

  return {
    click: () => setCount(count + 1),
    render: () => console.log('render:', { count }),
    noop: () => setCount(count),
  };
}

let App;
App = MyReact.render(Counter); // render: { count: 0 }
App.click();
App = MyReact.render(Counter); // render: { count: 1 }
