```js
Number.MAX_SAFE_INTEGER // 9007199254740991
```

```js
Number.MAX_SAFE_INTEGER + 1 === Number.MAX_SAFE_INTEGER + 2 // true
```

when calculation bigger than `Number.MAX_SAFE_INTEGER`, it is not reliable anymore. It is 16 digits.

```js
parseInt('100000000000000000000') // 100000000000000000000
parseInt('1000000000000000000000') // 1e+21
```

when parsing number bigger than 20 digits, it will become scientific notation.