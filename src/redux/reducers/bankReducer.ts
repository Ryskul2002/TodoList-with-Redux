import {Actions, ActionsType, TodoList} from '../actions'

const initialState: TodoList = {
    todos: [],
    filter: 0
}

const reducers = (state = initialState, action: Actions) => {
    switch (action.type) {
        case ActionsType.ADD :
            return {
                ...state,
                todos: [...state.todos,{
                    id: Math.round(Math.random() * 1000),
                    title: action.payload,
                    isDone: false,
                    isImportant: false
                }]
            }
        case ActionsType.DONE :
            return {
                ...state,
                todos: state.todos.map((item)=> {
                    if (item.id === action.payload) {
                        return {...item,isDone: !item.isDone, isImportant: false}
                    } else {
                        return item
                    }
                })
            }
        case ActionsType.IMPORTANT :
            return {
                ...state,
                todos: state.todos.map((item)=> {
                    if (item.id === action.payload && item.isDone === false) {
                        return {...item, isImportant: !item.isImportant}
                    } else {
                        return item
                    }
                })
            }
        case ActionsType.DELETE :
            return {
                ...state,
                todos: state.todos.filter((item)=> item.id !== action.payload)
            }
            // this is Filter
        case ActionsType.ALL_FILTER :
            return {
                ...state,
                filter: state.filter = 0
            }
        case ActionsType.DONE_FILTER :
            return {
                ...state,
                filter: state.filter = 2
            }
        default:
            return state
    }
}

export default reducers