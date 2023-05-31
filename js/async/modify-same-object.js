function task(fn, delay = 1000) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fn();
      resolve();
    }, delay);
  });
}


const payload = {};

const t1 = task(() => {
  console.log('t1');
  payload.event1 = payload.event1 ? { ...payload.event1, t1: true, t2: false } : { t1: true };
}, 500);
const t2 = task(() => {
  console.log('t2');
  payload.event1 = payload.event1 ? { ...payload.event1, t2: true } : { t2: true }; 
}, 500);
const t3 = task(() => {
  console.log('t3');
  payload.event1 = payload.event1 ? { ...payload.event1, t3: true, t2: 'haha' } : { t3: true }; 
}, 500);

Promise.all([
  t1, t2, t3
]).then(() => console.log(payload));
