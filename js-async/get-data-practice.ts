import { requestHttp } from '../nodeJS/async/request';
import { bulkGetDataOnce } from '../nodeJS/async/asyncBulk';

function getData(query: number) {
  return requestHttp('localhost', `/hello?query=${query}`, 2001);
  // .then(output)
  // .catch(err => console.error(err));
}

function output(arg) {
  console.log('output:', arg.toString());
}

bulkGetDataOnce(100, getData, 'getData');

// getData(100);