import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import styled from "@emotion/styled";
const Button = styled.button<{ count: number }>`
  background-color: ${(props) =>
    `rgb(${props.count - 255},${props.count},${props.count - 255})`};
  border: none;
  color: white;
  padding: 15px 32px;
  border-radius: 4px;
  cursor: pointer;
  &:active {
    transform: scale(0.95);
  }
`;
function App() {
  const [count, setCount] = useState(0);
  const increment = () => {
    if (count >= 255) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + Manick!</p>
        <p>
          <Button count={count} type="button" onClick={increment}>
            count is: {count}
          </Button>
        </p>
      </header>
    </div>
  );
}

export default App;
