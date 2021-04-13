import React from "react";
import style from "./Input.module.scss";

const Input = props => {
    const inputType = props.type || "text";
    const cls = [style.Input,]

    const isInvalid = ({errors, touched, name}) => {
        return (errors && touched[name])
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
                {...props}
            />
            { isInvalid(props) && <span>{props.errors || "Введите верное значение"}</span>}
        </div>
    );
}

export default Input;