// External dependecies
import React from "react";
import { useSelector } from "react-redux";
import { State } from "../../redux";

// Local dependecies
import "./TodoList.css";

export default function TodoList() {
  const { todos } = useSelector((state: State) => state.bank);

  return (
    <ul className="todoList">
      {todos.map((item) => (
        <li key={item.id} className="todoList__task">
          <p className="todoList__name">{item.title}</p>
          <div className="todoList__btns">
            <button className="todoList__btn" type="button">
              Done
            </button>
            <button className="todoList__btn" type="button">
              Important
            </button>
            <button className="todoList__btn" type="button">
              Delete
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
}
