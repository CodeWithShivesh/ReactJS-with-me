import { useRef } from "react";
import { MdLibraryAdd } from "react-icons/md";
import styles from "./FirstRow.module.css";

function FirstRow({ onAddButtonClick }) {
  // const noOfClick = useRef(0);
  const taskName = useRef();
  const dueDate = useRef();

  const handleAddButtonClick = () => {
    const todoName = taskName.current.value;
    const todoDueDate = dueDate.current.value;
    taskName.current.value = "";
    dueDate.current.value = "";
    onAddButtonClick(todoName, todoDueDate);
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
