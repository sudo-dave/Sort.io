import { Bars, Algo } from "./bars.js";

const sizeSlider = document.getElementById("size");
const selectElem = document.querySelector("select[name=algorithm]");
const speedSlider = document.getElementById("speed");
const sortBtn = document.getElementById("btn");

var globalBar;

window.onload = function () {
  globalBar = new Bars();
  globalBar.changeNumberOfBars();
  console.log("START");
  console.log(globalBar);
};

sizeSlider.addEventListener("input", (e) => {
  console.log("SIZe slider");
  let sliderVal = e.currentTarget.value;
  globalBar = new Bars(sliderVal);
  globalBar = new Bars(sliderVal, speedSlider.value);
  globalBar.changeNumberOfBars();
  console.log(globalBar);
});
sortBtn.addEventListener("click", () => {
  if (globalBar.isSorted) {
    alert("is sorted");
    return;
  }
  console.log("SORT BTN **");
  console.log(globalBar);

  let algoName = selectElem.value;
  let algo = new Algo(globalBar);

  if (algoName === "Selection") {
    algo.selectionSort();
  } else if (algoName === "Bubble") {
    algo.bubbleSort();
  } else if (algoName === "Insertion") {
    algo.insertionSort();
  }
});

speedSlider.addEventListener("input", (e) => {
  let sliderVal = e.currentTarget.value;
  globalBar.setSwapSpeed(sliderVal);
});
