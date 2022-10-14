// External dependencies
import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";

// Local dependencies
import {actionCreators} from "../../redux";
import './style.css'

const AddTodo = () => {

    const dispatch = useDispatch()

    const {addTask} = bindActionCreators(actionCreators, dispatch)
    const [isText, setText] = useState<string>('')

    const inputHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setText(e.target.value)
    }

    const submitHandler = (e: React.FormEvent): void => {
        e.preventDefault()
        addTask(isText)
        setText('')
    }

    return (
        <form className="todoList" onSubmit={submitHandler}>
            <input minLength={3}
                   maxLength={32}
                   required
                   value={isText}
                   onChange={inputHandler}
                   placeholder="What need to be done"
                   type="text"
                   className="todoList__input"/>
            <button type="submit" className="todoList__btn">Add todo</button>
        </form>
    );
};

export default AddTodo;