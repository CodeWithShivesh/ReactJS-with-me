import TodoItem from "./TodoItem";

const TodoItems = ({ todoItems, onClickbutton }) => {
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem
          key={item.task}
          todoDate={item.dueDate}
          todoTask={item.task}
          onClickbutton={onClickbutton}
        ></TodoItem>
      ))}
    </div>
  );
};

export default TodoItems;
