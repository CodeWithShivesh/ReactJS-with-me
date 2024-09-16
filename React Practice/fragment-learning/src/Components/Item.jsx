import styles from "./Item.module.css";
//props is just a name ... in the react when pass any arguments to any function then react return the arguments for the function in the form of obj and which is called here 'props'.

//Here we pass the  'foodItem={item}' as the arguments (in the attribute defining manner) from the Foods.jsx to item.jsx

//props are immutable (default me jaisa mila h waise hi rahega )
//We can write the destructure props like props = {foodItem} otherwise use props.foodItem everywhere in the program.

let Item = (props) => {
  /*The method 'handleBuyNow here this is the nothing but the behavior of child ' */
  //But after commenting this all I added the 'handleBuyButton' in the parent and nowit is a behaviour of child so with the props above two thing are coming first one is foodItem and second one is 'handleBuyButton'

  // const handleBuyNow = (Event) => {
  //   console.log(Event);
  //   console.log(`${props.foodItem} being bought`);
  // };

  return (
    <>
      <li
        className={`${styles["kg-item"]} list-group-item ${
          props.buy && "active"
        }`}
      >
        <span className={styles["kg-span"]}>{props.foodItem}</span>
        <button
          className={`${styles.buttonCls} btn btn-success ${props.brought && "btn-danger"}`}
          onClick={props.handleBuyButton}
          //onClick={(Event) => handleBuyNow(Event)}
        >
          Buy Now
        </button>
      </li>
    </>
  );
};

export default Item;
