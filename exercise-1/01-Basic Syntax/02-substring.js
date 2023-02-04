/*
[EXERCISE]
ในข้อนี้เราจะดูกันว่ามี Substring ที่เรากำหนดมาอยู่ในข้อความที่เรากำหนดหรือไม่
เช่น อยากรู้ว่าในข้อความ "ababababababababab" มี "aba" ไหม
(หากลองดูในข้อความจะเจอ "aba" ตามนี้ >> [aba]b[aba]b[aba]b[aba]bab)
ตอบแค่ว่า "มี" หรือ "ไม่มี" ก็พอครับ 
*/

function hasSubstring(text,substring){
    let sl = substring.length
    let count = 0
    for(var i=0;i<=text.length - sl;i++){
        if(text.slice(i,i+sl) === substring){
            count++
        }
    }
    return count
}

console.log(hasSubstring("ababababababababab","aba"))               // true
console.log(hasSubstring("ababababababababab","abc"))               // false
console.log(hasSubstring("ababababababababab","baba"))              // true
console.log(hasSubstring("qwertyuiop","c"))                         // false
console.log(hasSubstring("mxwolkasldklowi","owi"))                  // true
console.log(hasSubstring("Hey jude Don’t make it bad","ude"))       // true
console.log(hasSubstring("ABCDEF","ABCDEF"))                        // true