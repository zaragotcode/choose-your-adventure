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

musicPlayBtn.addEventListener('click', toggleFirstTrack)

forwardBtn.addEventListener('click', toggleNextTrack)

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
    faviconChange()
    render()
}

function faviconChange () {
    //Meta Favicon
    if (currentIdx === 28) {
        favicon.href = './assets/Amazon-Favicon.png'
    }
    //Amazon Favicon
    if (currentIdx === 29) {
        favicon.href = './assets/Amazon-Favicon.png'
    }
    //Apple Favicon
    if (currentIdx === 30) {
        favicon.href = './assets/Apple-Favicon.png'
    }
    //Netflix Favicon
    if (currentIdx === 31) {
        favicon.href = './assets/Amazon-Favicon.png'
    }
    //Google Favicon
    if (currentIdx === 32) {
        favicon.href = './assets/Google-Favicon.png'
    }
}

function toggleFirstTrack () {
    soundtrackCYA.playMainSoundtrack()
    // musicPlayBtn.img="./assets/forward-button.png"
}

function toggleNextTrack () {
    toggleFirstTrack.pause()
    soundtrackCYA.playSecondSoundtrack()
    // musicPlayBtn.img="./assets/forward-button.png"
}