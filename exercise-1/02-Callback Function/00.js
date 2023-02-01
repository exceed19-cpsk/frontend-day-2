/*
เชื่อว่าแบบฝึกหัดจากบทที่แล้วน่าจะทำให้น้องพอเก็ตไอเดีย Syntax พื้นฐานของภาษา JavaScript แล้ววว
ในบทนี้เราจะมาทำความเข้าใจเรื่องของ "Callback Function" ซึ่งมีความสำคัญอย่างมาก ในการเขียน Frontend
และถือเป็นเรื่องนึงที่อาจจะดูยากในครั้งแรกที่ได้เรียนนะครับ แต่จะพยายามยกตัวอย่างให้เข้าใจมากที่สุดนะครับ
*/

/*
สำหรับข้อนี้ เราจะมาลองดูวิธีการประกาศ Function ในหลายๆแบบกันดูนะครับ
*/

// [1]
function addNormal(x,y){
    return x + y
}

// [2]
const addAnonymous = function(x,y){
    return x + y
}

// [3]
const addArrow = (x,y) => {
    return x + y
}

// [4]
const addArrowButShorter = (x,y) => (x + y)

// จากการประกาศทั้ง 4 อย่างข้างบน ทดลองรันดู
var x = 7, y = 5
console.log(addNormal(x,y))
console.log(addAnonymous(x,y))
console.log(addArrow(x,y))
console.log(addArrowButShorter(x,y))
// จะพบว่ามันเวิคเหมือนกัน ลองดูว่าจากแบบ 1 ไปเรื่อยๆจนถึง 4 ค่อยๆมีวิธีเขียนเปลี่ยนไปยังไงบ้าง

// ทีนี้ลองดูการเขียนฟังก์ชันในแบบที่ 3 กับ 4 คิดว่าทำไมแบบที่ 4 ถึงสามารถคืนค่าได้โดยไม่ใช้ return (ลองสังเกตุว่ามีวิธีเขียนอย่างไร ต่างจากแบบที่ 3 บ้าง)

// ต่อมาลองสั่งแสดงผลฟังก์ชั่นเหล่านี้ (แนะนำให้ไปลองทำใน Console ของตัว Browser อาจจะได้รายละเอียดที่ชัดเจนกว่าใน VSCode)
console.log(addNormal)
console.log(addAnonymous)
console.log(addArrow)
console.log(addArrowButShorter)
// คิดว่าสิ่งที่แสดงออกมา มีความหมายว่าอะไร