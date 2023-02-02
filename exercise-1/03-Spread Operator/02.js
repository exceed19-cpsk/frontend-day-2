const array = [1,2,3,4,5]

// ลองสร้าง Array ต่อไปนี้ โดยใช้ Spread Operator ช่วย เพื่อให้สามารถสร้าง Array ได้ภายในบรรทัดเดียว
// !!! ห้ามใส่ตัวเลข 1,2,3,4 หรือ 5 และการจิ้มค่าจาก Index แบบปกติ(array[0],array[1],...) ในคำตอบ !!!

// [900,1,2,3,4,5]
console.log([900,...array])

// [10,20,30,1,2,3,4,5,50]
console.log([10,20,30,...array,50])

// [1,2,3,4]
// คำใบ้: slice
console.log([...array.slice(0,4)])

// [1,2,4,5]
// คำใบ้: ใน 1 กล่อง Array จะมี Spread Operator หลายอันก็ได้
console.log([...array.slice(0,2),...array.slice(3)])
