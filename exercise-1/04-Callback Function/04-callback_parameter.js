const func2 = (func) => {
    const x = 10,y = 20,z = 30
    return func(x,y,z)
}

console.log(func2((x,y,z) => (x + y + z)))
console.log(func2((x,y,z) => (x * z - y)))
// [?] จาก 2 ตัวอย่างข้างบน func2 รับอะไรเข้ามา และมีการทำงานอย่างไร

console.log(func2((x,y) => (x - y)))
console.log(func2((y,z) => (y - z)))
// [?] ทำไม 2 อันนี้ ถึงได้คำตอบที่เท่ากัน ทั้งที่ใช้ตัวแปรต่างกัน

// Function ตัวนี้อาจจะช่วยแก้ข้อสงสัยได้
console.log(func2((a,b) => (a - b)))