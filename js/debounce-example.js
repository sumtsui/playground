// Originally inspired by  David Walsh (https://davidwalsh.name/javascript-debounce-function)

// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// `wait` milliseconds.
const debounce = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

const sendData = debounce(() => console.log('sent'), 500);

sendData();
sendData();
sendData();
sendData();

/**
 * this debounce will not clear the timeout every time it is called.
 * it will save the timer in closure, execute the timer and its callback.
 * then clear the timer.
 * when the debounce function is called again, it will create a new timer.
 * if the timer callback receive arguments, it will NOT get the latest arguments.
 */
const debounce2 = (func, wait) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      func(...args);
      clearTimeout(timeout);
    };

    // clearTimeout(timeout);
    if (timeout) return;
    timeout = setTimeout(later, wait);
  };
};
