let mainSoundtrack = new Audio('../assets/first-track.mp3')
let secondSoundtrack = new Audio('../assets/second-track.mp3')
let thirdSoundtrack = new Audio('../assets/third-track.mp3')
let fourthSoundtrack = new Audio('../assets/fourth-track.mp3')

function mainSoundtrack() {
    firstTrack.volume = 0.25
    firstTrack.play()
}

function secondSoundtrack() {
    second.volume = 0.25
    secondTrack.play()
}

function thirdSoundtrack() {
    thirdTrack.volume = 0.25
    thirdTrack.play()
}

function fourthSoundtrack() {
    fourthTrack.volume = 0.25
    fourthTrack.play()
}

export {
  playShakeItOff,
  playDarkNight,
  playDaylight,
  playNoNiceThings
}