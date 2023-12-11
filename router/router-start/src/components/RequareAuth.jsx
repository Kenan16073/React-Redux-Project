import { Navigate, Outlet } from "react-router-dom";
import { useSelector } from "react-redux";

export function RequareAuth() {

    const {token} = useSelector((state)=>state.login)

    return (
        token !== null ? <div className="max-w-screen-xl mx-auto"><Outlet /></div> 
            : <Navigate to='/login' />
    )
}
