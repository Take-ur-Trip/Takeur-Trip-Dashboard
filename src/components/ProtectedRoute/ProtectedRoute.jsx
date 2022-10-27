import { useContext } from "react";
import { Navigate } from "react-router-dom"
import { UserContext } from "../../context/UserContext";

export const ProtectedRoute = ({ children }) => {
    const { user, isLoading } = useContext(UserContext);
    console.log(user)

    if(isLoading) {
        return "Loading..."
    }

    if(user) {
        return children;
    } else {
        return <Navigate to="/login" replace/>
    }

}