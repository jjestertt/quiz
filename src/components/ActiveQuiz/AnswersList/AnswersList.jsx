import React from "react";
import style from "./AnswersList.module.scss"
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => (
    <ul className={style.AnswersList}>
        {props.answers.map((answer, index) => {
            return (
                <AnswerItem key={index} answer={answer}
                            onAnswerClick={props.onAnswerClick}
                            answerState={props.answerState ? props.answerState[answer.id] : null}
                />
            );
        })}
    </ul>
);

export default AnswersList;