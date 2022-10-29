import { LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT, SET_MESSAGE } from "./types";

import AuthService from "../services/auth.service";

export const login = (data) => (dispatch) => {
    return AuthService.login(data).then(res => {
        if(res.data.msgCode == "A11") {
            dispatch({
                type: LOGIN_FAIL,
                payload: { user: null }
            })
            dispatch({
                type: SET_MESSAGE,
                payload: {message: res.data}
            })
            return Promise.reject();
        } else {
            dispatch({
                type: LOGIN_SUCCESS,
                payload: { user: res.data, currentUser: res.currentUser }
            })
            return Promise.resolve();
        }
    }, error => {
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();

        dispatch({
            type: LOGIN_FAIL
        })

        dispatch({
            type: SET_MESSAGE,
            payload: message
        })

        return Promise.reject();
    });
}

export const logout = () => (dispatch) => {
    AuthService.logout();

    dispatch({
        type: LOGOUT,
    })
}
