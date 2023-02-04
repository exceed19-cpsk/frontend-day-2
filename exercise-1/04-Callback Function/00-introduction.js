/*
[INTRODUCTION]
เชื่อว่าแบบฝึกหัดจากบทที่แล้วน่าจะทำให้น้องพอเก็ตไอเดีย Syntax พื้นฐานของภาษา JavaScript แล้ววว
ในบทนี้เราจะมาทำความเข้าใจเรื่องของ "Callback Function" ซึ่งมีความสำคัญอย่างมาก ในการเขียน Frontend
และถือเป็นเรื่องนึงที่อาจจะดูยากในครั้งแรกที่ได้เรียนนะครับ แต่จะพยายามยกตัวอย่างให้เข้าใจมากที่สุดนะครับ
*/

function execute(bool,callback){
    if(bool){
        callback()
    }
    else{
        console.log("Nothing here")
    }
}

function greeting(){
    console.log("Callback!")
}

execute(false,greeting)
execute(true, greeting)