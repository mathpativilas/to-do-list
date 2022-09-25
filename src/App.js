import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";






const getlocaldata = () => {
  let list = localStorage.getItem("todos");

  if (list) {
    return JSON.parse(localStorage.getItem("todos"));
  } else {
    return [];
  }
};

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState(getlocaldata());
  const [status, setStatus] = useState("all");
  const [filtered, Setfilterd] = useState([]);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    filteredHandler();

    // eslint-disable-next-line
  }, [todos, status]);

  const filteredHandler = () => {
    switch (status) {
      case "completed":
        Setfilterd(todos.filter((item) => item.completed === true));
        break;

      case "uncompleted":
        Setfilterd(todos.filter((item) => item.completed === false));
        break;

      default:
        Setfilterd(todos);
        break;
    }
  };

  // const getlocaltodos = () => {
  //   if (localStorage.getItem("todos") === null) {
  //     localStorage.setItem("todos", JSON.stringify([]));
  //   } else {
  //     let todolocal = JSON.parse(localStorage.getItem("todos"));
  //     setTodos(todolocal);
  //   }
  // };

  return (
    <div className="App">
      <header>
        <h1>Vilas Todo List </h1>
      </header>
      <Form
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        inputText={inputText}
        setStatus={setStatus}
      />
      <TodoList todos={todos} setTodos={setTodos} filtered={filtered} />
    </div>
  );
}

export default App;
