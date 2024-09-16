import { useState } from "react";
import Item from "./Item";
function Foods(props) {
  let { items } = props;

  let [activeItem, setActiveItem] = useState([]);
  const clickBuyButton = (Event, item) => {
    console.log(Event);
    let newItem = [...activeItem, item];
    setActiveItem(newItem);
  };

  return (
    <>
      <ul className="list-group">
        {items.map((item) => (
          <Item
            key={item}
            foodItem={item}
            buy={activeItem.includes(item)}
            brought={activeItem.includes(item)}
            //handleBuyButton={() => console.log(`${item} being brought`)}
            handleBuyButton={(Event) => clickBuyButton(Event, item)}
          >
            {" "}
          </Item>
        ))}
      </ul>
    </>
  );
}

export default Foods;
