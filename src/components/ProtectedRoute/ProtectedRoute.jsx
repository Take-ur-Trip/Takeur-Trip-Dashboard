import { connect } from "react-redux";
import { Navigate, Route, } from "react-router-dom";

const ProtectedRoute = ({children, currentUser}) => {
    if(currentUser) {
        return children;
    } else {
        return <Navigate to="/login" replace/>
    }

}

const mapStateToProps = (state) => {
    return {
        currentUser: state.auth.user || state.auth.currentUser
    }
}

export default connect(mapStateToProps)(ProtectedRoute);