import styles from "./App.module.css";
import Display from "./components/Display";
import Buttons from "./components/Buttons";
import { useState } from "react";

function App() {
  const [calVal, setCalVal] = useState("");

  const handleButtonClick = (buttonName) => {
    console.log("clicked" + buttonName);
    let newItem = calVal + buttonName;

    if (buttonName === "C") {
      setCalVal(" ");
    } else if (buttonName === "=") {
      let result = eval(calVal);
      setCalVal(result);
    } else {
      setCalVal(newItem);
    }
  };

  return (
    <div className={styles.calculator}>
      <Display displayValue={calVal}></Display>
      <Buttons
        onButtonClick={(buttonName) => handleButtonClick(buttonName)}
      ></Buttons>
    </div>
  );
}

export default App;
