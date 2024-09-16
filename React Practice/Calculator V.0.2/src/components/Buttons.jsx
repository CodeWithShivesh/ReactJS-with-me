import styles from "./Buttons.module.css";

const Buttons = ({ onButtonClick }) => {
  const buttonItem = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "/",
    "7",
    "8",
    "*",
    "9",
    "0",
    "%",
    "=",
  ];

  return (
    <div className={styles.buttonsContainer}>
      {buttonItem.map((buttonItem) => (
        <button
          className={styles.button}
          onClick={() => onButtonClick(buttonItem)}
          key={buttonItem}
        >
          {buttonItem}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
