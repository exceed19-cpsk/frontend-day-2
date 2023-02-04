// ประกาศ Function 4 ตัวเดิมกับข้อก่อนหน้า

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

// ต่อมาลองสั่งแสดงผลฟังก์ชั่นเหล่านี้ (แนะนำให้ไปลองทำใน Console ของตัว Browser อาจจะได้รายละเอียดที่ชัดเจนกว่าใน VSCode)
console.log(addNormal)
console.log(addAnonymous)
console.log(addArrow)
console.log(addArrowButShorter)
// [?] คิดว่าสิ่งที่แสดงออกมา มีความหมายว่าอะไร แล้วมันต่างกับการเรียก Function แบบปกติ (เรียกแบบมีวงเล็บ "()" ต่อท้าย) ยังไง