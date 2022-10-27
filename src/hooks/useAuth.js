import axios from "axios";
import {decode} from "jsonwebtoken";
import config from '../config/config.json';
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const useAuth = () => {
    const navigate = useNavigate();
    const { setUser } = useContext(UserContext);

    const isLoggedIn = () => {
        try {
            const token = localStorage.getItem('token');
            const user = localStorage.getItem('user');
            if(!(token && user)) {
                return false;
            }
            return true;
        
        } catch(err) {
            return config.locales.authError
        }
    }

    const logIn = async (data) => {
        try {
            const authReq = await axios.post('http://localhost:8080/users/auth', data);
            if(authReq.data.msgCode == 'A21') {
                if(authReq.data.token) {
                    localStorage.setItem('token', authReq.data.token);
                    const decoded = decode(localStorage.getItem('token'));
                    if(decoded) {
                        localStorage.setItem('user', decoded);
                    }
                    //Set context
                    const user = localStorage.getItem('user');
                    setUser(user);
                    navigate('../', {replace: true});
                    return {...config.locales.authSuccessful, ...{user}};
                }
            } else {
                return config.locales.authError;
            }
        } catch(err) {
            return config.locales.authError
        }
    }

    const logOut = () => {
        try {
            if(isLoggedIn) {
                    localStorage.removeItem('user');
                    localStorage.removeItem('token');
            }
            setUser(null);
            navigate('/login');
        } catch(err) {
            return config.locales.authError
        }
    }
    return {
        isLoggedIn,
        logIn,
        logOut
    }
}

export default useAuth;