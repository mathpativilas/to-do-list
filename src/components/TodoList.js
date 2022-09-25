import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, setTodos, filtered }) => {
  return (
    <div className="todo-container">
      <ul className="todo-list">
        {filtered.map((item) => (
          <Todo
            key={item.id}
            id={item.id}
            text={item.text}
            item={item}
            todos={todos}
            setTodos={setTodos}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
