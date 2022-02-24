import axios, { AxiosResponse } from "axios"
import { allowedNodeEnvironmentFlags } from "process";
import { call, put } from "redux-saga/effects";
import { fetchTodoSuccess } from "./action";
import { ITodo } from "./types"

const getTodos = () => (axios.get<ITodo>('https://jsonplaceholder.typicode.com/todos'));

//worker saga
function* fetchTodoSaga() {
    try {
        const response: AxiosResponse<ITodo[]> = yield call(getTodos);
        yield put(fetchTodoSuccess({todos: response.data}))
    } catch (e:any) {
        console.log(e)
    }
    
}

//watcher saga
function* todoSaga() {
    yield all([takeLatest])
}