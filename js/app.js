/*------------ Constants ------------*/
import generalAssembly from "./storyline.js"
import * as soundtrackCYA from './audio.js'
/*------------ Variables ------------*/

let currentIdx 

let i = 0;

let txt = 'Software Engineer Edition'; /* The text */

let currentTxt = ""

var speed = 100; /* The speed/duration of the effect in milliseconds */

/*---- Cached Element References ----*/

const playBtn = document.getElementById('play')

const gameDiv = document.getElementById('game-div')

const backBtn = document.getElementById('back-button')

const musicPlayBtn = document.getElementById('play-button')

const forwardBtn = document.getElementById('forward-button')

const editionTxt = document.getElementById('edition')

const leftScreen = document.getElementById('left-screen')

// const middleScreen = document.getElementById('middle-screen')

// const rightScreen = document.getElementById('right-screen')

/*--------- Event Listeners ---------*/

playBtn.addEventListener('click', init)

gameDiv.addEventListener('click', handleClick)

musicPlayBtn.addEventListener('click', togglePlay)

editionTxt.addEventListener('mouseover',typeWriter)

/*------------ Functions ------------*/

function init() {
    currentIdx = 0
    typeWriter()
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
        btn.style.cursor = "pointer"
    }
}

function handleClick (evt) {
    console.log('CHECK', evt.target.id)
    if (evt.target.id === 'play') return
    if (isNaN(evt.target.id) || !evt.target.id) {
        return
    }
    enableLeftComputer()
    enableMiddleComputer()
    enableRightomputer()
    currentIdx = evt.target.id
    render()
}

function togglePlay () {
    soundtrackCYA.playMainSoundtrack()
}

function typeWriter() {
    if (document.getElementById("edition").textContent = "Hover here!") {
        document.getElementById("edition").textContent = ""
    }
    if (i < txt.length) {
        currentTxt += txt.charAt(i)
        document.getElementById("edition").innerHTML = currentTxt;
        i++;
        setTimeout(typeWriter, speed);
  } else {
    document.getElementById("edition").innerHTML = txt;
    return
  }
}

function enableLeftComputer() {
    if (currentIdx == 1 || 2) {
        leftScreen.style.visibility = "visible"
        currentIdx = evt.target.id
    }
    // else if (currentIdx = 22 || 27) {
    //     leftScreen.style.visibility = "visible"
    // }
    // if (currentIdx = 26 || 28 || 29 || 30 || 31 ) {
    //     leftScreen.style.visibility = "visible"
    // }
}

// function enableMiddleComputer() {
//     if (currentIdx = 22 || 27) {
//         leftScreen.style.visibility = "visible"
//     }
// }

// function enableRightomputer() {
//     if (currentIdx = 26 || 28 || 29 || 30 || 31 ) {
//         leftScreen.style.visibility = "visible"
//     }
// }