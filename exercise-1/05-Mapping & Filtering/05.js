const items = [{
    "id": 1,
    "name": "Olives - Green, Pitted",
    "out_of_stock": false,
    "sold": 909,
    "floor": 2
  }, {
    "id": 2,
    "name": "Wild Boar - Tenderloin",
    "out_of_stock": true,
    "sold": 16,
    "floor": 3
  }, {
    "id": 3,
    "name": "Ginger - Ground",
    "out_of_stock": false,
    "sold": 665,
    "floor": 3
  }, {
    "id": 4,
    "name": "Soup - Campbells, Creamy",
    "out_of_stock": true,
    "sold": 489,
    "floor": 2
  }, {
    "id": 5,
    "name": "Kiwi",
    "out_of_stock": true,
    "sold": 74,
    "floor": 1
  }, {
    "id": 6,
    "name": "Wine - Marlbourough Sauv Blanc",
    "out_of_stock": false,
    "sold": 320,
    "floor": 2
  }, {
    "id": 7,
    "name": "Fudge - Cream Fudge",
    "out_of_stock": true,
    "sold": 183,
    "floor": 3
  }, {
    "id": 8,
    "name": "Papayas",
    "out_of_stock": false,
    "sold": 785,
    "floor": 1
  }, {
    "id": 9,
    "name": "Cake - Pancake",
    "out_of_stock": true,
    "sold": 471,
    "floor": 2
  }, {
    "id": 10,
    "name": "Lamb - Leg, Diced",
    "out_of_stock": true,
    "sold": 890,
    "floor": 1
  }]

// แสดงชื่อของสินค้าที่ยังไม่หมดสต๊อก 
console.log(items.filter(v => !v.out_of_stock).map(v => v.name))
console.log(items.filter(v => v.floor === 2).map(v => ({name: v.name,out_of_stock: v.out_of_stock})))

/* 
สร้าง Array ของ items ใหม่ โดยในสินค้าแต่ละตัวขอให้เพิ่ม "rating" เข้าไปด้วย
โดยคำนวนจากการนำจำนวนที่ขายได้มาหาร 200
*/
console.log(items.map(v => ({...v,rating: v.sold/200})))