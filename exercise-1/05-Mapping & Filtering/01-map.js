/*
หลังจากเข้าใจ Concept ของตัว Callback Function แล้วเราจะมาใช้ Method ของ Array ที่ใช้สำหรับ
การสร้าง Array ใหม่จาก Array เดิม ที่มีประโยชน์มากๆนั่นคือการ "Map" และการ "Filter" นั่นเอง
ถ้าเคยเขียน Python มาเนี่ย 2 อย่างนี้ จะคล้ายๆ กับการทำ List Comprehension ([i for i in range(10)])

เราจะขอเริ่มจากการ Map ก่อนละกันนะครับ
*/

const data = ['ant','bird','cat','dog','egg']

let map_1 = data.map((a) => (a))
console.log('Map #1 =',map_1)
// [?] คิดว่าการที่ <Array>.map() นั้นทำอะไรกันนะ (ตรงนี้อาจจะยังไม่เห็นภาพ)

let map_2 = data.map((a) => (a + 'Extra'))
console.log('Map #2 =',map_2)
// [?] ประมาณนี้พอตอบได้รึยังว่ามันน่าจะทำอะไร (ว่าแต่ทำไม Function เขียนโดยใช้วงเล็บแบบ (a) แทนที่จะเป็น {return a} พอจำได้ไหมว่าคืออะไร)
// [?] คิดว่าตัวแปร a น่าจะหมายถึงอะไรใน Array "data" และถ้าเปลี่ยน a เป็นตัวอื่นจะยังได้ค่าเดิมอยู่ไหม

let map_3 = data.map((a,b) => (b))
console.log('Map #3 =',map_3)
// [?] คิดว่าตัวแปร b น่าจะหมายถึงอะไรใน Array "data" และถ้าเปลี่ยน b เป็นตัวอื่นจะยังได้ค่าเดิมอยู่ไหม

let map_4 = data.map((a,b,c) => (c))
console.log('Map #4 =',map_4)
// [?] คิดว่าตัวแปร c น่าจะหมายถึงอะไรใน Array "data" และถ้าเปลี่ยน c เป็นตัวอื่นจะยังได้ค่าเดิมอยู่ไหม

// [?] ถ้าเรามองว่า .map() เป็น Callback Function คิดว่ามันทำงานอย่างไรบ้าง

function capitalLetter(text){
    return text[0].toUpperCase() + text.slice(1)
}

console.log('5.1 =',capitalLetter("hello"))
console.log('5.2 =',capitalLetter("i"))
console.log('5.3 =',capitalLetter("okay"))
// [?] คิดว่า capitalLetter() มีหน้าที่ทำอะไร

let map_5 = data.map(capitalLetter)
console.log('Map #5 =',map_5)
// [?] คิดว่าทำไมผลลัพธ์จึงเป็นเช่นนั้น