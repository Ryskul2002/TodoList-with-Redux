// External dependencies
import React, { useState } from "react";
import { useSelector } from "react-redux";

//Local depedecies
import "./AddTodo.css";
import { actionCreators, State, StateDispatch } from "../../redux";
import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

export default function AddTodo() {
  const { todos } = useSelector((state: State) => state.bank);
  const dispatch = useDispatch<StateDispatch>();
  const [isInput, setInput] = useState<string>("");
  const { addItem } = bindActionCreators(actionCreators, dispatch)

  const inputHandlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  return (
    <div
      className="addTodo"
    >
      <input
        value={isInput}
        onChange={inputHandlerChange}
        className="addTodo__input"
        type="text"
        placeholder="What you need to be done"
      />
      <button className="addTodo__btn" type="button" onClick={()=> addItem(isInput)}>
        Add todo
      </button>
    </div>
  );
}
