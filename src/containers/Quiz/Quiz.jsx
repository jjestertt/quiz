import React from "react";
import style from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";

class Quiz extends React.Component {
    state = {
        activeQuestion: 0,
        answerState: null,
        quiz: [
            {
                id: 1,
                question: "Какого цвета травка?",
                rightAnswer: 1,
                answers: [
                    {text: "Зеленая", id: 1},
                    {text: "Красная", id: 2},
                    {text: "Синяя", id: 3},
                    {text: "Розовая", id: 4},
                ]
            },
            {
                id: 2,
                question: "В каком году основали Санкт Петебург?",
                rightAnswer: 3,
                answers: [
                    {text: "1700", id: 1},
                    {text: "1702", id: 2},
                    {text: "1703", id: 3},
                    {text: "1706", id: 4},
                ]
            }
        ]
    };
    onAnswerClickHandler = answerId => {
        const rightAnswerId = this.state.quiz[this.state.activeQuestion].rightAnswer;

        if (rightAnswerId === answerId) {

            this.setState({answerState: {[answerId]: 'success'}});

            const timeout = window.setTimeout(() => {
                this.setState({answerState: null});

                if (this.isQuizFinished()) {
                    console.log("Тест пройден");
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1
                    });
                }
                window.clearTimeout(timeout);
            }, 1000)

        } else {
            this.setState({answerState:{[answerId]: 'error'}});
        }
    }
    isQuizFinished = () => {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    render() {
        return (
            <div className={style.Quiz}>
                <div className={style.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    <ActiveQuiz question={this.state.quiz[this.state.activeQuestion].question}
                                answers={this.state.quiz[this.state.activeQuestion].answers}
                                onAnswerClick={this.onAnswerClickHandler}
                                quizLengh={this.state.quiz.length}
                                questionNumber={this.state.activeQuestion + 1}
                                answerState={this.state.answerState}
                    />
                </div>
            </div>
        );
    }
}

export default Quiz;