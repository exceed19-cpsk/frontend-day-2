/* 
ทีนี้เวลาเรามีค่า promise มาถ้าเราอยากได้ค่ามาใช้ก่อนที่จำทำคำสั่งถัดไป ต้องใช้เมธอด then ตลอดก็จะเป็นเรื่องที่
ยุ่งยากพอสมควร จึงมีคำว่า await เข้ามา โดยเป็นการรอคอยผลลัพธ์นั้นให้ทำงานเสร็จก่อนแล้วค่อยทำ
คำสั่งต่อไป แต่การใช้ await มีข้อจำกัดคือต้องทำในฟังชันก์ async เท่านั้น
*/

/* ตัวอย่างเช่น */
async function Info1() {
    const promise1 = await Promise.resolve("success 1") // ส่วนนี้เข้าใจแค่ว่ามัน return promise กลับมาให้ก็พอ
    console.log("=> ",promise1)

    const promise2 = await Promise.resolve("success 2") // ส่วนนี้เข้าใจแค่ว่ามัน return promise กลับมาให้ก็พอ
    console.log("=> ",promise2)
}

// Info1()


/* ถ้าเราไม่ใช้ async await จะต้องจัดการกับมันแบบนี้ ซึ่งจะเป็นคำสั่งที่ยาวมากจะเห็นว่าไม่สะดวกนัก */

function Info2() {
    const promise1 = Promise.resolve("success 1") // ส่วนนี้เข้าใจแค่ว่ามัน return promise กลับมาให้ก็พอ
    
    promise1.then(result => {
        console.log("=> ",result)

        const promise2 = Promise.resolve("success 2") // ส่วนนี้เข้าใจแค่ว่ามัน return promise กลับมาให้ก็พอ
        promise2.then(result => {
            console.log("=> ",result)
        })
    })
}

Info2()