import React from "react";
import style from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import axios from "../../axios/axios";
import Preloader from "../../components/UI/Preloader/Preloader";

class Quiz extends React.Component {
    state = {
        results: {}, // {[id]: "success" || "error"}
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // {[id]: "success" || "error"}
        quiz: [],
        isFetch: true
    };

    onAnswerClickHandler = answerId => {

        //Получаем правильный ответ у активного вопроса;
        // если в answerState success то return;
        // answerState существует для присвоения класса success или error при клике;
        // Сравниваем правильный ответ с введенным;
        //Если true записываем в answerState и (results(толко если нет false) id и success);
        //Ждем секунду и проверяем последний ли вопрос в списке;
        // Если true выводим Окно с правильными ответами;
        // Если false переключаем вопрос на следующий;
        //Если false записываем в answerState и results id и error ;

        if (this.state.answerState) {
            const key = Object.keys(this.state.answerState)[0];
            if (this.state.answerState[key] === "success") {
                return;
            }
        }

        const question = this.state.quiz[this.state.activeQuestion];
        const results = this.state.results;

        if (question.rightAnswer === answerId) {
            if (!results[question.id]) {
                results[question.id] = "success";
            }

            this.setState({answerState: {[answerId]: "success", results}});

            const timeout = window.setTimeout(() => {
                this.setState({answerState: null});

                if (this.isQuizFinished()) {
                    this.setState({isFinished: true});
                } else {
                    this.setState({
                        activeQuestion: this.state.activeQuestion + 1
                    });
                }
                window.clearTimeout(timeout);
            }, 1000)

        } else {
            results[question.id] = "error"
            this.setState({answerState: {[answerId]: "error", results}});
        }
    }
    isQuizFinished = () => {
        return this.state.activeQuestion + 1 === this.state.quiz.length;
    }

    restartHandler = () => {
        this.setState({
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
        });
    }

    async componentDidMount() {
        try {
            let response = await axios.get(`quizes/${this.props.match.params.id}.json`);
            this.setState({quiz: response.data, isFetch: false});
        } catch (e) {
            console.error(e);
        }
    }

    render() {
        return (
            <div className={style.Quiz}>
                <div className={style.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.state.isFetch
                            ? <Preloader/>
                            : <>
                                {this.state.isFinished
                                    ? <FinishedQuiz
                                        quizLengh={this.state.quiz.length}
                                        quiz={this.state.quiz}
                                        results={this.state.results}
                                        onRestart={this.restartHandler}
                                    />
                                    : <ActiveQuiz
                                        question={this.state.quiz[this.state.activeQuestion].question}
                                        answers={this.state.quiz[this.state.activeQuestion].answers}
                                        onAnswerClick={this.onAnswerClickHandler}
                                        quizLengh={this.state.quiz.length}
                                        questionNumber={this.state.activeQuestion + 1}
                                        answerState={this.state.answerState}
                                    />
                                }
                            </>
                    }
                </div>
            </div>
        );
    }
}

export default Quiz;