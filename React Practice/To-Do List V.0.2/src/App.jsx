import AppHeading from "./components/AppHeading";
import FirstRow from "./components/FirstRow";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

// import styles from "./App.module.css";

function App() {
  // const intialtodoItems = [
  //   { task: "Buy Milk", dueDate: "01/01/2024" },
  //   { task: "Go To College", dueDate: "01/01/2024" },
  //   { task: "Return From College", dueDate: "01/01/2024" },
  // ];

  const [todoItems, setTodoItems] = useState([]);

  const onClickNewItem = (todoItem, todoDate) => {
    let newTodo = [...todoItems, { task: todoItem, dueDate: todoDate }];
    setTodoItems(newTodo);
  };

  const onClickDelete = (todoTask) => {
    let newTodoTask = todoItems.filter((item) => {
      return item.task !== todoTask;
    });
    setTodoItems(newTodoTask);
  };

  return (
    <center className="To-do-container">
      {/*       self closing tag */}
      <AppHeading />
      <FirstRow onAddButtonClick={onClickNewItem}></FirstRow>
      {todoItems.length == 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems
        todoItems={todoItems}
        onClickbutton={onClickDelete}
      ></TodoItems>
    </center>
  );
}

export default App;
