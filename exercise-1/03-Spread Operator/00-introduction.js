/*
[INTRODUCTION]
สำหรับหัวข้อนี้เราจะมาพูดถึง "Spread Operator" ซึ่งเป็นตัวดำเนินการตัวนึง ที่ใช้กับ Array/Object โดยจะมีสัญลักษณ์เป็น ... (จุด 3 จุด)
ซึ่งจะทำให้การจัดการกับข้อมูลใน Array/Object ได้ดีและสะดวกมากขึ้น โดยเฉพาะตอนที่ไปเขียนตัว React.js เลย
*/

const array = [1,2,3,4,5]

// เมื่อก่อนหากเราต้องการสร้าง Array ใหม่ที่เหมือนกับ Array ตัวนึงเราก็จะทำแบบนี้ใช่ไหมครับ
let new_array = []
for(var i=0;i<array.length;i++){
    new_array.push(array[i])
}
new_array.push(6)
console.log(new_array)

/* 
เหตุผลที่เราไม่สามารถจับ array = new_array ได้เลยเป็นเพราะเรื่องของ Pointer ในการเขียนโปรแกรม
ทำให้เราต้องมานั่งลูปทีละค่าใส่เข้าไป และถ้าเราจะใส่ค่าใหม่เพิ่มไปเราก็ต้องมาใช้ .push() ต่อ

ซึ่งเราสามารถลดรูปการเขียนสิ่งเหล่านี้ได้ โดยการใช้ตัวดำเนินการที่ชื่อว่า "Spread Operator"
*/
let new_array_spread = [...array,6]
console.log(new_array_spread)