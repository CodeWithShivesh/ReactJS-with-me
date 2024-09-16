import styles from "./Input.module.css";

/*The method 'handleInput here this is the nothing but the behavior of child ' */

// const handleInput = (Event) => {
//     console.log(Event.target.value);
//   };

const Input = (props) => {
  return (
    <input
      className={styles.input}
      type="text"
      placeholder="Enter your Item......"
      //onChange={(Event) => handleInput(Event)}
      //onChange={props.handleInput}
      onKeyDown={props.handleInput}
    />
  );
};

export default Input;
