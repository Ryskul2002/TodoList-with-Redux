// External dependencies
import React from 'react';

// Local dependencies
import {State} from "../../redux";
import './style.css'
import {useSelector} from "react-redux";

const Header = () => {

    const todo = useSelector((state:State) => state.bank?.todos)

    return (
        <div className="header">
            <h2 className="header__title">Todo List</h2>
            <p className="header__amount">amount your task {todo?.length} </p>
        </div>
    );
};

export default Header;