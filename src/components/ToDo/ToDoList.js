import { faPlus, faSave } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ToDo from "./ToDo";
import "./ToDo.css";
import { currentTodo } from "./ToDo";
const TodoList = ({
  setInputText,
  todos,
  setTodos,
  todo,
  inputText,
  setStatus,
  filteredTodos
}) => {
  const inputTextHandler = (e) => {
    setInputText(e.target.value);
  };
  const submitTodoHandler = (e) => {
    if (inputText === "") return;
    else {
      e.preventDefault();
      setTodos([
        ...todos,
        { text: inputText, completed: false, id: Math.random() * 1000 },
      ]);
      setInputText("");
    }
  };
  const statusHandler = (e) => {
    setStatus(e.target.value);
  };
const editSaveHandler=()=>{
  currentTodo.text=inputText
  document.querySelector(".edit-btn").classList.remove("d-flex");
  setInputText('')
  setTodos([...todos])
}
  return (
    <div>
      <div className='todo'>
        <div className='toform'>
          <div className='to-nav'>
            <input
              className='todo-inpt'
              type='text'
              placeholder='text kiritng'
              onChange={inputTextHandler}
              value={inputText}
            />
            <button onClick={submitTodoHandler} className='todo-btn'>
              <FontAwesomeIcon icon={faPlus} />
            </button>
            <button className='edit-btn'>
              <FontAwesomeIcon onClick={editSaveHandler} icon={faSave} />
            </button>
          </div>
          <select onChange={statusHandler} className='selects' name='dropdown'>
            <option value='all' selected>
              All
            </option>
            <option value='completed'>Completed</option>
            <option value='uncomplited'>Nocompleted</option>
          </select>
        </div>
        <div className='todo-list'>
          <ul className='list-father'>
            {filteredTodos.map((todo) => (
              <ToDo
                key={todo.id}
                text={todo.text}
                completed={todo.completed}
                todos={todos}
                setTodos={setTodos}
                todo={todo}
                inputText={inputText}
                setInputText={setInputText}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TodoList;
