// External dependencies
import {Dispatch} from 'redux'

// Local dependencies
import {Actions, ActionsType} from '../actions'

export const addTask = (title: string) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({type: ActionsType.ADD, payload: title})
    }
}

export const deleteTask = (id: number) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({type: ActionsType.DELETE, payload: id})
    }
}

export const important = (id: number) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({type: ActionsType.IMPORTANT, payload: id})
    }
}

export const isDone = (id: number) => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({type: ActionsType.DONE, payload: id})
    }
}

export const allFilter = () => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({type: ActionsType.ALL_FILTER})
    }
}

export const doneFilter = () => {
    return (dispatch: Dispatch<Actions>) => {
        dispatch({type: ActionsType.DONE_FILTER})
    }
}