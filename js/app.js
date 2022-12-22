/*------------ Constants ------------*/
import generalAssembly from "./storyline.js"
import * as soundtrackCYA from './audio.js'

/*------------ Variables ------------*/

let currentIdx 

/*---- Cached Element References ----*/

const playBtn = document.getElementById('play')

const gameDiv = document.getElementById('game-div')

const backBtn = document.getElementById('back-button')

const musicPlayBtn = document.getElementById('play-button')

const forwardBtn = document.getElementById('forward-button')

// const favicon = document.getElementById("favicon")

/*--------- Event Listeners ---------*/

playBtn.addEventListener('click', init)

gameDiv.addEventListener('click', handleClick)

musicPlayBtn.addEventListener('click', togglePlay)

/*------------ Functions ------------*/

function init() {
    currentIdx = 0
    render()
}

function render () {
    gameDiv.innerHTML = ""
    const prompt = document.createElement('h3')
    prompt.textContent = generalAssembly[currentIdx].prompt
    gameDiv.appendChild(prompt)
    const btnDiv = document.createElement('div')
    const promptDiv = document.createElement('div')
    btnDiv.id = 'button-div'
    promptDiv.id = 'prompt-div'
    promptDiv.appendChild(prompt)
    gameDiv.appendChild(promptDiv)
    gameDiv.appendChild(btnDiv)
    createBtns(btnDiv)
}


function createBtns (btnDiv) {
    // Object destructuring, grabs the property located inside the object 
    const {options} = generalAssembly[currentIdx]
    for (const key in options) {
        const btn = document.createElement('button')
        btn.textContent = options[key].selection
        btn.id = options[key].next
        btn.classList.add('buttons')
        if (btn.id % 2 === 0) {
            btn.style.backgroundColor = 'blue'
            btn.style.color = 'white'
        }
        else {
            btn.style.backgroundColor = 'red'
            btn.style.color = 'white'
        }
        btnDiv.appendChild(btn)
    }
}

function handleClick (evt) {
    console.log('CHECK', evt.target.id)
    if (evt.target.id === 'play') return
    if (isNaN(evt.target.id) || !evt.target.id) {
        return
    }
    currentIdx = evt.target.id
    render()
}

function togglePlay () {
    soundtrackCYA.playMainSoundtrack()
    if(document.getElementById('play-id').src == './assets/play-button.png') {
        document.getElementById('play-id').src = './assets/pause-button.png'
    } else {
        document.getElementById('play-id').src == './assets/play-button.png'
    }
}