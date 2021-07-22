import React from "react";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const ToDo = ({ text, completed, todos, setTodos, todo }) => {
  const deleteELem = () => {
    setTodos(todos.filter((el) => el.id !== todo.id));
  };
  const completeEl = () => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return {
            ...item,
            completed: !item.completed,
          };
        }

        return item;
      })
    );
  };
  let num = 1;
  return (
    <li className='list-child'>
      <div className='todo-text'>
        <p className='todo-num'>{num++}</p>
        <p className={completed ? "check" : "val"}>{text}</p>
      </div>
      <div className='btns-list'>
        <input
          value={todo.completed}
          type='checkbox'
          onClick={completeEl}
          className='todo-check'
        />
          <FontAwesomeIcon
            className='todo-delet'
            icon={faTrashAlt}
            onClick={deleteELem}
          />

        <FontAwesomeIcon className='todo-edit' icon={faEdit} />
      </div>
    </li>
  );
};
export default ToDo;
