const func2 = (func) => {
    const x = 10,y = 20,z = 30
    return func(x,y,z)
}

console.log(func2((x,y,z) => (x + y + z)))
console.log(func2((x,y,z) => (x * z - y)))
// จาก 2 ตัวอย่างข้างบน func2 รับอะไรเข้ามา และมีการทำงานอย่างไร

console.log(func2((x,y) => (x - y)))
console.log(func2((y,z) => (y - z)))
// ทำไม 2 อันนี้ ถึงได้คำตอบที่เท่ากัน ทั้งที่ใช้ตัวแปรต่างกัน
// Function ตัวนี้อาจจะช่วยแก้ข้อสงสัยได้
func2((a,b) => { console.log(`a = ${a}, b = ${b}`) })

// ----------------------------------------------------------------

function max2(a,b){
    return a > b ? a : b
}

function max3(a,b,c){
    return max2(max2(a,b),c)
}

console.log(func2(max3))
// คิดว่าผลลัพธ์ที่ได้เกิดจากอะไร และการใส่ max3 เข้าไปแบบนี้ มันจะไปทำงานยังไง

/*
มีถึงตรงนี้พอจะเข้าใจ Concept ของ Callback Function เพิ่มขึ้นไหมครับ
ไอเดียก็เหมือนว่าเรา มอง Function เป็นค่าค่านึงที่เราจะสามารถส่งมันไปใน Function อื่นๆได้ โดยเป็นเหมือน
Parameter ของ Function นั้นๆ

ในการเขียน Frontend เราก็จะเจอปัญหาประมาณนี้บ่อยๆนั่นแหละ แต่ถ้ายังรู้สึกไม่เข้าใจอีก
เราลองไปเขียน Callback Function กันเองบ้างดีกว่า
*/