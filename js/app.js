/*------------ Constants ------------*/
import generalAssembly from './storyline.js'
import * as soundtrackCYA from './audio.js'
/*------------ Variables ------------*/

let currentIdx 

let i = 0;

let txt = 'Software Engineer Edition';

let currentTxt = ''

var speed = 100; /* The speed/duration of the effect in milliseconds */

/*---- Cached Element References ----*/

const playBtn = document.getElementById('play')

const gameDiv = document.getElementById('game-div')

const musicPlayBtn = document.getElementById('play-button')

const editionTxt = document.getElementById('edition')

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
    if (evt.target.id === 'play') return
    if (isNaN(evt.target.id) || !evt.target.id) {
        return
    }
    currentIdx = evt.target.id
    render()
}

function togglePlay () {
    soundtrackCYA.playMainSoundtrack()
}

function typeWriter() {
    if (document.getElementById('edition').textContent = 'Hover here!') {
        document.getElementById('edition').textContent = ''
    }
    if (i < txt.length) {
        currentTxt += txt.charAt(i)
        document.getElementById('edition').innerHTML = currentTxt;
        i++;
        setTimeout(typeWriter, speed);
  } else {
    document.getElementById('edition').innerHTML = txt;
    document.getElementById('edition').style.color = 'purple';
    return
  }
}