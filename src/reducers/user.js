import { BAN_USER, FETCH_USERS, UNBAN_USER } from "../actions/types";

const initialState = {
    isLoading: true,
    fetchedUsers: [null]
}

export default (state = initialState, action) => {
    const { type, payload } = action;

    switch(type) {
        case FETCH_USERS:
            return {
                ...state,
                isLoading: false,
                fetchedUsers: payload
            }
        case BAN_USER:
            return {
                ...state,
                isLoading: false,
                fetchedUsers: payload
            }
        case UNBAN_USER:
            return {
                ...state,
                isLoading: false,
                fetchedUsers: payload
            }
        default:
            return state;
    }
}