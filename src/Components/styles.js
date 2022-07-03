import styled from "styled-components";

//Util
const ScrolBarStyle = `

  &::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #f5f5f5;
  }
  &::-webkit-scrollbar {
    width: 10px;
    background-color: #f5f5f5;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #f90;
    background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
  }
 `;

//Bar*****
export const BarWrapper = styled.div`
  /* verical align the text */
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* ---- */
  background: rgb(131, 58, 180);
  background: linear-gradient(
    198deg,
    rgba(131, 58, 180, 1) 0%,
    rgba(141, 29, 253, 1) 33%,
    rgb(29, 156, 253) 100%
  );
  background: ${(props) => (props.swap ? "#fd7e1d" : "")};
  padding: 0.5rem;
  width: ${(props) => props.width * 2.5}vw;
  font-weight: 900;
  color: ${(props) => (props.swap ? "black" : "whtie")};
  flex: 0 10 6.2rem;

  font-size: clamp(1rem, 1.5vw, 1.7rem);

  @media (min-width: 820px) {
    width: 15px;
    height: ${(props) => props.width * 1.6}vw;
    text-align: center;
    display: block;
    flex: 0 10 9%;
  }
  @media (min-width: 1000px) {
    height: ${(props) => props.width * 1.3}vw;
  }
  @media (min-width: 1160px) {
    height: ${(props) => props.width * 0.8}vw;
  }
`;

// Header Section********
export const Header = styled.header`
  background-color: #51557e;
  text-align: center;
  padding-block: 0.2rem;
  color: white;
  h1 {
    color: white;
    font-size: clamp(2.5rem, 6vw, 4rem);
    padding: 0;
  }
  p {
    font-size: clamp(1rem, 2vw, 1.3rem);
  }
`;
// Main Section********
export const Main = styled.main`
  /* background: green; */
  display: flex;
  flex-direction: column-reverse;
  padding-block: 1.5em;
  /* for the scroll  */
  height: 85vh;

  @media (min-width: 820px) {
    gap: 10vh;
    flex-direction: column;
    height: auto;
  }
`;
export const BarsContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.7em;
  width: 88%;
  margin: 0 auto;
  margin-bottom: 1em;
  //for the scroll thing
  overflow-y: auto;
  overflow-x: hidden;
  /* flex: 1; */
  /* justify-content: center; */

  ${ScrolBarStyle}
  @media (min-width: 820px) {
    margin-bottom: 0;
    flex-direction: row;
    width: 85%;
    overflow-y: hidden;
    overflow-x: auto;
    justify-content: space-evenly;
    align-items: flex-end;
  }
`;
export const InputContainer = styled.div`
  background-color: #816797;
  width: min(100%, 600px);
  margin: 0 auto;

  text-align: center;
  padding: 1.5rem;

  span {
    color: orange;
  }
  h2 {
    font-size: clamp(1.5rem, 2vw, 2rem);
    color: black;
    font-weight: 900;
  }
  /* margin-block: 1.4rem; */
  input[type="range"] {
    width: 100%;
    margin-block: 1rem;
  }

  select,
  button {
    font-size: 1.2rem;
    padding: 0.5em;
    cursor: pointer;
  }

  .btns-wrapper {
    display: flex;
    /* justify-content: space-evenly; */
    flex-direction: column;
    gap: 7px;
  }
  button + button {
  }

  @media (min-width: 820px) {
    .btns-wrapper {
      flex-direction: row;
      justify-content: space-evenly;
    }
  }
`;
