https://webpack.js.org/guides/code-splitting/#prefetchingpreloading-modules

- prefetch: resource is probably needed for some navigation in the future
- preload: resource will also be needed during the current navigation

```js
btn.addEventListener('click', () => {
  import(/* webpackPrefetch: true */ 'lodash').then(({ default: _ }) => {
    const trimed = _.trim(message);
    ...
  });
});
```

the magic commend above will add a tag in the html head:

```html
<link
  rel="prefetch"
  as="script"
  href="http://localhost:9000/vendors-node_modules_lodash_lodash_js.main.js"
/>
```
