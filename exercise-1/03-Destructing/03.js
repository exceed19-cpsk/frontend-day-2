const item_lists = [
    {
        name: "Apple",
        price: 40.00,
        types: ["fruit","consumable"],
        stock: 10
    },
    {
        name: "Ice Cream",
        price: 70.00,
        types: ["dessert","consumable"],
        stock: 10
    }
]

function viewPromotion(item){
    if(item.types.includes("fruit")){
        return item.price * 0.75
    }
    else if(item.types.includes("dessert")){
        return item.price * 0.5
    }
    else{
        return item.price
    }
}

console.log(viewPromotion(item_lists[1]))