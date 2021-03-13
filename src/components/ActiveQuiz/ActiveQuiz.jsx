import React from "react";
import style from "./ActiveQuiz.module.scss";

const ActiveQuiz = (props) => {
    return (
        <div className={style.ActiveQuiz}>
            <p className={style.Question}>
                <span>
                <strong>1.</strong>
                &nbsp; Тело вопроса
                </span>
                <small>4 из 12</small>
            </p>

            <ul>
                <li>1</li>
                <li>2</li>
                <li>4</li>
                <li>4</li>
            </ul>
        </div>
    );
}

export default ActiveQuiz;