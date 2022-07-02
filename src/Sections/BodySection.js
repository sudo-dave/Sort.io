import React, { useEffect, useMemo, useState } from "react";
import Input from "../Components/Input";

import { BarsContext } from "../Components/BarsContext";
import createrRandArr from "../util/createrRandArr";
import BarsBox from "../Components/BarsBox";

import { Main } from "../Components/styles";

import { Config } from "../global.config";
export default function BodySection() {
  const [algo, setAlgo] = useState(Config.INIT_ALGO_NAME);
  const [bars, setBars] = useState(createrRandArr(Config.INIT_ARR_SIZE));
  const [active, setActive] = useState(false);

  const val = useMemo(
    () => ({ algo, setAlgo, bars, setBars, active, setActive }),
    [algo, setAlgo, bars, setBars, active, setActive]
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
