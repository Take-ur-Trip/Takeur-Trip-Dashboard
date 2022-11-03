import { TOGGLE_DARKMODE } from "./types";

export const toggleDarkmode = () => dispatch => {
    if(localStorage.getItem("darkMode")) {
        localStorage.removeItem("darkMode");
    } else {
        localStorage.setItem("darkMode", true);
    }
    
    dispatch({
        type: TOGGLE_DARKMODE,
    })
}