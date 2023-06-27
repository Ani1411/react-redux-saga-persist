import { all, call, fork, put, takeEvery } from "redux-saga/effects"
import { getTaskFail, getTaskSuccess } from "./actions";
import { GET_TASK_REQUEST } from "./actionTypes";
import { getTasksAPI } from "./api";

export function* helloSaga() {
    // console.log('Hello Sagas!')
    yield 'ex'
}

// const delay = (ms) => new Promise(res => setTimeout(res, ms))



function* addTaskAsync() {
    try {
        const response = yield call(getTasksAPI);
        // console.log('async', response)
        yield put(getTaskSuccess(response));
    } catch (error) {
        yield put(getTaskFail(error.response));
    }
}

function* watchAddTaskAsync() {
    yield takeEvery(GET_TASK_REQUEST, addTaskAsync)
}


export default function* rootSaga() {
    yield all([
        fork(watchAddTaskAsync),
        fork(helloSaga),
    ])
}