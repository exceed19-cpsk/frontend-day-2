/* function นี้ทำงานอย่างไรน้องไม่จำเป็นต้องสนใจงับ ขอแค่รู้ว่าเรียกฟังชันก์ Info(), Data() จะมีการคืนค่าที่เป็น promise มาให้เรา */
function Info() {
    return Promise.reject("Fail Access")
}

function Data() {
    return new Promise((resolve,reject) => {
        const m = Math.floor(Math.random()*10)
        if (m > 5) {
            resolve("Access Promise")
        } else {
            reject("Fail Promise")
        }
    })
}

/* ให้ลองรันคำสั่งบรรทัดที่ 12 แล้วดูผลลัพธ์ */
// console.log(Info("res"))

/* 
ลองดูผลลัพธ์จะเห็นว่า ได่ค่า promise แล้วมีค่าบางอย่างอยู่ข้างใน promise 
พร้อมกับ error นั่นเอง แสดงว่า promise ทำงานล้มเหลว จึงมีการ cache
*/

/* ทีนี้เราจะจัดการกับ error อย่างไร สำหรับ promise จะมี เมธอด ที่ไว้จัดการกับ promise คือ เมธอด catch */

/* สังเกตุว่าจะได้ผลลัพธ์ออกมาแล้ว แล้วไม่มีการ catch error */
Info().catch(err => console.log(err))


/* 
ทีนี้เราจะรู้ได้อย่างไรว่า promise จะทำงานสำเร็จหรือล้มเหลว
ให้ลองเรียกฟังชันก์นี้ จะเห็นว่าเราไม่มีทางรู้เลยว่าจะสำเร็จหรือล้มเหลว 
ลองรันคำสั่งบรรทัดที่ 40 ดู
*/
// console.log(Data())

/* เราจึงต้องใช้เมธอด then และ catch ในการจัดการ */
Data().then(result => console.log(result)).catch(error => console.log(error))

