import { Bars, Algo } from "./bars.js";

const sizeSlider = document.getElementById("size");
const selectElem = document.querySelector("select[name=algorithm]");
const speedSlider = document.getElementById("speed");
const sortBtn = document.getElementById("btn");

var globalBar;

window.onload = function () {
  // changeNumberOfBars();
  globalBar = new Bars();
  globalBar.changeNumberOfBars();
  console.log(globalBar);
};

sizeSlider.addEventListener("input", (e) => {
  globalBar = new Bars(e.currentTarget.value);
  globalBar.changeNumberOfBars();
  console.log(globalBar);
});
sortBtn.addEventListener("click", () => {
  let algoName = selectElem.value;
  let algo = new Algo(globalBar);

  if (algoName === "Selection") {
    algo.selectionSort();
  }
});

speedSlider.addEventListener("input", (e) => {});
