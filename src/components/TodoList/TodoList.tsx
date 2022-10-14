// External dependencies
import React from 'react';
import {useDispatch, useSelector} from "react-redux";

// Local dependencies
import {State} from '../../redux'
import './style.css'
import {bindActionCreators} from "redux";
import {actionCreators} from "../../redux";

const TodoList = () => {

    const dispatch = useDispatch()

    const todos = useSelector((state: State) => state.bank?.todos)
    const filter = useSelector((state: State) => state.bank?.filter)
    const {deleteTask, important, isDone} = bindActionCreators(actionCreators, dispatch)
    console.log(filter)

    return (
        <ul className="list">
            {todos?.map((item)=> (
                <li key={item.id} className="list__item">
                    <p className={`list__title ${!item.isDone ? (item.isImportant ? 'active' : '') : 'active-line'}`}>{item.title}</p>
                    <div className="list__btns">
                        <button onClick={() => isDone(item.id)} className={`${item.isDone ? 'list__btn btn btn-success' : ' list__btn btn btn-outline-success'}`} type="button">
                            <i className="fa-solid fa-check-double"></i>
                        </button>
                        <button onClick={()=> important(item.id)} className={`list__btn btn ${item.isImportant ? 'btn btn-warning' : 'btn-outline-warning'}`} type="button">
                            <i className="fa-solid fa-triangle-exclamation"></i>
                        </button>
                        <button onClick={() => deleteTask(item.id)} className="list__btn btn btn-outline-danger" type="button"><i className="fa-solid fa-eraser"></i></button>
                    </div>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;