import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./userActionType";

import axios from "axios"

export const fetchUserRequest = () => {
    return {
        type: FETCH_USER_REQUEST
    };
};

export const fetchUserSuccess = users => {
    return {
        type: FETCH_USER_SUCCESS,
        payload: users
    };
};

export const fetchUserFailure = error => {
    return {
        type: FETCH_USER_FAILURE,
        payload: error
    };
};

export const fetchUser = () => {
    return function (dispatch) {
        dispatch(fetchUserRequest());
        axios
            .get('https://jsonplaceholder.typicode.com/users/')
            .then(response => {
                const users = response.data;
                dispatch(fetchUserSuccess(users));
            })
            .catch(error => {
                dispatch(fetchUserFailure(error.message));
            });
    };
};