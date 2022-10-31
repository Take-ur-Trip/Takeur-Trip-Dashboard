import { BAN_USER, FETCH_USERS, SET_MESSAGE, UNBAN_USER } from "./types";
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

export const banUser = (id, masterPassword) => dispatch => {
    return UserService.banUser(id, masterPassword).then((res) => {
        if(res.msgCode && res.msgCode == 'A11') {
            console.log(res)
            return Promise.reject();
        } else {
            return UserService.fetchUser().then(res => {
                dispatch({
                    type: BAN_USER,
                    payload: res.users
                })
                return Promise.resolve();
            }).catch(error => {
                return Promise.reject();
            })
        }
    }).catch(error => {
        return Promise.reject();
    })
}
export const unbanUser = (id, masterPassword) => dispatch => {
    return UserService.unbanUser(id, masterPassword).then((res) => {
        if(res.msgCode && res.msgCode == 'A11') {
            console.log(res)
            return Promise.reject();
        } else {
            return UserService.fetchUser().then(res => {
                dispatch({
                    type: UNBAN_USER,
                    payload: res.users
                })
                return Promise.resolve();
            }).catch(error => {
                return Promise.reject();
            })
        }
    }).catch(error => {
        return Promise.reject();
    })
}