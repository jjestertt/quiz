import React from "react";
import style from "./Preloader.module.scss";

const Preloader = props => (
    <div className={style.Preloader}>
        <div className={style.inner + " " + style.one}/>
        <div className={style.inner + " " + style.two}/>
        <div className={style.inner + " " + style.three}/>
    </div>
);

export default Preloader;