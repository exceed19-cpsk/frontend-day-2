const item = {
    name: "Apple",
    price: 35.99,
    tags: ["fruit","consumable"],
    stock: 10
}

/* 
ลองสร้าง Object นี้ใหม่ โดยเพิ่ม is_premium: true และเพิ่ม "healthy" เข้าไปใน tags ที่มีอยู่
ลองใช้ Spread Operator ช่วยเพื่อให้สามารถสร้าง Object ดังกล่าวได้ภายในบรรทัดเดียว

ตัวอย่าง Output
{
  name: 'Apple',
  price: 35.99,
  tags: [ 'fruit', 'consumable', 'healthy' ],
  stock: 10,
  is_premium: true
}

---!!! กำหนดว่าให้เขียนค่าใน Object ได้มากที่สุด 3 ตัว พยายามอย่าให้เขียนเกิน !!!---

เช่น
{...item,price: 39.99} นับเป็น 2 ตัว (คือมี ...item กับ price: 39.99)
{...item,price: 39.99,stock: 9} นับเป็น 3 ตัว (คือมี ...item, price: 39.99 กับ stock: 9)
*/

console.log({...item,is_premium:true,tags: [...item.tags,"healthy"]})