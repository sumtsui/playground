### Deep copy vs shallow copy

https://medium.com/@manjuladube/understanding-deep-and-shallow-copy-in-javascript-13438bad941c

Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference  addresses are copied i.e., only the memory address is copied.

A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the  objects to which it refers.
