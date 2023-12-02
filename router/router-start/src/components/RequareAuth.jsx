import { useContext } from "react";
import { commonContext } from "../context/common-mode";
import { Navigate, Outlet } from "react-router-dom";

export function RequareAuth() {

    const { token } = useContext(commonContext);
    return (
        token !== null ? <Outlet />
            : <Navigate to='/login' />
    )
}
