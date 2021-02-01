https://developers.google.com/web/fundamentals/performance/critical-rendering-path/constructing-the-object-model

## How HTML and CSS are rendered

Bytes → characters → tokens → nodes → object model.

HTML markup is transformed into a Document Object Model (DOM);
CSS markup is transformed into a CSS Object Model (CSSOM).
With the same process above.

DOM and CSSOM are independent data structures.

The DOM and CSSOM trees are combined to form the render tree (Render tree contains only the nodes required to render the page)

After the render tree is formed, layout computes the exact position and size of each object.

The last step is paint, which takes in the final render tree and renders the pixels to the screen.

_CSS is render blocking_
_The browser won't render any processed content until the CSSOM is constructed._

You can use Media query to let the browser know some of the CSS are not render blocking:

```html
<link href="portrait.css" rel="stylesheet" media="orientation:portrait" />
<link href="print.css" rel="stylesheet" media="print" />
```

## How browser treats javascript files

Because JavaScript can query and modify the DOM and the CSSOM.

The browser assumes worst case scenario:

### CSS goes first

the browser delays script execution and DOM construction until it has finished downloading and constructing the CSSOM.

### JS goes second

JavaScript blocks DOM construction unless explicitly declared as async.

When it encounters javascript (either inline or external), it pause DOM construction, hand over control to the JavaScript runtime, and let the script execute before proceeding with DOM construction.

### Use `async` and `defer` attribute

async

downloads while the HTML file is loading and parsing. Once downloaded, **pauses** HTML in order to execute the code.

defer

downloads while the HTML file is loading and parsing. won't execute the code **untill** HTML is complete.

https://bitsofco.de/async-vs-defer/
