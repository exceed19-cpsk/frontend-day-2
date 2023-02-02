/* function นี้ทำงานอย่างไรน้องไม่จำเป็นต้องสนใจงับ ขอแค่รู้ว่าเรียกฟังชันก์ Info() จะมีการคืนค่าที่เป็น promise มาให้เรา */
function Info() {
    return Promise.resolve("Success Access")
}


/* สังเกตุผลลัพธ์ ทำไมถึงเป็นแบบนั้น */
Info().then(result => console.log(result))
console.log("=> 1")
console.log("=> 2")

/* จำได้ไหมที่พี่บอกว่า promise ก็ทำงานแบบ asynchronous คือทำงานทีหลัง โดยจะใช้คำสั่งที่อยู่ถัดไปทำงานก่อน */

/* ถ้าเราอยากให้มันทำงานต่อเป็นลำดับจากได้ค่าใน promise เราต้องนำคำสั่งไปไว้ในเมธอด then นั่นเอง */
Info().then(result => {
    console.log(result)
    console.log("=> 3")
    console.log("=> 4")
})

