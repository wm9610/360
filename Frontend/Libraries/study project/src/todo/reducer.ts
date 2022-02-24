import { FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS, FETCH_TODO_FAILURE } from "./actionTypes";
import { ITodoState, TodoActions } from "./types";

const initialState: ITodoState = {
    pending: false,
    todos: [],
    error: null
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state=initialState, action: TodoActions) => {
    switch(action.type) {
        case FETCH_TODO_REQUEST:
            return {
                ...state,
                pending: true
            };
        case FETCH_TODO_SUCCESS:
            return {
                ...state,
                todos: action.payload.todo,
                error: null
            };
        case FETCH_TODO_FAILURE:
            return {
                ...state,
                todos: [],
                error: action.payload.error
            };
    }
}
