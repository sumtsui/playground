const getCircularReplacer = () => {
  const seen = new WeakSet();
  return (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (seen.has(value)) {
        return;
      }
      seen.add(value);
    }
    return value;
  };
};

function stringifyObj(obj) {
  return JSON.stringify(obj, getCircularReplacer(), 2);
}

export default stringifyObj;
