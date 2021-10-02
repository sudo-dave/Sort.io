export class Bars {
  constructor(inputSize, swapSpeed) {
    this.inputSize = inputSize ? inputSize : 3;
    this.barsElement = document.getElementById("bars");
    this.cssbarObjectsaribles = document.documentElement.style;
    this.swapSpeed = swapSpeed ? swapSpeed * 100 : 300;
    this.manxSize = 50;
    this.minSize = 2;
    this.barbarObjectsaules = [];
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
    this.swapSpeed = speed * 100;
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
}

export class Algo {
  constructor(bars) {
    this.bars = bars;
    this.bars.isSorted = true;
  }
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
  swap(i, j) {
    let barObjects = this.bars.barbarObjectsaules;
    let tempbarObjectsal = barObjects[i]["value"];
    let tempID = barObjects[i]["Id"];

    barObjects[i]["value"] = barObjects[j]["value"];
    barObjects[i]["Id"] = barObjects[j]["Id"];
    barObjects[j]["value"] = tempbarObjectsal;
    barObjects[j]["Id"] = tempID;

    this.bars.swapBarsAnimaton(tempID, barObjects[i]["Id"]);
  }

  async merge(arr, start, mid, end) {
    let start2 = mid + 1;

    // If the direct merge is already sorted
    if (arr[mid] <= arr[start2]) {
      return;
    }

    // Two pointers to maintain start
    // of both arrays to merge
    while (start <= mid && start2 <= end) {
      // If element 1 is in right place
      if (arr[start] <= arr[start2]) {
        start++;
      } else {
        let value = arr[start2];
        let index = start2;

        // Shift all the elements between element 1
        // element 2, right by 1.
        while (index != start) {
          arr[index] = arr[index - 1];
          index--;
        }
        arr[start] = value;

        // Update all the pointers
        start++;
        mid++;
        start2++;
      }
    }
  }
  async mergeSort() {
    let arr = this.bars.barObjects;
    let l = arr[0]["Id"];
    let r = arr.length - 1;

    if (l < r) {
      // Same as (l + r) / 2, but avoids overflow
      // for large l and r
      let m = l + Math.floor((r - l) / 2);

      // Sort first and second halves
      mergeSort(arr, l, m);
      mergeSort(arr, m + 1, r);

      merge(arr, l, m, r);
    }
  }

  async selectionSort() {
    let bars = this.bars;
    let barObjects = bars.barbarObjectsaules;
    let n = bars.inputSize;
    let i, j, min_idx;

    for (i = 0; i < n - 1; i++) {
      min_idx = i;
      bars.setAnimation([barObjects[i]["Id"]], "bar bar--highlight ");
      await this.sleep(bars.swapSpeed);
      for (j = i + 1; j < n; j++) {
        bars.setAnimation(
          [barObjects[j]["Id"]],
          "bar bar--highlight--secondary"
        );
        await this.sleep(bars.swapSpeed);
        bars.setAnimation([barObjects[j]["Id"]], "bar");

        if (barObjects[j]["value"] < barObjects[min_idx]["value"]) min_idx = j;
      }

      bars.setAnimation(
        [barObjects[min_idx]["Id"], barObjects[i]["Id"]],
        "bar bar--swap"
      );

      await this.sleep(bars.swapSpeed);
      //try fixing this
      this.swap(min_idx, i);
    }
  }
  //Add the aniamtion and delay
  async bubbleSort() {
    let bars = this.bars;
    let barObjects = bars.barbarObjectsaules;
    let n = bars.inputSize;
    let i, j;
    for (i = 0; i < n - 1; i++) {
      for (j = 0; j < n - i - 1; j++) {
        if (barObjects[j]["value"] > barObjects[j + 1]["value"]) {
          bars.setAnimation(
            [barObjects[j]["Id"], barObjects[j + 1]["Id"]],
            "bar bar--swap"
          );

          await this.sleep(bars.swapSpeed);
          //try fixing this

          this.swap(j, j + 1);
        }

        bars.setAnimation([barObjects[j]["Id"]], "bar");
      }
    }
    console.log(barObjects);
  }
  //Add the aniamtion and delay ****
  //*** */
  async insertionSort() {
    let bars = this.bars;
    let barObjects = bars.barbarObjectsaules;

    let n = bars.inputSize;
    let i, j;
    console.log("insdie the insertion sort");

    for (i = 1; i < n; i++) {
      j = i;

      while (j > 0 && barObjects[j]["value"] < barObjects[j - 1]["value"]) {
        bars.setAnimation(
          [barObjects[j]["Id"], barObjects[j - 1]["Id"]],
          "bar bar--swap"
        );

        await this.sleep(bars.swapSpeed);

        this.swap(j, j - 1);
        j -= 1;
      }
    }
    console.log(barObjects);
  }
}
