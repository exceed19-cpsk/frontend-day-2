const item = {
    name: "Apple",
    price: 35.99,
    tags: ["fruit","consumable"],
    stock: 10
}

// ลองสร้าง Object นี้ใหม่ โดยเพิ่ม is_premium: true และเพิ่ม "healthy" เข้าไปใน tags ที่มีอยู่
// ลองใช้ Spread Operator ช่วยเพื่อให้สามารถสร้าง Object ดังกล่าวได้ภายในบรรทัดเดียว
let new_item = {...item,is_premium:true,tags: [...item.tags,"healthy"]}
console.log(new_item)