/*------------ Constants ------------*/
import generalAssembly from "./storyline.js"
import * as soundtrackCYA from './audio.js'

/*------------ Variables ------------*/

let currentIdx 

/*---- Cached Element References ----*/

const playBtn = document.getElementById("play")

const gameDiv = document.getElementById("game-div")


/*--------- Event Listeners ---------*/

playBtn.addEventListener('click', init)

// gameDiv.addEventListener('click', handleClick)

/*------------ Functions ------------*/

function init() {
    gameDiv.innerHTML = ""
    currentIdx = 0
    render()
}

function render () {
    const prompt = document.createElement('h3')
    prompt.textContent = generalAssembly[currentIdx].prompt
    gameDiv.appendChild(prompt)
    createBtns()
}


function createBtns () {
    // Object destructuring, grabs the property located inside the object 
    const {options} = generalAssembly[currentIdx]
    for (const key in options) {
        const btn = document.createElement('button')
        btn.textContent = options[key].selection
        btn.id = options[key].next
        gameDiv.appendChild(btn)
    }
}