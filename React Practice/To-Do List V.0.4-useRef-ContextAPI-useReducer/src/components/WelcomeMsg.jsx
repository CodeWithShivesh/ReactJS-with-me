import { useContext } from "react";
import Styles from "../components/WelcomeMsg.module.css";
import { TodoItemsContext } from "../store/todo-item-store";

const WelcomeMsg = () => {
  const { todoItems } = useContext(TodoItemsContext);

  return (
    todoItems.length === 0 && (
      <p className={Styles.WelcomeMsg}>Welcome to Todo App</p>
    )
  );
};

export default WelcomeMsg;
