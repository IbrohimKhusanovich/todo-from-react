import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import React, { useState,useEffect } from "react";
import TodoList from "./components/ToDo/ToDoList";

function App() {
  const [inputText, setInputText, todo] = useState("");
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  useEffect(()=>{
   filterHandler();
  },[todos,status])
  const filterHandler=()=>{
  switch(status){
    case 'completed':
      setFilteredTodos(todos.filter(todo =>todo.completed===true));
      break;
      case 'uncomplited':
        setFilteredTodos(todos.filter(todo =>todo.completed === false));
        break;
        default:setFilteredTodos(todos);
        break;
  }
}
  return (
    <>
      <Navbar />
      <TodoList
        inputText={inputText}
        todo={todo}
        setInputText={setInputText}
        todos={todos}
        setTodos={setTodos}
        setStatus={setStatus}
        filteredTodos={filteredTodos}
      />
    </>
  );
}

export default App;
