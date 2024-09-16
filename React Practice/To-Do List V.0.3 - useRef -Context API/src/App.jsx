import AppHeading from "./components/AppHeading";
import FirstRow from "./components/FirstRow";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./store/todo-item-store";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addNewItem = (todoItem, todoDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { task: todoItem, dueDate: todoDate },
    ]);
  };

  const deleteItem = (todoTask) => {
    let newTodoTask = todoItems.filter((item) => {
      return item.task !== todoTask;
    });
    setTodoItems(newTodoTask);
  };

  return (
    <TodoItemsContext.Provider
      value={{
        todoItems: todoItems,
        addNewItem: addNewItem,
        deleteItem: deleteItem,
      }}
    >
      <center className="To-do-container">
        <AppHeading />
        <FirstRow />
        <WelcomeMsg />
        <TodoItems />
      </center>
    </TodoItemsContext.Provider>
  );
}

export default App;
