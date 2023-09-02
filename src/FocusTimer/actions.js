import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  if (state.isRunning) {
    el.btPlay.classList.add("ph-fill");
    el.btPlay.classList.remove("ph");
  } else {
    el.btPlay.classList.add("ph");
    el.btPlay.classList.remove("ph-fill");
  }

  timer.countdown();
  sounds.buttonPressAudio.play();
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  el.btPlay.classList.add("ph");
  el.btPlay.classList.remove("ph-fill");

  state.minutes = 25;
  state.seconds = 0;

  timer.updateDisplay();

  sounds.buttonPressAudio.play();
}

export function incrementMinutes() {
  state.minutes = state.minutes + 5;

  if (state.minutes > 90) {
    state.minutes = 90;
  }

  timer.updateDisplay();
  sounds.buttonPressAudio.play();
}

export function decrementMinutes() {
  state.minutes = state.minutes - 5;

  if (state.minutes < 0) {
    state.minutes = 0;
  }

  timer.updateDisplay();
  sounds.buttonPressAudio.play();
}

export function toggleMusic() {
  state.isMute = document.documentElement.classList.toggle("music-on");

  if (state.isMute) {
    sounds.bgAudio.play();
    return;
  }

  sounds.bgAudio.pause();
}

export function setForest() {
  // Modificar a classe do botão
  el.btSetForest.classList.add("card-secondary");
  el.btSetRain.classList.remove("card-secondary");
  el.btSetCoffeeShop.classList.remove("card-secondary");
  el.btSetFirePlace.classList.remove("card-secondary");
  // Modificar o estado do app
  // Modificar o audio
  console.log("sound forest");
}

export function setRain() {
  // Modificar a classe do botão
  el.btSetForest.classList.remove("card-secondary");
  el.btSetRain.classList.add("card-secondary");
  el.btSetCoffeeShop.classList.remove("card-secondary");
  el.btSetFirePlace.classList.remove("card-secondary");
  // Modificar o estado do app
  // Modificar o audio
  console.log("sound rain");
}

export function setCoffeeShop() {
  // Modificar a classe do botão
  el.btSetForest.classList.remove("card-secondary");
  el.btSetRain.classList.remove("card-secondary");
  el.btSetCoffeeShop.classList.add("card-secondary");
  el.btSetFirePlace.classList.remove("card-secondary");
  // Modificar o estado do app
  // Modificar o audio
  console.log("sound coffee shop");
}

export function setFirePlace() {
  // Modificar a classe do botão
  el.btSetForest.classList.remove("card-secondary");
  el.btSetRain.classList.remove("card-secondary");
  el.btSetCoffeeShop.classList.remove("card-secondary");
  el.btSetFirePlace.classList.add("card-secondary");
  // Modificar o estado do app
  // Modificar o audio
  console.log("sound fire place");
}
