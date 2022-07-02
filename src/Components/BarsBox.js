import React, { useContext, useEffect } from "react";
import { BarsContext } from "../Components/BarsContext";
import { BarsContainer } from "./styles";

import Algo from "../util/sortActions";

export default function BarsBox() {
  const { algo, bars, active, setBars, setActive } = useContext(BarsContext);

  useEffect(() => {
    if (active) {
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
      setActive(!active);
    }
  }, [active]);

  return <BarsContainer>{bars}</BarsContainer>;
}
