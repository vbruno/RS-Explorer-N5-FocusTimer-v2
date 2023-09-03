import state from "./state.js";
import * as timer from "./timer.js";
import * as el from "./elements.js";
import * as sounds from "./sounds.js";

export function toggleRunning() {
  if (state.chosenSound === null) {
    alert("Escolha um som para continuar");
    return;
  }

  state.isRunning = document.documentElement.classList.toggle("running");

  if (state.isRunning) {
    el.btPlay.classList.add("ph-fill");
    el.btPlay.classList.remove("ph");
    disableButton();
  } else {
    el.btPlay.classList.add("ph");
    el.btPlay.classList.remove("ph-fill");
    enableButton();
  }

  timer.countdown();
  sounds.buttonPressAudio.play();

  toggleMusic();

  console.log(el.btIncr);
  console.log(el.btSetForest);
}

export function reset() {
  state.isRunning = false;
  document.documentElement.classList.remove("running");

  el.btPlay.classList.add("ph");
  el.btPlay.classList.remove("ph-fill");
  enableButton();

  state.minutes = 25;
  state.seconds = 0;

  timer.updateDisplay();

  sounds.buttonPressAudio.play();
  stopMusic();
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

export function setForest() {
  el.btSetForest.classList.add("card-secondary");
  el.btSetRain.classList.remove("card-secondary");
  el.btSetCoffeeShop.classList.remove("card-secondary");
  el.btSetFirePlace.classList.remove("card-secondary");

  state.chosenSound = "forest";

  sounds.buttonPressAudio.play();
}

export function setRain() {
  el.btSetForest.classList.remove("card-secondary");
  el.btSetRain.classList.add("card-secondary");
  el.btSetCoffeeShop.classList.remove("card-secondary");
  el.btSetFirePlace.classList.remove("card-secondary");

  state.chosenSound = "rain";

  sounds.buttonPressAudio.play();
}

export function setCoffeeShop() {
  el.btSetForest.classList.remove("card-secondary");
  el.btSetRain.classList.remove("card-secondary");
  el.btSetCoffeeShop.classList.add("card-secondary");
  el.btSetFirePlace.classList.remove("card-secondary");

  state.chosenSound = "coffeeShop";

  sounds.buttonPressAudio.play();
}

export function setFirePlace() {
  el.btSetForest.classList.remove("card-secondary");
  el.btSetRain.classList.remove("card-secondary");
  el.btSetCoffeeShop.classList.remove("card-secondary");
  el.btSetFirePlace.classList.add("card-secondary");

  state.chosenSound = "firePlace";

  sounds.buttonPressAudio.play();
}

function toggleMusic() {
  switch (state.chosenSound) {
    case "forest":
      state.isRunning ? sounds.forest.play() : sounds.forest.pause();
      break;
    case "rain":
      state.isRunning ? sounds.rain.play() : sounds.rain.pause();
      break;
    case "coffeeShop":
      state.isRunning ? sounds.coffeeShop.play() : sounds.coffeeShop.pause();
      break;
    case "firePlace":
      state.isRunning ? sounds.fireplace.play() : sounds.fireplace.pause();
      break;
  }
}

function stopMusic() {
  sounds.forest.pause();
  sounds.rain.pause();
  sounds.coffeeShop.pause();
  sounds.fireplace.pause();
}

function disableButton() {
  // el.btPlay.classList.add("disabled");
  // el.btStop.classList.add("disabled");

  el.btIncr.classList.add("disabled");
  el.btIncr.setAttribute("disabled", "disabled");
  el.btDecr.classList.add("disabled");
  el.btDecr.setAttribute("disabled", "disabled");

  el.btSetForest.classList.add("disabled");
  el.btSetForest.setAttribute("disabled", "disabled");
  el.btSetRain.classList.add("disabled");
  el.btSetRain.setAttribute("disabled", "disabled");
  el.btSetFirePlace.classList.add("disabled");
  el.btSetFirePlace.setAttribute("disabled", "disabled");
  el.btSetCoffeeShop.classList.add("disabled");
  el.btSetCoffeeShop.setAttribute("disabled", "disabled");
}

function enableButton() {
  // el.btPlay.classList.remove("disabled");
  // el.btStop.classList.remove("disabled");

  el.btIncr.classList.remove("disabled");
  el.btIncr.removeAttribute("disabled");
  el.btDecr.classList.remove("disabled");
  el.btDecr.removeAttribute("disabled");

  el.btSetForest.classList.remove("disabled");
  el.btSetForest.removeAttribute("disabled");
  el.btSetRain.classList.remove("disabled");
  el.btSetRain.removeAttribute("disabled");
  el.btSetFirePlace.classList.remove("disabled");
  el.btSetFirePlace.removeAttribute("disabled");
  el.btSetCoffeeShop.classList.remove("disabled");
  el.btSetCoffeeShop.removeAttribute("disabled");
}
