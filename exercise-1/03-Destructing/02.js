/*
ในข้อก่อนหน้านี้ เราได้ลองแกะข้อมูลใน Array ไปแล้ว ซึ่งก็ดูไม่ค่อยจะมีประโยชน์อะไร
แต่ในหัวข้อนี้ เราจะมาแกะตัว Object กัน
*/

const item = {
    name: "Apple",
    price: 35.99,
    types: ["fruit","consumable"],
    stock: 10
}

let { price } = item
console.log('Price:',price)

let { name,types } = item
console.log('Name:',name)
console.log('Types:',types)

// คิดว่าถ้าเปลี่ยนตัวแปร name, price, types จากที่ผ่านมาเป็นตัวแปรอื่น จะยังได้ค่าเดิมอยู่ไหม