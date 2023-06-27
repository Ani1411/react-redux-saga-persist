import { GET_TASK_FAILURE, GET_TASK_REQUEST, GET_TASK_SUCCESS } from "./actionTypes"

const initialState = {
    isloading: false,
    message: 'asdfghjklqwertyui',
    data: []
}


const TaskReducer = (state = initialState, action) => {
    if (action.type === GET_TASK_REQUEST) {
        state = {
            ...state,
            isloading: true
        }
    }
    else if (action.type === GET_TASK_SUCCESS) {
        state = {
            ...state,
            data: action.payload.data,
            message: action.payload.msg,
            isloading: false
        }
    }
    else if (action.type === GET_TASK_FAILURE) {
        state = {
            ...state,
            message: action.payload,
            isloading: false
        }
    }
    return state
}


export default TaskReducer