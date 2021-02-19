// Example 1
const MyReact = require('./MyReact');

function Counter() {
  const [count, setCount] = MyReact.useState(0);
  const [text, setText] = MyReact.useState('foo');
  const [url, setUrl] = useSplitURL('www.netlify.com');

  MyReact.useEffect(() => {
    console.log('effect', count);
  }, [count, text]);

  return {
    click: () => setCount(count + 1),
    input: (txt) => setText(txt),
    render: () => console.log('render:', { count, text, url }),
    noop: () => setCount(count),
    setUrl: (url) => setUrl(url),
  };
}

function useSplitURL(str) {
  const [text, setText] = MyReact.useState(str);
  const masked = text.split('.');
  return [masked, setText];
}

let App;
App = MyReact.render(Counter);
App.click();
App = MyReact.render(Counter);
App.input('bar');
App = MyReact.render(Counter);
