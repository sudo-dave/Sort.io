import React, { useContext, useEffect } from "react";
import { BarsContext } from "../Components/BarsContext";
import { BarsContainer } from "./styles";

import Algo from "../util/sortActions";

export default function BarsBox() {
  const {
    algo,
    bars,
    sortActive,
    setBars,
    setSortActive,
    setIsFinished,
    isfinished,
  } = useContext(BarsContext);
  useEffect(() => {
    if (sortActive) {
      setIsFinished(!isfinished);
      const Sort = new Algo(bars, setBars, setSortActive, sortActive);

      switch (algo) {
        case "Insertion":
          Sort.Insertion();
          break;
        case "Bubble":
          Sort.Bubble();
          break;
        case "Selection":
          Sort.Selection();
          break;
        default:
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortActive]);

  return <BarsContainer>{bars}</BarsContainer>;
}
