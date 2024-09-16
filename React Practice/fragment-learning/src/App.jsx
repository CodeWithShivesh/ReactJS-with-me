import Errormsg from "./Components/Errormsg";
import Foods from "./Components/Foods";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Container from "./Components/Container";
import Input from "./Components/Input";
import { useState } from "react";

/*Here we are using HOoks which methed name starting with 'use' that is hook like 'useState()' this return one array who has 2 elements first is for current state and second one is method for the edit current state value. hooks are baisically use for managing state.*/

function App() {
  // here we are using hooks without destructureing
  let textStateArr = useState("Custom Food");
  let textStateVal = textStateArr[0];
  let setTextState = textStateArr[1];

  //here we are using hooks with destructuring method

  // let [foodItems, setfoodItems] = useState(["Roti", "Apple", "Dal"]);

  let [foodItems, setfoodItems] = useState([]);

  // let foodItems = [];

  // condition: 1
  // if (foodItems.length === 0) {
  //   return <h1>I'm still hungry.</h1>;
  // }

  // condition: 2
  // let empty_msg = foodItems.length === 0 ? <h1>I'm still hungry.</h1> : null;

  const handleInput = (Event) => {
    if (Event.key === "Enter") {
      let newItem = Event.target.value;
      let newFoodItem = [...foodItems, newItem];
      Event.target.value = "";
      setfoodItems(newFoodItem);
    }
  };

  return (
    <>
      <Container>
        <h1>Healthy Food</h1>
        {/* {foodItems.length === 0 && <h1>I'm still hungry.</h1>}
      {empty_msg} */}
        <Input handleInput={handleInput}></Input>
        <Errormsg items={foodItems}></Errormsg>
        {/* <p>{textStateVal}</p> */}
        <Foods items={foodItems}></Foods>
      </Container>

      <Container>
        <p>
          There are some healthy foods listed above which is good for health and
          well being.
        </p>
      </Container>

      <Container>
        <p>This is shivesh mishra </p>
      </Container>
    </>
  );
}

export default App;
