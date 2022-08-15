import { TodoAction, TodoTaskTypes } from "../actions/actions";
import { Dispatch } from "redux";

export const addItem = (title: string) => {
  return (dispatch: Dispatch<TodoAction>) => {
    dispatch({ type: TodoTaskTypes.ADD, payload: title });
  };
};

export const deleteItem = (id: number) => {
  return (dispatch: Dispatch<TodoAction>) => {
    dispatch({ type: TodoTaskTypes.DELETE, payload: id });
  };
};
