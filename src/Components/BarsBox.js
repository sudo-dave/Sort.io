import React, { useContext, useEffect, useState } from "react";
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
          console.error("Missing case");
      }
      setSortActive(!sortActive);
    }
  }, [sortActive]);

  return <BarsContainer>{bars}</BarsContainer>;
}
