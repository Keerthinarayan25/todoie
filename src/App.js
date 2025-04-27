import React from "react";
import Header from "./Components/Header";
import TodoItem from "./Components/TodoItem";
import Button from "./Components/Button";
import "./style.css";
function App() {
  return (
    <div className="todo-container">
      <Header />
      <TodoItem completed={true} text="code"/>
      <TodoItem text="eat"/>
      <TodoItem text="drink"/>
      <TodoItem text="sleep"/>
      <Button/>
    </div>
  );
}

export default App;
