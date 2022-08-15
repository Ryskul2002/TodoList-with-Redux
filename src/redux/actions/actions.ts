export enum TodoTaskTypes {
  ADD = "ADD",
  CHANGE = "CHANGE",
  IMPORTANT = "IMPORTANT",
  DELETE = "DELETE",
}

export interface TodoActionAdd {
  type: TodoTaskTypes.ADD;
  payload: string;
}

export interface TodoActionChange {
  type: TodoTaskTypes.CHANGE;
}

export interface TodoActionImportant {
  type: TodoTaskTypes.IMPORTANT;
  payload: number;
}

export interface TodoActionDelete {
  type: TodoTaskTypes.DELETE;
  payload: number
}

export interface TodoList {
  todos: InTodoList[];
}

export interface InTodoList {
  id?: number;
  title?: string;
  isChange?: boolean;
  isImportant?: boolean;
  isDelete?: boolean;
}

export type TodoAction =
  | TodoActionAdd
  | TodoActionChange
  | TodoActionImportant
  | TodoActionDelete;
