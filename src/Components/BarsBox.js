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
    setFinished,
    finished,
  } = useContext(BarsContext);
  useEffect(() => {
    if (sortActive) {
      setFinished(!finished);
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
