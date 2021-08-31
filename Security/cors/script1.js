console.log('script1');
fetch('http://localhost:2002/data', {
  // mode: 'no-cors'
  // mode: 'cors'
  // credentials: 'include',
})
  .then((res) => res.json())
  .then((res) => {
    console.log('get from script', res);
  })
  .catch((err) => console.error(err));
