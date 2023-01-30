const data = [
    { name:"kana", age:25, salary:5400 },
    { name:"gun", age:32, salary:9300 },
    { name:"nut", age:14, salary:2100 },
    { name:"boome", age:19, salary:1400 },
    { name:"fluck", age:41, salary:3000 },
    { name:"bass", age:34, salary:11000 },
    { name:"balle", age:29, salary:2100 },
    { name:"gitar", age:22, salary:2400 },
    { name:"belle", age:51, salary:7200 },
    { name:"mic", age:49, salary:2500 },
]


/* จงเขียนฟังชันก์ที่ return ค่าอาเรย์ของทุกคนที่อายุมากกว่า 40 และเพิ่มเงินเดือนจากเดิม 2 เท่า โดยที่ตัวแปรเดิม (data) ต้องมีค่าเหมือนเดิม */
function func1(data){
    const result = data.filter(e => e.age > 40).map(e => {
        const item = {...e}
        item.salary *= 2
        return item

        // e.salary *= 2
        // return e
    })
    return result
}

const cond1 = func1(data)
console.log(cond1)
// console.log(data)


/* จงเขียนฟังชันก์ที่ return ค่าอาเรย์ของคนที่ขึ้นต้นด้วยตัว b ลงท้ายด้วย e และเงินเดือนมากกว่า 7000 และเปลี่ยนชื่อจากอักษรหน้าตัวเล็กให้เป็นตัวใหญ่ */
function func2(data) {
    const tmp = data.filter(e => e.name.startsWith("b") && e.name.endsWith("e") && e.salary > 7000)
    
    if (tmp.length !== 0) {
        const result = tmp.map(e => {
            const item = {...e}
            const newName = item.name[0].toUpperCase() + item.name.slice(1,item.length)
            item.name = newName
            return item

            // const newName = e.name[0].toUpperCase() + e.name.slice(1,e.length)
            // e.name = newName
            // return e
        })
        return result
    }else {
        return "there isn't people"
    }
}

const cond2 = func2(data)
console.log(cond2)
console.log(data)











