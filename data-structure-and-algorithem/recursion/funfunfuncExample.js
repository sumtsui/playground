const categories = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' },
  { id: 'cats', 'parent': 'mammals' },
  { id: 'dogs', 'parent': 'mammals' },
  { id: 'chihuahua', 'parent': 'dogs' },
  { id: 'labrador', 'parent': 'dogs' },
  { id: 'persian', 'parent': 'cats' },
  { id: 'siamese', 'parent': 'cats' }
]

function makeTree(categories, parent) {
  const node = {}
  categories
    .filter(c => c.parent === parent)
    .forEach(c => node[c.id] = makeTree(categories, c.id))
  
  return node
}

console.info('result', 
  JSON.stringify(
    makeTree(categories, null), null, 2
  )
)

/*

function makeTree(categories, null) {
  const node = {}
  categories
    .filter(c => c.parent === null)   // { id: 'animals', 'parent': null }
    .forEach(c => node[c.id] = makeTree(categories, c.id))    // node['animal'] = ~~~~~

  return node
}

function makeTree(categories, 'animal') {
  const node = {}
  categories
    .filter(c => c.parent === 'animal')   // { id: 'mammals', 'parent': 'animals' }
    .forEach(c => node[c.id] = makeTree(categories, c.id))    // node['mammals'] = ~~~~~

  return node
}

function makeTree(categories, 'mammals') {
  const node = {}
  categories
    .filter(c => c.parent === 'mammals')   // { id: 'cats', 'parent': 'mammals' },
                                              { id: 'dogs', 'parent': 'mammals' }
    .forEach(c => node[c.id] = makeTree(categories, c.id))    // node['cats'] = { persian: {}, siamese: {} }
                                                                 node['dogs'] = ~~~~~

  return node
}

function makeTree(categories, 'cats') {
  const node = {}
  categories
    .filter(c => c.parent === 'cats')   // { id: 'persian', 'parent': 'cats' },
                                           { id: 'siamese', 'parent': 'cats' }
    .forEach(c => node[c.id] = makeTree(categories, c.id))    // node['persian'] = {}

  return node
}

function makeTree(categories, 'persian') {
  const node = {}
  categories
    .filter(c => c.parent === 'persian')   // { },
    .forEach(c => node[c.id] = makeTree(categories, c.id))

  return node
}

*/