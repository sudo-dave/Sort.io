export class Algo {
  constructor(bars) {
    this.bars = bars;
    this.bars.isSorting = true;
    bars.changeStateButtons(false);
  }

  sleep(ms) {
    if (this.bars.isSorting)
      return new Promise((resolve) => setTimeout(resolve, ms));

    throw Error("stop Algo");
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
  }
}
