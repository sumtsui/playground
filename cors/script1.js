console.log('script1');
fetch('http://localhost:2002/data', {
  // mode: 'no-cors'
  // mode: 'cors'
  credentials: 'include'
})
  .then(res => {
    console.log('res', res);
    return res.json()
  })
  .then((res) => {
    console.log(res);
  })
  .catch(err => console.error(err))