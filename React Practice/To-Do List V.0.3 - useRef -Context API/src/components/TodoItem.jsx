import { useContext } from "react";
import styles from "./TodoItem.module.css";
import { MdDeleteForever } from "react-icons/md";
import { TodoItemsContext } from "../store/todo-item-store";

const TodoItem = ({ todoDate, todoTask }) => {
  const { deleteItem } = useContext(TodoItemsContext);

  return (
    <div className="container">
      <div className={`${styles["todoRow"]} row`}>
        <div className={`${styles["item"]} col-4`}>{todoTask}</div>
        <div className={`${styles["item"]} col-4`}>{todoDate}</div>
        <div className={`${styles["item"]} col-2`}>
          <button
            type="button"
            className={`${styles["todoButton"]} btn btn-danger`}
            onClick={() => deleteItem(todoTask)}
          >
            <MdDeleteForever />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
