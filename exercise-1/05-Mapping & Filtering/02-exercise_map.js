const data = ['ant','bird','cat','dog','egg']

// [EXERCISE] ลองใช้ Method .map() เพื่อสร้าง Array ใหม่จาก "data" ตามที่กำหนดให้

// [ 'a', 'b', 'c', 'd', 'e' ]
console.log(data.map(value => value[0]))

// [ 3, 4, 3, 3, 3 ]
console.log(data.map(value => value.length))

// [ 0, 2, 4, 6, 8 ]
console.log(data.map((value,index) => index*2))

// [ true, false, true, false, true ]
console.log(data.map((value,index) => index % 2 === 0))

// [ '1) ant', '2) bird', '3) cat', '4) dog', '5) egg' ]
console.log(data.map((value,index) => `${index+1}) ${value}`))

/*
[
    [ 'ant', 'bird', 'cat', 'dog', 'egg', 'ant' ],
    [ 'ant', 'bird', 'cat', 'dog', 'egg', 'bird' ],
    [ 'ant', 'bird', 'cat', 'dog', 'egg', 'cat' ],
    [ 'ant', 'bird', 'cat', 'dog', 'egg', 'dog' ],
    [ 'ant', 'bird', 'cat', 'dog', 'egg', 'egg' ]
]

Hint: Spread Operator (...)
*/
console.log(data.map((value,index,array) => [...array,value]))


