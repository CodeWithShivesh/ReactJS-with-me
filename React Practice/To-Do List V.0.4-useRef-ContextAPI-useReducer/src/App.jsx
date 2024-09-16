import AppHeading from "./components/AppHeading";
import FirstRow from "./components/FirstRow";
import TodoItems from "./components/TodoItems";
import "./App.css";
import { useReducer } from "react";
import WelcomeMsg from "./components/WelcomeMsg";
import { TodoItemsContext } from "./store/todo-item-store";

const todoItemReducer = (initialState, Action) => {
  let newItem = initialState;
  if (Action.type == "ADD_ITEM") {
    newItem = [
      ...initialState,
      { task: Action.payload.todoItem, dueDate: Action.payload.todoDate },
    ];
  } else if (Action.type == "DELETE_ITEM") {
    newItem = initialState.filter((item) => {
      item.task !== Action.payload.todoTask;
    });
  }
  return newItem;
};

function App() {
  
  const [todoItems, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewItem = (todoItem, todoDate) => {
    const addItemAction = {
      type: "ADD_ITEM",
      payload: {
        todoItem,
        todoDate,
      },
    };
    dispatchTodoItems(addItemAction);
  };

  const deleteItem = (todoTask) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoTask,
      },
    };
    dispatchTodoItems(deleteItemAction);
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
