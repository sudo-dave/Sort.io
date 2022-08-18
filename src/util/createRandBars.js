import Bar from "../Components/Bar";

import { Config } from "../global.config";

export default function createRandBars(len) {
  const randArr = [];
  while (isSorted(randArr)) {
    for (let i = 0; i < len; i++) {
      const randNum = Math.floor(
        Math.random() * (Config.RAND_ARR_MAX_VAL - Config.RAND_ARR_LOW_VAL) +
          Config.RAND_ARR_LOW_VAL
      );
      randArr.push(randNum);
    }
  }

  return randArr.map((e, i) => <Bar key={i} value={e} />);
}
const isSorted = (arr) => {
  if (arr.length === 0) return true;

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
};
