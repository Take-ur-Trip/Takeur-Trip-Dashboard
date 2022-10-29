import { FETCH_USERS, SET_MESSAGE } from "./types";
import UserService from "../services/user.service";
import config from "../config/config.json";

export const fetchUsers = id => dispatch => {
    return UserService.fetchUser(id).then((res) => {
        if(res.users) {
            dispatch({
                type: FETCH_USERS,
                payload: res.users
            })

            dispatch({
                type: SET_MESSAGE,
                payload: config.locales.fetchUsersSuccessful
            })

            return Promise.resolve();
        }
        return Promise.reject();
    }, (error) => {
        dispatch({
            type: FETCH_USERS,
            payload: []
        })

        dispatch({
            type: SET_MESSAGE,
            payload: error
        })
        return Promise.reject();
    })
}