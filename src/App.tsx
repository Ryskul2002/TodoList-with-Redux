// External depedencies
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import React from 'react';

// Local depedecies
import Header from './components/Header/Header';
import Search from './components/search/Search';
import TodoList from './components/todoList/TodoList';
import AddTodo from './components/addTodo/AddTodo';
import './style.css'

function App() {
  return (
    <div className="App">
          <div className='todo-container'>
            <Header/>
            <Search/>
            <TodoList/>
            <AddTodo/>
          </div>
    </div>
  );
}

export default App;
