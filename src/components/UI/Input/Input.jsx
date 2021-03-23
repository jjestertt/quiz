import React from "react";
import style from "./Input.module.scss";

const Input = props => {
    const inputType = props.type || "text";
    const cls = [style.Input,]

    const isInvalid = ({touched, valid, shouldValidate}) => {
        return !valid && shouldValidate && touched;
    }

    if (isInvalid(props)) {
        cls.push(style.invalid);
    }

    return(
        <div className={cls.join(" ")}>
            <label>
                {props.label}
            </label>
            <input
                type={inputType}
                value={props.value}
                onChange={props.onChange}
            />
            {isInvalid(props) && <span>{props.errorMessage || "Введите верное значение"}</span>}
        </div>
    );
}

export default Input;