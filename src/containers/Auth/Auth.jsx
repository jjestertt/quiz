import React from "react";
import Button from "./../../components/UI/Button/Button";
import style from "./Auth.module.scss";
import Input from "../../components/UI/Input/Input";
import is from "is_js";
import axios from "axios";

class Auth extends React.Component {
    state = {
        isFormValid: false,
        formControls: {
            email: {
                value: "",
                type: "email",
                label: "Email",
                errorMessage: "",
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    email: true,
                    maxLength: 25
                }
            },
            password: {
                value: "",
                type: "password",
                label: "Пароль",
                errorMessage: "",
                valid: false,
                touched: false,
                validation: {
                    required: true,
                    minLength: 6,
                    maxLength: 50
                }
            },
        }
    }

    submitHandler = (e) => {
        e.preventDefault();
    }


    validateControl = (value, validation) => {
        if (!validation) {
            return true;
        }

        let isValid = true;

        if (validation.required) {
            if (value.trim() !== "") {
                isValid = true;
            } else {
                return {isValid: false, errorMessage: "Поле не должно быть пустым"}
            }
        }

        if (validation.email) {
            if (is.email(value)) {
                isValid = true;
            } else {
                return {isValid: false, errorMessage: "Введите корректный Email"}
            }
        }

        if (validation.minLength) {
            if (value.trim().length >= validation.minLength) {
                isValid = true;
            } else {
                return {isValid: false, errorMessage: `Минимальная длинна ${validation.minLength} символов`}
            }
        }

        if (validation.maxLength) {
            if (value.trim().length < validation.maxLength) {
                isValid = true;
            } else {
                return {isValid: false, errorMessage: `Максимальная длинна ${validation.maxLength} символов`}
            }
        }

        return {isValid};
    }

    onChangeHandler = (e, controlName) => {
        const formControls = {...this.state.formControls}
        const control = {...formControls[controlName]}
        control.value = e.target.value;
        control.touched = true;

        let validateControl = this.validateControl(control.value, control.validation);
        control.valid = validateControl.isValid;
        control.errorMessage = validateControl.errorMessage;

        formControls[controlName] = control;

        let isFormValid = true;

        Object.keys(formControls).forEach(item => {
            isFormValid = formControls[item].valid && isFormValid;
        });

        this.setState({formControls, isFormValid});
    }

    inputRenderHandler = () => {
        return Object.keys(this.state.formControls).map((controlName, index) => {
            const control = this.state.formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    value={control.value}
                    onChange={(e) => {
                        this.onChangeHandler(e, controlName)
                    }}
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

    loginHandler = async () => {
        const formData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        try {
            const response = await axios
                .post(
                    "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBw1voB5XeccAUeeQByIgJKRRhcjoNOR3I",
                    formData
                );
            console.log(response);
        } catch (e) {
            console.error(e);
        }
    }
    registerHandler = async () => {
        const formData = {
            email: this.state.formControls.email.value,
            password: this.state.formControls.password.value,
            returnSecureToken: true
        }
        try {
            const response = await axios
                .post(
                    "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBw1voB5XeccAUeeQByIgJKRRhcjoNOR3I",
                    formData
                );
            console.log(response);
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div className={style.Auth}>
                <div>
                    <h1 className="mainTitle">Авторизация</h1>
                    <form className={style.authForm} onSubmit={this.submitHandler}>

                        {this.inputRenderHandler()}

                        <Button
                            type="success"
                            onClick={this.loginHandler}
                            disabled={!this.state.isFormValid}
                        >
                            Войти
                        </Button>
                        <Button
                            type="primary"
                            onClick={this.registerHandler}
                            disabled={!this.state.isFormValid}
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