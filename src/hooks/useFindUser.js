import { useState, useEffect } from "react";
import axios from 'axios';

const useFindUser = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const userFetch = await axios.get(`http://localhost:8080/users/fetchByMail/${localStorage.getItem('user')}`, {
                headers: {
                    'Authorization' : localStorage.getItem('token')
                }
            });
            setUser(userFetch.data[0].email);
            setLoading(false);
        }
        fetchUser().catch(setLoading(false));
    }, [])

    return {
        user, isLoading
    }
}

export default useFindUser;
