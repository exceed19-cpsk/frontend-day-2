/*
หลังจากที่เราได้ลองการใช้ตัว .map() ไปแล้ว ต่อไปเราจะมาลองใช้อีกหนึ่ง method ที่สำคัญไม่แพ้กัน
นั่นคือ .filter() นั่นเอง โดยตัว filter เนี่ย มันจะทำหน้าที่กรองข้อมูลใน Array ที่มีเงื่อนตรง
กับที่เรากำหนดไว้เท่านั้น และคืนค่ากลับมาเป็น Array ใหม่ให้

หากเทียบกับในภาษา python
[i*2 for i in range(10) if i%2 == 0]
ตรง i*2 ก็คือ .map() ส่วน if i%2 == 0 ก็คือการ .filter() นั่นเอง
*/

const data = ['ant','bird','cat','dog','egg']

console.log(data.filter(value => true))
// คิดว่าการที่ <Array>.filter() นั้นทำอะไรกันนะ (ตรงนี้อาจจะยังไม่เห็นภาพ)

console.log(data.filter(value => false))
// ตอนนี้น่าจะรู้แล้ว

console.log(data.filter((value,index) => index % 2 === 0))
// ทำไมจึงได้ผลลัพธ์เป็นแบบนี้

console.log(data.filter((value) => value === 'ant'))
console.log(data.filter((value,index) => index === 2))
console.log(data.filter((value,index,array) => array.length === 5))
// คิดว่าตัว Parameter ทั้ง 3 ตัว (value,index,array) แต่ละตัวทำหน้าที่เหมือนกับ ตอนที่เราใส่ใน .map() ไหม

// ทีนี้เนื่องจากทั้ง filter และ map จะคืนค่ากลับมาเป็น Array ทำให้เราสามารถนำมาคอมโบกันได้
console.log(data.filter((value,index) => index >= 2).map(value => value.toUpperCase()))

function isPrime(number){
    if(number === 1){
        return false
    }
    for(var i=2;i<number;i++){
        if(number % i == 0){
            return false
        }
    }
    return true
}

console.log(isPrime(1))
console.log(isPrime(2))
console.log(isPrime(4))
console.log(isPrime(7))
console.log(isPrime(9))
// คิดว่า Function นี้ทำอะไรได้
// คิดว่ามัน Optimal รึยัง (ขำๆนะครับ ไม่ต้องคิดจริงจังก็ได้ จะข้ามคำถามนี้ไปเลยก็ได้ครับ)

const numberArr = [2,3,8,10,15]

console.log(numberArr.filter(isPrime))
// ทำไมจึงได้ผลลัพธ์เช่นนี้

console.log(numberArr.filter(isPrime).map(value => value + 3))
// ทำไมจึงได้ผลลัพธ์เช่นนี้ ตอน .filter() เราเหลือค่าอะไรบ้าง

console.log(numberArr.map(value => value + 3).filter(isPrime))
// ทำไมจึงได้ผลลัพธ์เช่นนี้ ตอน .map() ค่าถูกเปลี่ยนไปเป็นอย่างไรบ้าง