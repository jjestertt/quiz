import React from "react";
import style from "./AnswersList.module.scss"
import AnswerItem from "./AnswerItem/AnswerItem";

const AnswersList = props => (
    <ul className={style.AnswersList}>
        { props.answers.map((answer, index) => (<AnswerItem key={index} answer={answer}/>))}
    </ul>
);

export default AnswersList;