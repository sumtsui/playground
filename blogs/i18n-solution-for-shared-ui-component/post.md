# Dynamically bundle i18n file in shared UI component based on current locale

At work, we break UI components into parts and publish them to company's internal NPM registry to share them across different apps.   

In the app we can easily consume the shared components like this:

```js
import SharedComponent from 'some-shared-component'

function Consumer(props) {
  return (
    <div>
      <SharedComponent {...props} />
    </div>
  )
}
```

This is convenient but comes with a caveat. Our web app supports i18n (internalization) for 34 languages, which means there are 34 json files for every languages and they all come with the component. 

If the consumer imports the component as usual, and if you run a bundle analyser  you will see **all i18n files will be included in the initial bundle. This means even the client only needs to display one language, it will have to download all 34 files** 

Our typical solution for this is to copy the content of the i18n files to the consumer repo via a script before each build. This works fine but it requires the consumer to aware the structure of the shared components. This article explores a different approach which requires nothing from the consumer. 

Webpack supports code-splitting by dynamic import. We can configure the shared component's Babel to compile all ESNext syntax except `esmodule` syntax:

```json
// .babelrc
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "modules": false
      }
    ],
    ...
  ]
}
```

This way, as the author of the shared UI component, we are assuming the consumers of our component will use a bundler such as Webpack which supports `esmodule` syntax to further compile the code. 

Next, we add this function to the UI component: 

```js
const getMessageSource = () => {
  // get current locale (this is how we do it, but in your app you might get it some other way)
  const locale = window.i18n.locale || "en_US";

  return import(
		`../i18n/messages_${locale}.json`
  )
    .then((source) => {
      // provide the i18n content to the UI
    })
    .catch((err) => {
  		// error handling
    });
};
```

And use this function like so:

```js
import getMessageSource from "./getMessageSource";

function MyCoolSharedComponent(props) {
	getMessageSource()

  return (
    <div>
      <SomeUI />
      <SomeUI />
      <SomeUI />
    </div>
  );
};
```

After this. If you run bundle analysis again, you should see all i18n files are in their separate chunks.

Webpack splits the i18n files into their own chunk. Now if the consumer uses our shared component, the initial bundle will not contain any i18n files. And the one i18n file that actually needed will be downloaded at run time based on the user's locale. 

`import()`is an async function.

If we load the hypothetical web page, we will be likely to see localization keys instead of the localized strings.

This is because the i18n file is downloading the same time as React is rendering. And i18n file is likely to be loaded after React rendered. 

To avoid this, we can wrap our `getMessageSource` function in a simple custom react hook:

```js
const useMessageSource = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getMessageSource().then(() => setIsLoaded(true));
  }, []);

  return isLoaded;
};
```

And use the hook in our component like so:

```js
function MyCoolSharedComponent(props) {  
  const isMessageSourceLoaded = useMessageSource();

  if (!isMessageSourceLoaded) {
    return null
    // or return some loading indicator
  };

  return (
    <div>
      <SomeUI />
      <SomeUI />
      <SomeUI />
    </div>
  );
};
```

Now we will ensure React won't render the actual content of the component before the i18n file is ready. 

Lodash has a version called lodash-es, https://www.npmjs.com/package/lodash-es, the approach is the same, to leverage Webpack's code splitting for dynamic import.

That is all. Hope you find this article helpful.