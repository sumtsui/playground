import HashTable from './hash-table';

const hashTable = new HashTable();

hashTable.set('hello', 'world');
hashTable.set('hello', 'coco');

console.log(hashTable.get('hello')); // coco
console.log(hashTable); // [ 'hello' ]

console.log(hashTable.hash('hello'));
console.log(hashTable.hash('jack'));
console.log(hashTable.hash('jamie'));
