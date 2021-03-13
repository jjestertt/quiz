import React from "react";
import style from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
    state = {
        quiz: [
            {
                answers: [
                    {text: "Забавный ответ 1"},
                    {text: "Забавный ответ 2"},
                    {text: "Забавный ответ 3"},
                    {text: "Забавный ответ 4"},
                ]
            }
        ]
    };

    render() {
        return (
            <div className={style.Quiz}>
                <div className={style.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz answers={this.state.quiz[0].answers}/>
                </div>
            </div>
        );
    }
}

export default Quiz;