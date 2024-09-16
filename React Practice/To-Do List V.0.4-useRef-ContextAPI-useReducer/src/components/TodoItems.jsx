import { useContext } from "react";
import { TodoItemsContext } from "../store/todo-item-store";
import TodoItem from "./TodoItem";

const TodoItems = () => {
  const contextObj = useContext(TodoItemsContext);
  const todoItems = contextObj.todoItems;

  // console.log(todoItemsfromContext);

  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem
          key={item.task}
          todoDate={item.dueDate}
          todoTask={item.task}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
