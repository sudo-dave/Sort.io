import { Bars, Algo } from "./bars.js";

const sizeSlider = document.getElementById("size");
const selectElem = document.querySelector("select[name=algorithm]");
const speedSlider = document.getElementById("speed");
const sortBtn = document.querySelectorAll("input[type=button]");

let globalBar;

window.onload = function () {
  globalBar = new Bars();
  globalBar.changeNumberOfBars();
  console.log("START");
  console.log(globalBar);
};

sizeSlider.addEventListener("input", () => {
  console.log("hiadsfja");
  let sliderVal = sizeSlider.value;
  globalBar = new Bars(sliderVal);
  globalBar = new Bars(sliderVal, speedSlider.value);
  globalBar.changeNumberOfBars();
  console.log(globalBar);
});

sortBtn.forEach((el) =>
  el.addEventListener("click", (e) => {
    let algoName = e.currentTarget.value;

    if (algoName === "New Array") {
      //Bug when getting new set while sorting
      sizeSlider.dispatchEvent(new Event("input"));
      return;
    }
    if (globalBar.isSorted) {
      alert("Set is sorted alreaedy");
      return;
    }

    let algo = new Algo(globalBar);

    if (algoName === "Selection") {
      algo.selectionSort();
    } else if (algoName === "Bubble") {
      algo.bubbleSort();
    } else if (algoName === "Insertion") {
      algo.insertionSort();
    }

    console.log("done");
  })
);

speedSlider.addEventListener("input", (e) => {
  let sliderVal = e.currentTarget.value;
  globalBar.setSwapSpeed(sliderVal);
});
