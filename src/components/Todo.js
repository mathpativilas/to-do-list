import React from "react";

const Todo = ({ text, id, item, todos, setTodos }) => {
  const deleteHandler = () => {
    setTodos(todos.filter((el) => el.id !== item.id));
  };

  const completehandler = () => {
    setTodos(
      todos.map((el) => {
        if (el.id === item.id) {
          return {
            ...el,
            completed: !el.completed,
          };
        }

        return el;
      })
    );
  };

  return (
    <div className="todo">
      <li className={`todo-item  ${item.completed ? "completed" : ""} `}>
        {text}
      </li>
      <button className="complete-btn" onClick={completehandler}>
        <i className=" fas fa-check"></i>
      </button>
      <button className="trash-btn" onClick={deleteHandler}>
        <i className=" fas fa-trash"></i>
      </button>
    </div>
  );
};

export default Todo;
