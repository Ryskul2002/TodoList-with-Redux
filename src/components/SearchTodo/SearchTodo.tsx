// External dependencies
import React, {useState} from 'react';

// Local dependencies
import './style.css'
import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import {actionCreators} from '../../redux'

const SearchTodo = () => {

    const dispatch = useDispatch()

    const { doneFilter, allFilter } = bindActionCreators(actionCreators, dispatch)

    return (
        <div className="search">
            <input placeholder="search todo" className="search__input" type="text"/>
            <div className="search__btns">
                <button onClick={allFilter} className="search__btn btn btn-info" type="button">All</button>
                <button className="search__btn btn btn-success" type="button">Active</button>
                <button onClick={doneFilter} className="search__btn btn btn-dark" type="button">Done</button>
            </div>
        </div>
    );
};

export default SearchTodo;