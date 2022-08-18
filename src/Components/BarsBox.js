import React, { useContext, useEffect } from "react";
import { BarsContext } from "../Components/BarsContext";
import { BarsContainer } from "./styles";

import Algo from "../util/sortActions";

export default function BarsBox() {
  const { algo, bars, sortActive, setBars, setSortActive } =
    useContext(BarsContext);
  useEffect(() => {
    if (sortActive) {
      const Sort = new Algo(bars, setBars);
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
      setSortActive(!sortActive);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sortActive]);

  return <BarsContainer>{bars}</BarsContainer>;
}
