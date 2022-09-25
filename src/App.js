import React, { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import TodoList from "./components/TodoList";

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filtered, Setfilterd] = useState([]);

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
    }
  };

  useEffect(() => {
    filteredHandler();
  }, [todos, status]);

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
