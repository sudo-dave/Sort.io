import React, { useContext } from "react";
import createRandBars from "../util/createRandBars";
import { BarsContext } from "./BarsContext";

import { InputContainer } from "./styles";

import { Config } from "../global.config";

export default function Input() {
  const {
    algo,
    setAlgo,
    bars,
    setBars,
    setSortActive,
    sortActive,
    isfinished,
    setIsFinished,
  } = useContext(BarsContext);
  return (
    <InputContainer>
      <h2>
        Array Size: <span>{bars.length}</span>
      </h2>
      <input
        type="range"
        min={Config.INPUT_RANGE_MIN}
        max={Config.INPUT_RANGE_MAX}
        disabled={sortActive}
        value={bars.length}
        onChange={(e) => {
          setIsFinished(false);
          setBars(createRandBars(e.target.value));
        }}
      />

      <div className="btns-wrapper">
        <select
          value={algo}
          disabled={sortActive}
          onChange={(e) => setAlgo(e.target.value)}
        >
          <option value="Insertion">Insertion</option>
          <option value="Bubble">Bubble</option>
          <option value="Selection">Selection</option>
        </select>
        <button
          className="btn-new"
          disabled={sortActive}
          onClick={() => {
            setIsFinished(false);
            setBars(createRandBars(bars.length));
          }}
        >
          New Array
        </button>
        <button
          className="btn-sort"
          disabled={sortActive}
          onClick={() => !isfinished && setSortActive(!sortActive)}
        >
          Sort
        </button>
      </div>
    </InputContainer>
  );
}
