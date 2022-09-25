import React from "react";

const Form = ({ setInputText, setTodos, todos, inputText, setStatus }) => {
  const inputTexthandler = (e) => {
    setInputText(e.target.value);
  };

  const SubmitTodoHandler = (e) => {
    e.preventDefault();

    let empty = inputText.length > 0;

    if (empty) {
      setTodos([
        ...todos,
        {
          text: inputText,
          completed: false,
          id: Math.random() * 100,
        },
      ]);
    } else {
      return;
    }

    setInputText("");
  };

  const statusHandler = (e) => {
    setStatus(e.target.value);
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
        <select onChange={statusHandler} name="todos" className="filter-todo">
          <option value="all">All</option>
          <option value="completed">Completed</option>
          <option value="uncompleted">Uncompleted</option>
        </select>
      </div>
    </form>
  );
};

export default Form;
