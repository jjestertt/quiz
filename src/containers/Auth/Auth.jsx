import React, {useState} from "react";
import Button from "./../../components/UI/Button/Button";
import style from "./Auth.module.scss";
import Input from "../../components/UI/Input/Input";
import is from "is_js";
import {useDispatch} from "react-redux";
import {login} from "../../redux/actions/auth";

const Auth = props => {
    const dispatch = useDispatch();
    const [isFormValid, setIsFormValid] = useState(false);
    const [formControls, setFormControls] = useState(
        {
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
        });


    const submitHandler = (e) => {
        e.preventDefault();
    }
    const validateControl = (value, validation) => {
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
    const onChangeHandler = (e, controlName) => {
        const formControlsTemp = {...formControls}
        const control = {...formControlsTemp[controlName]}
        control.value = e.target.value;
        control.touched = true;

        let validateControlTemp = validateControl(control.value, control.validation);

        control.valid = validateControlTemp.isValid;
        control.errorMessage = validateControlTemp.errorMessage;

        formControlsTemp[controlName] = control;

        let isFormValid = true;

        Object.keys(formControlsTemp).forEach(item => {
            isFormValid = formControlsTemp[item].valid && isFormValid;
        });

        setFormControls(formControlsTemp);
        setIsFormValid(isFormValid);
    }
    const inputRenderHandler = () => {
        return Object.keys(formControls).map((controlName, index) => {
            const control = formControls[controlName];
            return (
                <Input
                    key={controlName + index}
                    value={control.value}
                    onChange={(e) => {
                        onChangeHandler(e, controlName)
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
    const loginHandler = () => {
        dispatch(login(
            formControls.email.value,
            formControls.password.value,
            true
        ));
    }
    const registerHandler = () => {
        dispatch(login(
            formControls.email.value,
            formControls.password.value,
        ));
    }

    return (
        <div className={style.Auth}>
            <div>
                <h1 className="mainTitle">Авторизация</h1>
                <form className={style.authForm} onSubmit={submitHandler}>

                    {inputRenderHandler()}

                    <Button
                        type="success"
                        onClick={loginHandler}
                        disabled={!isFormValid}
                    >
                        Войти
                    </Button>
                    <Button
                        type="primary"
                        onClick={registerHandler}
                        disabled={!isFormValid}
                    >
                        Зарегистрироваться
                    </Button>
                </form>
            </div>
        </div>
    );
}



export default Auth;