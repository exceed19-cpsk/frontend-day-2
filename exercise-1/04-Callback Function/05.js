// สร้าง func1 กำหนดให้มีการทำงานตามนี้
function func1(amount,func) {
    if (amount.length === 0) {
        return -1
    }else {
        const result = func(amount.length)
        return result
    }
}

/*
[EXERCISE]
จงสร้าง Callback Function ที่ใช้กับตัว func1 และคืน String ที่เป็น "-" เท่ากับความยาวของ amount(String) ที่ func1 รับมา
[HINT] ลองค่อยๆทำความเข้าใจว่า func1 ทำอะไรบ้าง ตัว callback เราจะรับอะไรเข้ามาและทำอะไรเพื่อให้ func1 ที่เรียก callback ทำงานถูกต้องตามโจทย์
*/
const callback = (event) => {
    let keep = ""
    for (let i=0;i<event;i++){
        keep += "-"
    }
    return keep
}

console.log(func1("***",callback))          // ---
console.log(func1("****",callback))         // ----
console.log(func1("*****",callback))        // -----
console.log(func1("******",callback))       // ------
console.log(func1("*******",callback))      // -------