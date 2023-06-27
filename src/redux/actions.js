import {
    GET_TASK_REQUEST
    , GET_TASK_SUCCESS
    , GET_TASK_FAILURE
} from "./actionTypes";

export const getTaskRequest = () => {
    // console.log('task action')
    return {
        type: GET_TASK_REQUEST,
    };
};

export const getTaskSuccess = (payload) => {
    // console.log('success:', payload)
    return {
        type: GET_TASK_SUCCESS,
        payload: payload,
    };
};

export const getTaskFail = (payload) => {
    return {
        type: GET_TASK_FAILURE,
        payload: payload,
    };
};
