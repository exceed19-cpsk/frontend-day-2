const imgEl = document.querySelector("img")
const leftBtnEl = document.getElementById("left-btn")
const rightBtnEl = document.getElementById("right-btn")
const nameEl = document.getElementById("name")
const abilitiesEl = document.getElementById("abilities")

import axios from "axios"

/* URL สำหรับการดึงข้อมูลจาก Rest Api */
const URL = "https://pokeapi.co/api/v2/pokemon"

/* 

api นี้จะเรียกโปเกม่อนด้วย https://pokeapi.co/api/v2/pokemon/path ไปเรื่อยๆ เช่น 
โปเกม่อนตัวที่ 1 => https://pokeapi.co/api/v2/pokemon/1 
โปเกม่อนตัวที่ 2 => https://pokeapi.co/api/v2/pokemon/2 
โปเกม่อนตัวที่ 3 => https://pokeapi.co/api/v2/pokemon/3 

*/

/* pokemon ตัวปัจจุบัน ในที่นี้ให้เริ่มที่ตัวที่ 1 */
let quantity = 1


/* รายละเอียดในฟังชันก์ที่น้องต้องสร้างขึ้นมาเอง

หลักการคือ น้องต้องนำข้อมูลที่เป็นส่วนสำคัญในการแสดงผล คือ
รูปภาพโปเกม่อน(front_default) ชื่อโปเกม่อน(name) และความสามารถโปเกม่อน(abilities) จากการเรียก api 
เมื่อได้มาแล้วให้เรียกฟังชันก์ displayCard(x,y,z) และส่งข้อมูลเป็น arguments ตามที่บอกไปตามลำดับ

*/
async function fetchApi(num) {
    
}

leftBtnEl.addEventListener("click",() => {
    /* ส่วนนี้น้องต้องเขียน */
    /*  หลักการคือฟังชันก์นี้จะเป็นการกดปุ่มซ้าย เมื่อกดก็ต้อง (ใบ้ทำอะไรกับ quantity) 
        แล้วส่งค่า quantity ไปในฟังชันก์ fetchApi
    */
})

rightBtnEl.addEventListener("click",() => {
    /* ส่วนนี้น้องต้องเขียน */
    /* หลักการคือฟังชันก์นี้จะเป็นการกดปุ่มขวา เมื่อกดก็ต้อง (ใบ้ทำอะไรกับ quantity) 
       แล้วส่งค่า quantity ไปในฟังชันก์ fetchApi
    */
    
})


function displayCard(picture,name,abilities) {
    imgEl.src = picture
    nameEl.innerText = name
    abilitiesEl.innerHTML = ""

    for (let i=0;i<abilities.length;i++){
        const liEl = document.createElement("li")
        liEl.innerText = abilities[i].ability.name
        abilitiesEl.appendChild(liEl)
    }
}

fetchApi(quantity)