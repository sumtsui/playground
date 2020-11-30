// simulating a loop with recursion in closure
function wrapperFunction(start, end) {
  function recurse(i) {
    if (i < end) {
      console.info(i)
      return recurse(++i)
    }
  }

  recurse(start)
}

wrapperFunction(1, 7)