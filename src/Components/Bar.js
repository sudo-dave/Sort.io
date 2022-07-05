import React from "react";
import { BarWrapper } from "./styles";

export default function Bar({ value, swap = false }) {
  return (
    <BarWrapper width={value} swap={swap}>
      {value}
    </BarWrapper>
  );
}
