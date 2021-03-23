import React from "react";
import Button from "./../../components/UI/Button/Button";
import style from "./Auth.module.scss";
import Input from "../../components/UI/Input/Input";

class Auth extends React.Component {
    submitHandler(e) {
        e.preventDefault();
    }

    loginHandler = () => {
        console.log('login');
    }
    registerHandler = () => {
        console.log('register');
    }

    render() {
        return (
            <div className={style.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form className={style.authForm} onSubmit={this.submitHandler}>
                        <Input label="Почта" type="email" />
                        <Input label="Пароль" type="password"/>
                        <Button
                            type="success"
                            onClick={this.loginHandler}
                        >
                            Войти
                        </Button>
                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                        >
                            Зарегистрироваться
                        </Button>
                    </form>
                </div>
            </div>
        );
    }
}

export default Auth;