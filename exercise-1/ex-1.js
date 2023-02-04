/**/

/* จงเขียนฟังชันก์ของเครื่องคิดเลข บวก ลบ คูณ หาร แบบใช้ arrow function */
const func1 = (num1,op,num2) => {
    if (op === "+") {
        return `result = ${num1+num2}`
    }else if (op === "-") {
        return `result = ${num1-num2}`
    }else if (op === "*") {
        return `result = ${num1*num2}`
    }else if (op === "/") {
        return `result = ${num1/num2}`
    }
}

console.log(func1(4,"/","5"))


/* จงเขียนฟังชันก์หาผลรวมเลขทั้งหมดโดยการรับค่าของผู้ใช้งานเราจะไม่ทราบเลยว่าผู้ใช้งานส่งมาทั้งหมดกี่ค่า ด้วย anoymous function */
const func2 = (...data) => {
    let sum = 0
    data.forEach(e => {
        sum += e
    })
    return `sum = ${sum}`
}

console.log(func2(1,2,3,4,5))
console.log(func2(1,2,3))