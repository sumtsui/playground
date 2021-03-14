https://reactjs.org/docs/render-props.html

```js
const DefaultPolicy: FC<IProps> = ({ htid, render }: IProps) => {
  const { data, loading, error } = useDefaultPolicy(htid);

  return render(data, loading, error);
};

<DefaultPolicyWrap
  htid={htid}
  render={(data, loading, error) => {
    // return a ReactComponent of your own
  }}
/>
```

