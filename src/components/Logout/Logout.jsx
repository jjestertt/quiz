import {useEffect} from "react";
import {authLogout} from "../../redux/actions/auth";
import {Redirect} from "react-router-dom";
import {useDispatch} from "react-redux";

const Logout = props => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(authLogout());
    }, [dispatch])

    return (
        <Redirect to={"/"}/>
    )
}
export default Logout;