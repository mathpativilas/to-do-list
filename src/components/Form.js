import React from "react";

const Form = ({ setInputText, setTodos, todos, inputText }) => {
  const inputTexthandler = (e) => {
    setInputText(e.target.value);
  };

  const SubmitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
      ...todos,
      {
        text: inputText,
        completed: false,
        id: Math.random() * 100,
      },
    ]);
    setInputText("");
  };

  return (
    <form>
      <input
        type="text"
        value={inputText}
        className="todo-input"
        onChange={inputTexthandler}
      />
      <button className="todo-button" type="submit" onClick={SubmitTodoHandler}>
        <i className="fas fa-plus-square"></i>
      </button>
      <div className="select">
        <select name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
