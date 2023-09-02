import state from './state.js'
import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'

export function toggleRunning() {
    state.isRunning = document.documentElement.classList.toggle('running')

    timer.countdown()
    sounds.buttonPressAudio.play()


}

export function reset() {
    state.isRunning = false
    document.documentElement.classList.remove('running')

    state.minutes = 25
    state.seconds = 0

    timer.updateDisplay()

    sounds.buttonPressAudio.play()

}

export function incrementMinutes() {
    state.minutes = (state.minutes + 5)
    timer.updateDisplay()
    sounds.buttonPressAudio.play()

}

export function decrementMinutes() {
    state.minutes = (state.minutes - 5)

    if(state.minutes < 0) {
        state.minutes = 0
    }

    timer.updateDisplay()
    sounds.buttonPressAudio.play()

}

export function toggleMusic() {
    state.isMute = document.documentElement.classList.toggle('music-on')

    if(state.isMute) {
        sounds.bgAudio.play()
        return
    }

    sounds.bgAudio.pause()

}
