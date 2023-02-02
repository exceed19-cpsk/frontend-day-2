const item_lists = [
    {
        name: "Apple",
        price: 40.00,
        tags: ["fruit","consumable"],
        stock: 10
    },
    {
        name: "Ice Cream",
        price: 70.00,
        tags: ["dessert","consumable"],
        stock: 10
    }
]

let [ apple,icecream ] = item_lists

// ต่อมาเราลองสร้าง Function ที่จะคืนราคาโปรโมชั่นกลับมา ตามประเภทขของสินค้าที่เกี่ยวข้อง ดังนี้
function viewPromotion1(item){
    if(item.tags.includes("fruit")){
        return item.price * 0.75
    }
    else if(item.tags.includes("dessert")){
        return item.price * 0.5
    }
    else{
        return item.price
    }
}

console.log(viewPromotion1(apple))
console.log(viewPromotion1(icecream))

// ด้วยแนวคิดของ Destructing Object ที่ได้ยกตัวอย่างไว้ในข้อที่แล้ว ทำให้เราสามารถสร้าง Function นี้ใหม่ในรูปแบบนี้ได้
function viewPromotion2(item){
    let { tags,price } = item
    if(tags.includes("fruit")){
        return price * 0.75
    }
    else if(tags.includes("dessert")){
        return price * 0.5
    }
    else{
        return price
    }
}

console.log(viewPromotion2(apple))
console.log(viewPromotion2(icecream))
// คิดว่าทำไมการเขียนแบบนี้ จึงสามารถให้ผลลัพธ์เหมือนกับแบบที่ 1

function viewPromotion3({ tags,price }){
    if(tags.includes("fruit")){
        return price * 0.75
    }
    else if(tags.includes("dessert")){
        return price * 0.5
    }
    else{
        return price
    }
}

console.log(viewPromotion3(apple))
console.log(viewPromotion3(icecream))
// คิดว่าทำไมการเขียนแบบนี้ จึงสามารถให้ผลลัพธ์เหมือนกับแบบที่ 2 และมีอะไรที่เขียนแตกต่างกัน