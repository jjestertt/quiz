import React from "react";
import Button from "./../../components/UI/Button/Button";
import style from "./Auth.module.scss";
import Input from "../../components/UI/Input/Input";

class Auth extends React.Component {
    state = {
        formControls: {
            email: {
                value: "",
                type: "email",
                label: "Mail",
                errorMessage: "Введите правильно mail",
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true
                }
            },
            password: {
                value: "",
                type: "password",
                label: "Пароль",
                errorMessage: "Введите правильно пароль",
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength6: true
                }
            },
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
    }

    onChangeHandler = (e, controlName) =>{
        const formControls = {...this.state.formControls}
        formControls[controlName].value = e.target.value;
        this.setState(formControls);
    }

    inputRenderHandler = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    value={control.value}
                    onChange={(e) => {this.onChangeHandler(e, controlName)}}
                    type={control.type}
                    label={control.label}
                    errorMessage={control.errorMessage}
                    valid={control.valid}
                    touched={control.touched}
                    shouldValidate={!!control.validation}
                />
            );
        });
    }

    loginHandler = () => {
        console.log(this.state.formControls.email);
    }
    registerHandler = () => {
        console.log(this.state.formControls.password);
    }

    render() {
        return (
            <div className={style.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form className={style.authForm} onSubmit={this.submitHandler}>

                        {this.inputRenderHandler()}
                        {/*<Input label="Почта" type="email" />*/}
                        {/*<Input label="Пароль" type="password"/>*/}
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