export enum ActionsType {
    ADD = "ADD",
    DONE = "DONE",
    DELETE = "DELETE",
    IMPORTANT = "IMPORTANT",
    ALL_FILTER = "ALL_FILTER",
    DONE_FILTER = "DONE_FILTER"
}

export interface TodoAdd {
    type: ActionsType.ADD
    payload: string
}

export interface TodoDone {
    type: ActionsType.DONE
    payload: number
}

export interface TodoImportant {
    type: ActionsType.IMPORTANT
    payload: number
}

export interface TodoDelete {
    type: ActionsType.DELETE
    payload: number
}

export interface AllFilter {
    type: ActionsType.ALL_FILTER
}

export interface DoneFilter {
    type: ActionsType.DONE_FILTER
}

export interface TodoList {
    todos: InTodoList[]
    filter: number
}

export interface InTodoList {
    id: number
    title: string
    isDone: boolean
    isImportant: boolean
}

export type Actions = TodoAdd | TodoDone | TodoImportant | TodoDelete | AllFilter | DoneFilter