import { FETCH_LOGS } from "./types";
import LoggerService from "../services/logger.service";

export const fetchLogs = () => dispatch => {
    return LoggerService.fetchLogs().then((res) => {
        if(res.logs.status == 200) {
            dispatch({
                type: FETCH_LOGS,
                payload: res.logs.data
            })
            return Promise.resolve();
        }

        return Promise.reject();
    }).catch(error => {
        console.log(error)
        return Promise.reject();
    })
}