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
  background-color: ${(props) => (props.swap ? "red" : "grey")};
  padding: 0.5rem;
  width: ${(props) => props.width * 2.5}vw;
  font-weight: 900;
  color: ${(props) => (props.swap ? "black" : "whtie")};
`;

// Header Section********
export const Header = styled.header`
  text-align: center;
  padding-block: 1em;
  background-color: red;
  /* font-size: clamp(16px, 5vw, 50px); */
  h1 {
    color: white;
  }
`;
// Main Section********
export const Main = styled.main`
  background: green;
  display: flex;
  flex-direction: column-reverse;
  padding-block: 1.5em;
  /* for the scroll  */
  height: 88vh;
`;
export const BarsContainer = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 0.7em;
  /* align-items: center; */
  /* background-color: blue; */
  width: 88%;
  margin: 0 auto;
  margin-bottom: 1em;
  //for the scroll thing
  overflow-y: auto;
  overflow-x: hidden;
  flex: 1;
  ${ScrolBarStyle}
`;
export const InputContainer = styled.div`
  background-color: orange;
  width: 88%;
  margin: 0 auto;
  text-align: center;
  padding: 1rem;
  /* margin-block: 1.4rem; */
  input[type="range"] {
    width: 100%;
    margin-block: 1rem;
  }

  select,
  button {
    font-size: 1.2rem;
    padding: 0.4em;
    cursor: pointer;
  }
  button {
    margin-left: 1rem;
  }
`;
