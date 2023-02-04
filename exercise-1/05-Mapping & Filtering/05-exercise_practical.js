/* 
ต่อมาเรามาลองใช้เรื่อง Map/Filter/Spread Operator ทำงานกับข้อมูลจริงมากขึ้น
เนื่องจากโดยปกติเราที่เป็นฝั่ง Frontend จะคอยรับข้อมูลจากฝั่ง Backend
เป็นแบบ JSON ซึ่งข้อมูลจะมีลักษณะเป็น Array of Object (เป็น Array ที่ข้างในมีข้อมูลเป็น Object) เหมือนด้านล่าง
*/

const data = [
  { name:"kana", age:25, salary:5400 },
  { name:"gun", age:32, salary:9300 },
  { name:"nut", age:14, salary:2100 },
  { name:"boome", age:19, salary:1400 },
  { name:"fluck", age:41, salary:3000 },
  { name:"bass", age:34, salary:11000 },
  { name:"balle", age:29, salary:2100 },
  { name:"gitar", age:22, salary:2400 },
  { name:"belle", age:51, salary:7200 },
  { name:"mic", age:49, salary:2500 },
]

// [EXERCISE] สร้าง Array ใหม่จาก "data" ที่มีข้อมูลแค่สำหรับคนที่อายุเกิน 40 ปี และเพิ่มเงินเดือนเป็น 2 เท่าจากเดิม
let result1 = data.filter(people => people.age > 40).map(people => ({
  ...people,
  salary: people.salary*2
}))
console.log(result1)
/* 
[
  { name: 'fluck', age: 41, salary: 6000 },
  { name: 'belle', age: 51, salary: 14400 },
  { name: 'mic', age: 49, salary: 5000 }
]
*/

// [EXERCISE] สร้าง Array ใหม่จาก "data" ที่มีข้อมูลคนที่ขึ้นต้นด้วยตัว b และเงินเดือนมากกว่า 7000 และเปลี่ยนชื่อจากอักษรหน้าตัวเล็กให้เป็นตัวใหญ่
let result2 = data.filter(people => people.name[0] === 'b' && people.salary > 7000).map(people => ({
  ...people,
  name: people.name[0].toUpperCase() + people.name.slice(1)
}))
console.log(result2)
/* 
[
  { name: 'Bass', age: 34, salary: 11000 },
  { name: 'Belle', age: 51, salary: 7200 }
]
*/

