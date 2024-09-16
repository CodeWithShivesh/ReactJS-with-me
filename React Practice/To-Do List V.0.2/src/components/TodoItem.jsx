import styles from "./TodoItem.module.css";
import { MdDeleteForever } from "react-icons/md";

const TodoItem = ({ todoDate, todoTask, onClickbutton }) => {
  return (
    <div className="container">
      <div className={`${styles["todoRow"]} row`}>
        <div className={`${styles["item"]} col-4`}>{todoTask}</div>
        <div className={`${styles["item"]} col-4`}>{todoDate}</div>
        <div className={`${styles["item"]} col-2`}>
          <button
            type="button"
            className={`${styles["todoButton"]} btn btn-danger`}
            onClick={() => onClickbutton(todoTask)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
