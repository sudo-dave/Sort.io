import React, { useContext } from "react";
import createrRandArr from "../util/createrRandArr";
import { BarsContext } from "./BarsContext";

import { InputContainer } from "./styles";

import { Config } from "../global.config";
export default function Input() {
  const { algo, setAlgo, bars, setBars, setActive, active } =
    useContext(BarsContext);

  return (
    <InputContainer>
      {console.log(useContext(BarsContext))}

      <h2>Array Size ({bars.length})</h2>
      <input
        type="range"
        min={Config.INPUT_RANGE_MIN}
        max={Config.INPUT_RANGE_MAX}
        value={bars.length}
        onChange={(e) => setBars(createrRandArr(e.target.value))}
      />

      <div className="btn-select-wrapper">
        <select value={algo} onChange={(e) => setAlgo(e.target.value)}>
          <option value="Insertion">Insertion</option>
          <option value="Bubble">Bubble</option>
          <option value="Selection">Selection</option>
        </select>
        <button onClick={(e) => setBars(createrRandArr(bars.length))}>
          New Array
        </button>
        <button onClick={() => setActive(!active)}>Sort</button>
      </div>
    </InputContainer>
  );
}
