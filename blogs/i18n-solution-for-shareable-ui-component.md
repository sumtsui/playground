### How i18n works for normal client-server app

i18n files live in the same repo as the app.

![2021-04-01 at 5.00 PM](/Users/sum_xu/Desktop/playground/blogs/i18n-repo.png)

the app's server will generate a script which will write the i18n strings to the browser's window object,

![2021-04-01 at 4.59 PM](/Users/sum_xu/Desktop/playground/blogs/i18n-window.png)

then the rest of the frontend code can access them:

![2021-04-01 at 5.03 PM](/Users/sum_xu/Desktop/playground/blogs/i18n-getText.png)

This way the i18n strings will be available to the client without adding weight to the client bundle.

### How i18n works for shareable UI components

However, if we are building a UI component meant to be used by any consumers, and we don't want the consumer to do exact work when importing our UI component, a straightforward approach is to put all the i18n files in the UI component's repo. and accessing the them like so:

![2021-04-01 at 5.26 PM](/Users/sum_xu/Desktop/playground/blogs/i18n-3.png)

The disadvange with this approach surfaces when we look at the consumer's bundle:

**All i18n files are bundled together. This means even the client only needs to display one lanauge, it will force the user to download all 34 files.**

![2021-04-01 at 5.30 PM](/Users/sum_xu/Desktop/playground/blogs/i18n-before-op.png)

### Dynamic import comes to resecue

Webpack support code splitting with `import()` syntax. 

In our shareable component, we can do this:

```typescript
const getMessageSource = () => {
  const locale = window?.EPC?.i18n?.locale || "en_US";
  const javaLocale = getJavaLocale(locale);

  return import(
		`../i18n/messages_${javaLocale}.json`
  )
    .then((source) => {
      const i18nCXL = {
        i18n: {
          messages: source.default
        },
      };
      window.EPC = merge(window.EPC, i18nCXL);
    })
    .catch((err) => {
  		// error handling
    });
};
```

We first get the current locale from `window`, then we dynamically import the corresponding i18n file.

Look at the consumer's client bundle again,

![2021-04-01 at 5.57 PM](/Users/sum_xu/Desktop/playground/blogs/i18n-4.png)

How awesome is this! Webpack splits the i18n files into their own chunk. Now if the consumer uses our shareable component, the initail bundle will not contain any i18n files. And the one file that actually needed will be downloaded at run time. 

### `import()`is an async function

Our shareable component will look something like this, calling `getMessageSource()` 

```react
import React, { FC } from "react";
import { getMessageSource } from "../../hooks/useMessageSource";

getMessageSource();

const CancelPolicyNote: FC<IProps> = ({ htid }: IProps) => {

  return (
    <ApolloProvider client={client}>
      <ContentWrap htid={htid} />
    </ApolloProvider>
  );
};

export default CancelPolicyNote;
```

Now when the consuemer loads, it will look like this: 

![i18n-lockey](/Users/sum_xu/Desktop/playground/blogs/i18n-lockey.png) 

the i18n key for the word "Loading" is displayed instead of the actual text. 

To avoid this, we can wrap our `getMessageSource` function with a simple custom react hook:

```react
const useMessageSource = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    getMessageSource().then(() => setIsLoaded(true));
  }, []);

  return isLoaded;
};
```

And use the hook in our component like so:

```react
const CancelPolicyNote: FC<IProps> = ({ htid }: IProps) => {
  const isMessageSourceLoaded = useMessageSource();

  if (!isMessageSourceLoaded) return null;

  return (
    <ApolloProvider client={client}>
      <ContentWrap htid={htid} />
    </ApolloProvider>
  );
};
```

Now we will ensure react won't render the actual content of the component when the i18n file is not ready. Of course, we can return a loader instead of `null.`![i18n-5](/Users/sum_xu/Desktop/playground/blogs/i18n-5.png)

### 























