import { Dispatch } from "redux";
import { TodoList, TodoAction, TodoTaskTypes } from "../actions/actions";

export const initinalState: TodoList = {
  todos: [
    {
      id: Math.round(Math.random() * 1000),
      title: "buy dreed",
      isChange: false,
      isImportant: false,
      isDelete: false,
    },
  ],
};

const reducers = (state = initinalState, action: TodoAction) => {
  switch (action.type) {
    case TodoTaskTypes.ADD:
      return {
        ...state,
        todos: [...state.todos,
          {
            id: Math.round(Math.random() * 1000),
            title: action.payload,
            isChange: false,
            isImportant: false,
            isDelete: false
          },
        ],
      };
    default:
      return state;
  }
};

export default reducers;
