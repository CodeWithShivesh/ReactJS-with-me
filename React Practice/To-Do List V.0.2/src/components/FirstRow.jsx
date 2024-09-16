import { useState } from "react";
import { MdLibraryAdd } from "react-icons/md";
import styles from "./FirstRow.module.css";

function FirstRow({ onAddButtonClick }) {
  let [todoName, setTodoName] = useState("");
  let [todoDueDate, setTodoDueDate] = useState("");

  const handleOnNameChnage = (event) => {
    setTodoName(event.target.value);
  };

  const handleOnDueDateChnage = (event) => {
    setTodoDueDate(event.target.value);
  };

  const handleAddButtonClick = () => {
    onAddButtonClick(todoName, todoDueDate);
    setTodoDueDate("");
    setTodoName("");
  };

  return (
    <div className="container text-center">
      <div className={`${styles["todoRow"]} row`}>
        <div className="col-4">
          <input
            className={styles["input"]}
            type="text"
            placeholder="Enter Todo Here"
            value={todoName}
            onChange={handleOnNameChnage}
          />
        </div>
        <div className="col-4">
          <input
            className={styles["input"]}
            type="date"
            value={todoDueDate}
            onChange={handleOnDueDateChnage}
          />
        </div>
        <div className="col-2">
          <button
            type="button"
            className={`${styles["todoButton"]} btn btn-success`}
            onClick={handleAddButtonClick}
          >
            <MdLibraryAdd />
          </button>
        </div>
      </div>
    </div>
  );
}

export default FirstRow;
