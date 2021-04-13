import style from "./AuthForm.module.scss";
import Button from "../../../components/UI/Button/Button";
import React, {useState} from "react";
import renderInput from "../../../helpers/renderInput";

const AuthForm = ({formik, loginHandler, registerHandler})=> {

    const [formControl] = useState({
        email:{
            label:"Email",
            id :"email",
            name:"email",
            type:"email" ,
        },
        password:{
            label:"Password",
            id :"password",
            name:"password",
            type:"password" ,
        }
    });

    return (
        <form className={style.authForm} onSubmit={formik.handleSubmit}>
            {renderInput(formik, formControl)}
            <Button
                type="success"
                onClick={loginHandler}
            >
                Войти
            </Button>
            <Button
                type="primary"
                onClick={registerHandler}
            >
                Зарегистрироваться
            </Button>
        </form>
    );
}
export default AuthForm;