const URL = "https://pokeapi.co/api/v2/pokemon"
const imgEl = document.querySelector("img")
const leftBtnEl = document.getElementById("left-btn")
const rightBtnEl = document.getElementById("right-btn")
const nameEl = document.getElementById("name")
const abilitiesEl = document.getElementById("abilities")


let quantity = 1


/* ฟังชันก์ที่น้องต้องสร้างขึ้นมาเอง */
async function fetchApi(pokemon) {
    try {
        const result = await axios.get(`${URL}/${pokemon}`)
        console.log(result.data)
        const picture = result.data.sprites.front_default
        const name = result.data.name
        const abilities = result.data.abilities
        
        displayCard(picture,name,abilities)
    }catch(err) {
        console.log(err)
    }
}

leftBtnEl.addEventListener("click",() => {
    /* ส่วนนี้น้องต้องเขียน */
    quantity--
    if (quantity === 0){
        quantity = 1
    }else {
        fetchApi(quantity)
    }
})

rightBtnEl.addEventListener("click",() => {
    /* ส่วนนี้น้องต้องเขียน */
    quantity++
    if (quantity === 1279){
        quantity = 1279
    }else {
        fetchApi(quantity)
    }
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