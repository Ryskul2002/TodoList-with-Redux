// External dependencies
import React from 'react';
import 'bootswatch/dist/sketchy/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/fontawesome.min'

// Local dependencies
import Header from "./components/Header/Header";
import SearchTodo from "./components/SearchTodo/SearchTodo";
import TodoList from "./components/TodoList/TodoList";
import AddTodo from "./components/AddTodo/AddTodo";
import './style.css'

const App: React.FC = () => {

  return (
    <div className="App">
        <div className="container">
            <div className="task">
                <Header/>
                <SearchTodo/>
                <TodoList/>
                <AddTodo/>
            </div>
        </div>
    </div>
  );
}

export default App;
