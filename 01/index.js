console.log("hello world")

let t = [3, 6, 7, -1, 0, 2]

for (let i = 0; i < t.length; i++) // AVOID this!
    console.log(t[i])

for (let el of t)   // this will loop over the elements
    console.log(el)

for (let key in t)  // this will loop over the keys/indexes
    console.log(key)

let o = {
    age: 40,
    children: 2,
    married: true,
    name: 'John'
}

console.log(o.name)
console.log(o['name'])

function isEven(n){
    return n % 2 === 0
}

const isEvenTwo = (n) => n % 2 === 0

// let filtered = []
// for (let el of t){
//    if (el % 2 === 0)
//        filtered.push(el)
// }
// console.log(filtered)

console.log(t.filter(x => x % 2 === 0))

// Task

// 1. cube an array of numbers
console.log(t.map(x => x ** 3))

// 2. sum of the even elements
console.log(t.filter(x => x % 2 === 0).reduce((s, x) => s+x,0))
console.log(t.reduce((s, x) => s + (x % 2 === 0 ? x : 0) ,0))

// 3. largest element
  // a. Math.max
  // b. without using Math.max
console.log(Math.max(...t))
console.log(t.reduce((s, x) => x > s ? x : s, -Infinity))

// 4. increase the elements by their index
// e.g. [1, 0, 2, 0] --> [1, 1, 4, 3]
console.log(t.map((x, i) => x + i))

// 5. find the index of the first even number
console.log(t.findIndex(x => x % 2 === 0))