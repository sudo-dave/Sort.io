export class Bars {
  constructor(inputSize, swapSpeed) {
    this.inputSize = inputSize ? inputSize : 3;
    this.barsElement = document.getElementById("bars");
    this.cssbarObjectsaribles = document.documentElement.style;
    this.swapSpeed = swapSpeed ? swapSpeed * 60 : 180;
    this.manxSize = 50;
    this.minSize = 2;
    this.barbarObjectsaules = [];
    this.isSorting = false;
    this.isSorted = false;
  }
  changeNumberOfBars() {
    this.barbarObjectsaules = [];
    this.barsElement.innerHTML = "";
    this.cssbarObjectsaribles.setProperty("--numbOfBars", this.inputSize);

    for (let i = 0; i < this.inputSize; i++) {
      let randNum = Math.floor(
        Math.random() * (this.manxSize - this.minSize) + this.minSize
      );

      let barDiv = document.createElement("div");

      barDiv.textContent = randNum;

      barDiv.setAttribute("class", "bar");
      barDiv.setAttribute("id", i);
      barDiv.style.height = randNum + 20 + "vh";

      this.barsElement.append(barDiv);

      this.barbarObjectsaules.push({ value: randNum, Id: i });
    }

    if (this.checkSorted()) this.changeNumberOfBars();
  }

  checkSorted() {
    let numbs = this.barbarObjectsaules;
    for (let i = 0; i < numbs.length - 1; i++) {
      if (numbs[i].value > numbs[i + 1].value) return false;
    }
    return true;
  }
  setSwapSpeed(speed) {
    this.swapSpeed = speed * 60;
  }

  setAnimation(barIDs, classAttr) {
    barIDs.forEach((e) =>
      document.getElementById(e).setAttribute("class", classAttr)
    );
  }

  swapBarsAnimaton(barID, barID2) {
    let barOne = document.getElementById(barID);
    let barTwo = document.getElementById(barID2);
    [
      barOne.textContent,
      barTwo.textContent,
      barOne.style.height,
      barTwo.style.height,
    ] = [
      barTwo.textContent,
      barOne.textContent,
      barTwo.style.height,
      barOne.style.height,
    ];

    barOne.setAttribute("class", "bar");
    barTwo.setAttribute("class", "bar");

    barOne.setAttribute("id", barID2);
    barTwo.setAttribute("id", barID);
  }
  changeStateButtons(isEnable) {
    console.log("inside cchange state");
    let styleClassName = isEnable ? "btn btn--sort" : "btn btn--disable";
    let btns = document.querySelectorAll(".btn:not(:first-child)");
    btns.forEach((btn) => {
      btn.setAttribute("class", styleClassName);
      btn.disabled = !isEnable;
    });
  }
}
