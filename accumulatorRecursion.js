function joinElements(array, joinString) {

  function recurse(index, resultSoFar) {
    resultSoFar += array[index]

    if (index === array.length - 1) {
      return resultSoFar
    } else {
      return recurse(index + 1, resultSoFar + joinString)
    }
  }

  return recurse(0, '')

}

const result = joinElements(['a', 'p', 'p', 'l', 'e'], ',')

console.info('result', result)

// call stacks~~~~
function joinElements(array, joinString) {  // ['a', 'p', 'p', 'l', 'e'], ','

  function recurse(index, resultSoFar) {
    resultSoFar += array[ index ]

    if (index === array.length - 1) {
      return resultSoFar
    } else {
      return recurse(index + 1, resultSoFar + joinString)
    }
  }

  return recurse(0, '')
  ~~~~~

}

function recurse(index, resultSoFar) {  // 0, ''
  resultSoFar += array[ index ] // a

  if (index === array.length - 1) {
    return resultSoFar
  } else {
    return recurse(index + 1, resultSoFar + joinString) // 1, a,
    ~~~~~
  }
}

function recurse(index, resultSoFar) {  // 1, a,
  resultSoFar += array[ index ] // a,p

  if (index === array.length - 1) { // 1
    return resultSoFar
  } else {
    return recurse(index + 1, resultSoFar + joinString)
  }
}
