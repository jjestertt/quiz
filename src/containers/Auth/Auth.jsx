import React, {useEffect} from "react";
import style from "./Auth.module.scss";
import {useDispatch} from "react-redux";
import {login} from "../../redux/actions/auth";
import AuthForm from "./AuthForm/AuthForm";
import {fetchQuizError} from "../../redux/actions/actions";


const Auth = () => {
    const dispatch = useDispatch();
    const loginHandler = (values) => {
        dispatch(login(
            values.email,
            values.password,
            true
        ));
    }
    const registerHandler = (values) => {
        dispatch(login(
            values.email,
            values.password,
        ));
    }
    useEffect(
        () => {
            return (() => {
                dispatch(fetchQuizError(null));
            });
        }
    );

    return (
        <div className={style.Auth}>
            <div>
                <h1 className="mainTitle">Авторизация</h1>
                <AuthForm
                    loginHandler={loginHandler}
                    registerHandler={registerHandler}
                />
            </div>
        </div>
    );
}

export default Auth;