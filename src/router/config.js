
import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export const PrivateRoute = ({ }) => {
    const userData = useSelector(state => state.user)
    if (!userData.token) return <Navigate to='/login' />
    return <Outlet />;
};
export const PublicRoute = ({ restricted }) => {
    const userData = useSelector(state => state.user)
    if (userData.token && restricted) return <Navigate to="/" />;
    return <Outlet />
};
