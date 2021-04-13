import React from "react";
import style from "./Auth.module.scss";
import {useDispatch} from "react-redux";
import {login} from "../../redux/actions/auth";
import {useFormik} from "formik";
import AuthForm from "./AuthForm/AuthForm";
import validate from "../../helpers/validate";

const Auth = props => {
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: ""
        },
        validate,
        onSubmit: () => null,
    });

    const loginHandler = () => {
        dispatch(login(
            formik.values.email,
            formik.values.password,
            true
        ));
    }
    const registerHandler = () => {
        dispatch(login(
            formik.values.email,
            formik.values.password,
        ));
    }

    return (
        <div className={style.Auth}>
            <div>
                <h1 className="mainTitle">Авторизация</h1>
                <AuthForm
                    loginHandler={loginHandler}
                    registerHandler={registerHandler}
                    formik={formik}
                />
            </div>
        </div>
    );
}

export default Auth;