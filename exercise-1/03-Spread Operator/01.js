/*
สำหรับหัวข้อนี้เราจะมาพูดถึง "Spread Operator" ซึ่งเป็นตัวดำเนินการตัวนึง ที่ใช้กับ Array/Object โดยจะมีสัญลักษณ์เป็น ... (จุด 3 จุด)
ซึ่งจะทำให้การจัดการกับข้อมูลใน Array/Object ได้ดีและสะดวกมากขึ้น โดยเฉพาะตอนที่ไปเขียนตัว React.js เลย

เราจะเริ่มจาก Spread Operator สำหรับ Array กันก่อน ซึ่งมีความซับซ้อนทีน้อยกว่า
*/

const array = [1,2,3,4,5]

let test1 = [...array]
console.log(test1)
// [?] คิดว่า [...array] มีความหมายว่าอย่างไร


let test2 = [...array,6]
console.log(test2)

let test3 = [999,...array,"Hello"]
console.log(test3)
// [?] ทำไมถึงได้ผลลัพธ์เช่นนั้น และถ้าเราไม่ใช้ Spread Operator แล้วเราจะใช้ Method อะไรของ Array แทนได้บ้าง (คำสั่งที่ใส่ค่าเข้าไปใน Array)
