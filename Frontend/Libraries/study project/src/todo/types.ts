import { FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS } from "./actionTypes";

export interface ITodo {
    userId: number,
    id: number,
    title: string,
    isCompleted: boolean
}

export interface ITodoState {
    pending: boolean,
    todos: ITodo[],
    error: string | null
  }

interface Ipayload {
    todo: ITodo[];
    error: string
}

export type fetchTodoRequest = {
    type: typeof FETCH_TODO_REQUEST,
    payload: Ipayload
};

export type fetchTodoSuccess = {
    type: typeof FETCH_TODO_SUCCESS,
    payload: Ipayload
};

export type fetchTodoFailure = {
    type: typeof FETCH_TODO_FAILURE,
    payload: Ipayload
};

export type TodoActions = fetchTodoRequest | fetchTodoSuccess | fetchTodoFailure