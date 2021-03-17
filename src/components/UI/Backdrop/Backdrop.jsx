import React from "react";
import style from "./Backdrop.module.scss";

const Backdrop = props => {
    return(
        <div className={style.Backdrop} onClick={props.onClick}/>
    )
}

export default Backdrop;