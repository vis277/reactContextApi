import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Parent from "./assets/Components/Parent";
import { createContext } from "react";
import { useContext } from "react";
export const FirstName = createContext("");
const FirstNameProvider = FirstName.Provider;
const FirstNameConsumer = FirstName.Consumer;
// theme context
export const Theme = createContext("");
const ThemeProvider = Theme.Provider;
//parent Theme
export const ParentTheme = createContext("");
const ParentThemeProvider = ParentTheme.Provider;
function App() {
  const [input, setInput] = useState("");
  const [color, setColor] = useState("white");

  const _handleClick = () => {
    if (color === "white") {
      setColor("black");
      return;
    }
    if (color === "black") {
      setColor("white");
      return;
    }
  };
  return (
    <>
      <input
        type="text"
        value={input}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      ></input>
      <button onClick={_handleClick}>ChangeTheme</button>
      <ParentThemeProvider value={color}>
        <ThemeProvider value={color}>
          <FirstNameProvider value={input}>
            <Parent />
          </FirstNameProvider>
        </ThemeProvider>
      </ParentThemeProvider>
    </>
  );
}

export default App;
