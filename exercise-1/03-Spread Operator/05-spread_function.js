/*
อันนี้ของแถมละกันน เนื่องจากเราก็สามารถใช้ Spread Operater Function ได้ด้วย
ทำให้เราอาจจะกำหนด Function ที่มีจำนวน Parameter ที่ไม่แน่นอนได้ 
*/

function getSum(...numbers){
    let total = 0
    for(var i=0;i<numbers.length;i++){
        total += numbers[i]
    }
    return total
}

console.log(getSum(1))
console.log(getSum(10,20,30))
console.log(getSum(1,2,3,4,5,6,7,8,9,10))
// [?] คิดว่า numbers จะเก็บข้อมูลเป็น Type อะไร