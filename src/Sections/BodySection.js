import React, { useMemo, useState } from "react";
import Input from "../Components/Input";

import { BarsContext } from "../Components/BarsContext";
import createRandBars from "../util/createRandBars";
import BarsBox from "../Components/BarsBox";

import { Main } from "../Components/styles";

import { Config } from "../global.config";
export default function BodySection() {
  const [algo, setAlgo] = useState(Config.INITIAL_ALGO_NAME);
  const [bars, setBars] = useState(createRandBars(Config.INITIAL_ARR_SIZE));
  const [sortActive, setSortActive] = useState(false);
  const [isfinished, setIsFinished] = useState(false);
  const val = useMemo(
    () => ({
      algo,
      setAlgo,
      bars,
      setBars,
      sortActive,
      setSortActive,
      isfinished,
      setIsFinished,
    }),
    [
      algo,
      setAlgo,
      bars,
      setBars,
      sortActive,
      setSortActive,
      isfinished,
      setIsFinished,
    ]
  );
  return (
    <Main>
      <BarsContext.Provider value={val}>
        <Input />
        <BarsBox />
      </BarsContext.Provider>
    </Main>
  );
}
