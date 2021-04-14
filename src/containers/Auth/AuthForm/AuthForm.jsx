import React from "react";
import style from "./AuthForm.module.scss";
import Button from "../../../components/UI/Button/Button";
import {Formik, Form} from 'formik'
import Input from "../../../components/UI/Input/Input";
import {authValidate} from "../../../helpers/validate";

const AuthForm = ({loginHandler, registerHandler}) => {
    const onLoginHandler = (isValid, dirty, values) => {
        if (isValid && dirty) {
            loginHandler(values);
        }
    }
    const onRegisterHandler = (isValid, dirty, values) => {
        if (isValid && dirty) {
            registerHandler(values);
        }
    }

    return (
        <div className={style.authForm}>
            <Formik
                initialValues={{email: "", password: ""}}
                validate={authValidate}
                onSubmit={() => {
                }}
            >
                {({values, isValid, dirty}) => (
                    <Form>
                        <Input id="email" name="email" label="Email" type="email"/>
                        <Input id="password" name="password" label="Password" type="password"/>

                        <Button type="success" onClick={() => onLoginHandler(isValid, dirty, values)}>Войти
                        </Button>
                        <Button type="primary" onClick={() => onRegisterHandler(isValid, dirty, values)}>
                            Зарегистрироваться
                        </Button>
                    </Form>
                )}
            </Formik>
        </div>
    );
}
export default AuthForm;