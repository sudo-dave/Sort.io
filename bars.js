export class Bars {
  constructor(inputSize) {
    this.inputSize = inputSize ? inputSize : 3;
    this.barsElement = document.getElementById("bars");
    this.cssVaribles = document.documentElement.style;
    this.swapSpeed = 3000;
    this.manxSize = 50;
    this.minSize = 2;
    this.barVaules = [];
  }
  changeNumberOfBars() {
    this.barsElement.innerHTML = "";
    this.cssVaribles.setProperty("--numbOfBars", this.inputSize);

    for (let i = 0; i < this.inputSize; i++) {
      let randNum = Math.floor(
        Math.random() * (this.manxSize - this.minSize) + this.minSize
      );

      let barDiv = document.createElement("div");

      barDiv.textContent = randNum;
      barDiv.setAttribute("class", "bar");
      barDiv.setAttribute("id", i);
      barDiv.style.height = randNum + 20 + "vh";

      this.barsElement.appendChild(barDiv);

      this.barVaules.push({ value: randNum, Id: i });
    }
  }
  swapBars(barID, barID2) {
    console.log(barID, barID2);
    var barOne = document.getElementById(barID);
    var barTwo = document.getElementById(barID2);

    var barOneVal = barOne.textContent;
    var barTwoVal = barTwo.textContent;

    var barOneHeight = barOne.style.height;
    var barTwoHeight = barTwo.style.height;

    barOne.setAttribute("class", " bar bar--swap");
    barTwo.setAttribute("class", " bar bar--swap");
    console.log("wait::");
    barOne.textContent = barTwoVal;
    barTwo.textContent = barOneVal;

    barOne.style.height = barTwoHeight;
    barTwo.style.height = barOneHeight;

    barOne.setAttribute("class", "bar");
    barTwo.setAttribute("class", "bar");

    barOne.setAttribute("id", barID2);
    barTwo.setAttribute("id", barID);
  }
}

export class Algo {
  constructor(bars) {
    this.bars = bars;
  }
  selectionSort() {
    let barVaules = this.bars.barVaules;
    let n = this.bars.inputSize;
    var i, j, min_idx;

    for (i = 0; i < n - 1; i++) {
      min_idx = i;
      for (j = i + 1; j < n; j++)
        if (barVaules[j]["value"] < barVaules[min_idx]["value"]) min_idx = j;

      var tempVal = barVaules[min_idx]["value"];
      var tempId = barVaules[min_idx]["Id"];

      barVaules[min_idx]["value"] = barVaules[i]["value"];
      barVaules[min_idx]["Id"] = barVaules[i]["Id"];
      barVaules[i]["value"] = tempVal;
      barVaules[i]["Id"] = tempId;

      this.bars.swapBars(barVaules[min_idx]["Id"], barVaules[i]["Id"]);
      console.log("Finsih the wait");
    }
    console.log(barVaules);
  }
}
