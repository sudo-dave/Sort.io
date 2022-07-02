import Bar from "../Components/Bar";

import { Config } from "../global.config";

// generate un-sorted array of compentst of bars
export default function createrRandArr(len) {
  const numArr = [];
  const barArr = [];
  do {
    for (let i = 0; i < len; i++) {
      const randNum = Math.floor(
        Math.random() * (Config.RAND_ARR_MAX_VAL - Config.RAND_ARR_LOW_VAL) +
          Config.RAND_ARR_LOW_VAL
      );
      numArr.push(randNum);
    }
  } while (isSorted(numArr));

  numArr.forEach((e, i) => {
    barArr.push(<Bar key={i} value={e} />);
  });

  return barArr;
}

const isSorted = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > arr[i + 1]) return false;
  }
};
