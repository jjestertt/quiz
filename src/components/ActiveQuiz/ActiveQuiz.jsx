import React from "react";
import style from "./ActiveQuiz.module.scss";
import AnswersList from "./AnswersList/AnswersList";

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
            <AnswersList answers={props.answers}/>

        </div>
    );
}

export default ActiveQuiz;