import AppHeading from "./components/AppHeading";
import FirstRow from "./components/FirstRow";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useState } from "react";
import WelcomeMsg from "./components/WelcomeMsg";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const onClickNewItem = (todoItem, todoDate) => {
    setTodoItems((currValue) => [
      ...currValue,
      { task: todoItem, dueDate: todoDate },
    ]);
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
      {todoItems.length === 0 && <WelcomeMsg></WelcomeMsg>}
      <TodoItems
        todoItems={todoItems}
        onClickbutton={onClickDelete}
      ></TodoItems>
    </center>
  );
}

export default App;
