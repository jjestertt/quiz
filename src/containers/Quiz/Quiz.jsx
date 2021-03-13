import React from "react";
import style from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component{
    state = {

    }
    render() {
        return (
            <div className={style.Quiz}>
                <h1>Quiz</h1>
                <ActiveQuiz />
            </div>
        )
    }
}

export default Quiz;