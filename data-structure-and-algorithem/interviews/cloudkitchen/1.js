// Part 1 Static File
// You are given a static log file containing billions of entries. Each entry contains a timestamp and the name of a food order. The entries in the log file appear in order of increasing timestamp. Design a method getCommon(k) to determine the k most common food orders found in the log file.
 
// Hamburger          1595268625
// Salad              1595268626
// HotDog             1595268627
// // Hamburger          1595268628
// // HotDog             1595268629
// // HotDog             1595268630
// // …

// getCommon(2, orderList)

// function getCommon(k, orderList) {

//   const obj = {}

//   for (let order of orderList) {
//     if (obj[order]) {
//       obj[order] += 1
//     }

//     else {
//       obj[order] = 1
//     }
//   }

//   obj.entries().sort(([keyPrev, valuePrev],[key, value]) => valuePrev - value)

// }

// Part 2 Streaming
// We now want to analyze food orders in a real-time streaming application. All food orders may not have been received at the time the top k most common ones need to be computed. Given the addition of this requirement, how would you handle processing incoming food orders and computing the top k?  
// Your solution should have two functions ingestOrder(order) and getCommon(k). 
// Expect the number of function calls to ingestOrder(order) and getCommon(k) to be roughly equal.

// ingestOrder(order)

// getCommon(k)



// const orderMap = new Map()
// const orderFreqIndexMap = new Map() // orderName -> index of the orderList
// const orderList = []

// class Node {
//   value int
//   name string
//   prevNode *Node
//   nextNode *Node
// }

// ordersMap ordername -> *node

// function ingestOrder(incomingOrder) {
//   orderTotal++
//   const f = orderMap.get(incomingOrder) 
//   if (f) {
//     orderMap.set(incomingOrder, f + 1) 
//     // find incomingOrder's position from orderFreqIndexMap
//     // check freq before incomingOrder
//       // if incomingOrder freq > before order freq
//         // swap position
//   } else {
//     orderMap.set(incomingOrder, 1)
//     orderList.push(incomingOrder)
//     // set incomingOrder idx in orderFreqIndexMap
//   }


// }

// function getCommon(k) {
//   // let i = 0
//   // while (i < orderTotal) {
//   //   orderMap
//   // }
// }