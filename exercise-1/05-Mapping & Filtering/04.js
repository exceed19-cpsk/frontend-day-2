/* 
ในโจทย์นี้ เราจะรวมทั้ง .map() และ .filter() ไปพร้อมๆ กันเลย

ลองสร้าง Array ต่อไปนี้จาก "data" ซึ่งเป็น Array ที่มีเลข 1 ถึง 50ฃ
โดยใช้แค่ map และ filter เท่านั้น
*/

const create1to50Array = () => {
    let result = []
    for(var i=1;i<=50;i++){
        result.push(i)
    }
    return result
}

const data = create1to50Array()
/* 
[
    2,  4,  6,  8, 10, 12, 14, 16,
   18, 20, 22, 24, 26, 28, 30, 32,
   34, 36, 38, 40, 42, 44, 46, 48,
   50
] 
*/
console.log(data.filter(v => v%2 === 0))

/* 
[
  1, 2, 3, 4, 5,
  6, 7, 8, 9
]
*/
console.log(data.filter(v => v < 10))

/* 
[
  20, 19, 18, 17, 16,
  15, 14, 13, 12, 11
]
*/
console.log(data.filter(v => v <= 10).map(v => 21-v))

/* 
[
    1, -3,   5, -7,   9,
  -11, 13, -15, 17, -19
]
*/
console.log(data.filter(v => v%2 !== 0 && v < 20).map((v,i) => (-1)**i * v))