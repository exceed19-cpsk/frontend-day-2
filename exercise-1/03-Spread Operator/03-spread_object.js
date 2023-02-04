const item = {
    name: "Apple",
    price: 35.99,
    tags: ["fruit","consumable"],
    stock: 10
}

let new_item1 = {...item}
console.log(new_item1)
// [?] คิดว่า {...item} มีความหมายว่าอย่างไร

let new_item2 = {...item, rating: 5.0}
console.log(new_item2)
// [?] ทำไมถึงได้ผลลัพธ์เช่นนั้น และถ้าเราไม่ใช้ Spread Operator เราจะใช้วิธีใดในการยัด Rating ใส่เข้าไปใน Object ใหม่นี้ (new_item2)

let new_item3 = {...item, price: 999.99}
console.log(new_item3)
// [?] ทำไมถึงได้ผลลัพธ์เช่นนั้น

let new_item4 = {price: 999.99,...item}
console.log(new_item4)
// [?] ทำไมค่า price จึงยังมีราคาเท่าเดิมกับ item ตอนแรก ทั้งที่เราใส่ 999.99 ไปแล้ว

let new_item5 = {...item,stock: item.stock-1}
console.log(new_item5)
// [?] ทำไมถึงได้ผลลัพธ์เช่นนั้น