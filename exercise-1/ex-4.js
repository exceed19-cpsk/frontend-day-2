function func1(amount,func) {
    if (amount.length === 0) {
        return -1
    }else {
        const result = func(amount.length)
        return result
    }
}


/* ส่วน callback ให้น้องทำ */
const callback = (event) => {
    let keep = ""
    for (let i=0;i<event;i++){
        keep += "-"
    }
    return keep
}

const a = func1("*******",callback)
console.log(a)