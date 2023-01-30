function info() {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            const math = 1 + Math.floor(Math.random()*10)
            if (math > 5) {
                resolve(math)
            }else {
                reject("Error")
            }
        },1000)
    })
}


/* ให้เขียนวิธีการจัดการค่า promise จาก function info() */
info().then(res => console.log(res)).catch(err => console.log(err))



/* กรณีเราต้องการนำค่าที่ได้จาก promise ไปใช้ต่อในฟังชันก์โดยนำค่าที่ได้ไปคูณ 5 ให้เขียนวิธีการจัดการกับ promise นี้ */
/* ระวังอย่าให้มีการ cache error ต้องมีการดักจับ error ด้วย */
async function func1() {
    try {
        const keep = await info()
        console.log("result =",keep*5)
    }catch(err) {
        console.log(err)
    }
}

func1()