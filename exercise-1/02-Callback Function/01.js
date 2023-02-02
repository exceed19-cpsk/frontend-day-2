function func1(number,func){
    if(number > 5){
        return -999
    }
    else{
        return func()
    }
}

const gen20 = () => (20)
// ลองทบทวนกันนิดนึง ว่า Function นี้ทำอะไร ถ้าเขียนเป็นแบบปกติน่าจะเขียนยังไงนะ
// คำใบ้: ลองกลับไปดูข้อก่อนหน้า หรือลองรันดูก็ได้
// console.log(gen20())

console.log(func1(10,gen20))
console.log(func1(0,gen20))
// คิดว่า func1() ทำอะไรบ้าง และการส่ง gen20 ไปเฉยๆ ส่งผลอะไรบ้าง

console.log(func1(0,() => (20)))
// คิดว่า () => (20) กับ gen20 มีการทำงานแบบเดียวกันไหม เพราะอะไร