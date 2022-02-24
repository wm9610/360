import { FETCH_TODO_FAILURE, FETCH_TODO_REQUEST, FETCH_TODO_SUCCESS } from "./actionTypes"
import { fetchTodoFailure, fetchTodoRequest, fetchTodoSuccess } from './types'

export const fetchTodoRequest = (): fetchTodoRequest => ({
    type: FETCH_TODO_REQUEST
})

export const fetchTodoSuccess = (): fetchTodoSuccess => ({
    type: FETCH_TODO_SUCCESS
})

export const fetchTodoFailure = (): fetchTodoFailure => ({
    type: FETCH_TODO_FAILURE
})