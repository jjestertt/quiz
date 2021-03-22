import React from "react";
import style from "./ActiveQuiz.module.scss";
import AnswersList from "./AnswersList/AnswersList";
import {withRouter} from "react-router";

const ActiveQuiz = (props) => {
    return (
        <div className={style.ActiveQuiz}>
            <p className={style.Question}>
                <span>
                <strong>{props.questionNumber}.</strong>
                &nbsp; {props.question}
                </span>
                <small>{props.questionNumber} из {props.quizLengh}</small>
            </p>
            <AnswersList answers={props.answers}
                         onAnswerClick={props.onAnswerClick}
                         answerState={props.answerState}
            />
        </div>
    );
}

export default withRouter(ActiveQuiz);