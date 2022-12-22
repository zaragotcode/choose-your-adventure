let mainSoundtrack = new Audio('../assets/first-track.mp3')
let secondSoundtrack = new Audio('../assets/second-track.mp3')
let thirdSoundtrack = new Audio('../assets/third-track.mp3')
let fourthSoundtrack = new Audio('../assets/fourth-track.mp3')

function playMainSoundtrack() {
    mainSoundtrack.volume = 0.25
    mainSoundtrack.play()
}

function playSecondSoundtrack() {
    secondSoundtrack.volume = 0.25
    secondSoundtrack.play()
}

function playThirdSoundtrack() {
    thirdSoundtrack.volume = 0.25
    thirdSoundtrack.play()
}

function playFourthSoundtrack() {
    fourthSoundtrack.volume = 0.25
    fourthSoundtrack.play()
}

export {
    playMainSoundtrack,
    playSecondSoundtrack,
    playThirdSoundtrack,
    playFourthSoundtrack
}