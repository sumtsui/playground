const arr = [
  { id: '111', pid: '', el: 'div' },
  { id: '112', pid: '111', el: 'div' },
  { id: '113', pid: '111', el: 'div' },
  { id: '114', pid: '', el: 'div' },
  { id: '115', pid: '114', el: 'div' },
  { id: '116', pid: '114', el: 'div' },
  { id: '117', pid: '116', el: 'div' },
];

// 看数组中元素pid有无跟当前元素id吻合
// 如果有，为当前元素增加children key，并负值吻合pid的元素

function addChildren(item1, item2) {
  if (item1.id === item2.pid) {
    arr.map((item) => addChildren(item));
  }
}

const result = [];

console.info('result', result);
