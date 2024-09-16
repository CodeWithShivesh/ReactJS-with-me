import { useContext, useRef } from "react";
import { MdLibraryAdd } from "react-icons/md";
import styles from "./FirstRow.module.css";
import { TodoItemsContext } from "../store/todo-item-store";

function FirstRow() {
  const { addNewItem } = useContext(TodoItemsContext);
  // const noOfClick = useRef(0);
  const taskName = useRef();
  const dueDate = useRef();

  const handleAddButtonClick = () => {
    const todoName = taskName.current.value;
    const todoDueDate = dueDate.current.value;
    taskName.current.value = "";
    dueDate.current.value = "";
    addNewItem(todoName, todoDueDate);
  };

  return (
    <div className="container text-center">
      <div className={`${styles["todoRow"]} row`}>
        <div className="col-4">
          <input
            className={styles["input"]}
            type="text"
            ref={taskName}
            placeholder="Enter Todo Here"
          />
        </div>
        <div className="col-4">
          <input className={styles["input"]} type="date" ref={dueDate} />
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
