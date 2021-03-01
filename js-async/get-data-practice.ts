import { requestHttp } from '../nodeJS/async/request';

function getData(query: number) {
  return requestHttp('localhost', `/hello?query=${query}`, 2001)
    .then(console.log)
    .catch(err => console.error(err));
}

