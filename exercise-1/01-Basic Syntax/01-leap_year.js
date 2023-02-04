// [EXERCISE] สำหรับข้อแรกลองเอาง่ายๆ ก่อนเลย มาลองหากันว่าเดือนและปี พ.ศ. ที่พี่ให้ต่อไปนี้มีทั้งหมดกี่วัน
function getTotalDays(month,year){
    year -= 543
    if(month == 2){
        if(((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)){
            return 29
        }
        return 28
    }
    else if([1,3,5,7,8,12].includes(month)){
        return 31
    }
    else if([4,6,9,11].includes(month)){
        return 30
    }
}

console.log(getTotalDays(7,2537))   // 31
console.log(getTotalDays(8,2555))   // 31
console.log(getTotalDays(2,2443))   // 28
console.log(getTotalDays(2,2543))   // 29
console.log(getTotalDays(2,2563))   // 29
console.log(getTotalDays(2,2574))   // 28
console.log(getTotalDays(7,2567))   // 31
console.log(getTotalDays(11,2384))  // 30
console.log(getTotalDays(1,2947))   // 31

// เนื่องจาก JavaScript ไม่มีการรับ Input แบบให้ผู้ใช้พิมพ์เราเลยต้องทดสอบกันแบบนี้นะครับ 55555