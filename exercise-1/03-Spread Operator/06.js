/*
ลองสร้าง Function ที่จะนำตัวเลขทั้งหมดมาทำการ บวกกันหรือคูณกัน
แล้วแต่เป็นคนกำหนดเครื่องหมาย +,* ตามด้วยตัวเลขกี่ตัวก็ได้
*/

function calculate(operator,...numbers){
    let total = operator === "*" ? 1 : 0
    for(var i=0;i<numbers.length;i++){
        if(operator === '+'){
            total += numbers[i]
        }
        else if(operator === '*'){
            total *= numbers[i]
        }
    }
    return total
}

console.log(calculate('+',1,2,3))                       // 6
console.log(calculate('*',1,2,3))                       // 6
console.log(calculate('+',1,2,3,4,5))                   // 15
console.log(calculate('*',1,2,3,4,5))                   // 120
console.log(calculate('+',1))                           // 1
console.log(calculate('*',1))                           // 1
console.log(calculate('*',5154,897846,21855,0,4,5465))  // 0