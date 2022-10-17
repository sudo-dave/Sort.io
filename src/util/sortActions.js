import Bar from "../Components/Bar";

import { Config } from "../global.config";

const delay = () =>
  new Promise((resolve) => setTimeout(resolve, Config.SEC_ANIMATION__DELAY));

export default class Algo {
  constructor(bars, setBars, setSortActive, sortActive) {
    const baArrOfObjs = [];
    // [{value:.. id: ..} ...]
    bars.forEach((e) => {
      baArrOfObjs.push({ value: e["props"]["value"], id: parseInt(e["key"]) });
    });

    this.barsObj = baArrOfObjs;
    this.setBars = setBars;
    this.setSortActive = setSortActive;
    this.sortActive = sortActive;
  }
  setActive() {
    this.setSortActive(!this.sortActive);
  }

  objToBarRender() {
    const bars = [];

    this.barsObj.forEach((e) => {
      const id = e["id"];
      const val = e["value"];
      bars.push(<Bar key={id} value={val} />);
    });

    this.setBars(bars);
  }
  swap(i, j) {
    const barObj = this.barsObj;
    const tempVal = barObj[i]["value"];
    const tempId = barObj[i]["id"];

    barObj[i]["value"] = barObj[j]["value"];
    barObj[i]["id"] = barObj[j]["id"];
    barObj[j]["value"] = tempVal;
    barObj[j]["id"] = tempId;
  }
  animateBar(arrId) {
    const bars = [];

    this.barsObj.forEach((e) => {
      const id = e["id"];
      const val = e["value"];

      if (arrId.includes(e["id"])) {
        bars.push(<Bar key={id} value={val} swap />);
        return;
      }
      bars.push(<Bar key={id} value={val} />);
    });

    this.setBars(bars);
  }
  async Insertion() {
    const barObj = this.barsObj;
    const len = barObj.length;
    let i, j;

    for (i = 1; i < len; i++) {
      j = i;
      while (j > 0 && barObj[j]["value"] < barObj[j - 1]["value"]) {
        this.animateBar([barObj[j]["id"], barObj[j - 1]["id"]]);
        await delay();
        this.swap(j, j - 1);
        j -= 1;
      }
    }
    this.objToBarRender();
    this.setActive();
  }
  async Bubble() {
    const barObj = this.barsObj;
    const len = barObj.length;
    let i, j;

    for (i = 0; i < len - 1; i++) {
      for (j = 0; j < len - i - 1; j++) {
        if (barObj[j]["value"] > barObj[j + 1]["value"]) {
          this.animateBar([barObj[j]["id"], barObj[j + 1]["id"]]);

          await delay();
          this.swap(j, j + 1);
        }
      }
    }
    this.objToBarRender();
    this.setActive();
  }
  async Selection() {
    const barObj = this.barsObj;
    const len = barObj.length;
    let i, j, min_id;

    for (i = 0; i < len - 1; i++) {
      min_id = i;
      for (j = i + 1; j < len; j++) {
        if (barObj[j]["value"] < barObj[min_id]["value"]) min_id = j;
      }
      this.animateBar([barObj[min_id]["id"], barObj[i]["id"]]);
      await delay();
      this.swap(min_id, i);
    }
    this.objToBarRender();
    this.setActive();
  }
}
