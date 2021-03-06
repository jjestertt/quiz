import React from "react";
import style from "./Button.module.scss";

const Button = props => {

    const cls = [
        style["Button"],
        style[props.type]
    ]

    return(
        <button
            onClick={props.onClick}
            className={cls.join(" ")}
            disabled={props.disabled}
            {...props}
        >
            {props.children}
        </button>
    );
}

export default Button;