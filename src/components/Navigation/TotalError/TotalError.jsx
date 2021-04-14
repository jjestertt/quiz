import React from "react";
import style from "./TotalError.module.scss"

const TotalError = props => {
    const cls = [style.TotalError];

    if (!!props.error) {
        cls.push(style.active);
    }

    return (
        <div className={cls.join(" ")}>
            <i onClick={props.closeErrorHandler} className={style.errorClose + " fa fa-times"}/>
            {!!props.error && <span>{props.error}</span>}
        </div>
    )
}

export default TotalError;