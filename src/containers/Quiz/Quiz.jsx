import React from "react";
import style from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import Preloader from "../../components/UI/Preloader/Preloader";
import {connect} from "react-redux";
import {fetchQuizById} from "../../redux/actions/actions";

class Quiz extends React.Component {

    state = {
        results: {}, // {[id]: "success" || "error"}
        isFinished: false,
        activeQuestion: 0,
        answerState: null, // {[id]: "success" || "error"}
        quiz: [],
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

        const question = this.props.quiz[this.state.activeQuestion];
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
        return this.state.activeQuestion + 1 === this.props.quiz.length;
    }

    restartHandler = () => {
        this.setState({
            results: {},
            isFinished: false,
            activeQuestion: 0,
            answerState: null,
        });
    }

    componentDidMount() {
        console.log(this.props)
        this.props.fetchQuizById(this.props.match.params.id);
    }

    render() {
        return (
            <div className={style.Quiz}>
                <div className={style.QuizWrapper}>
                    <h1>Ответьте на все вопросы</h1>
                    {
                        this.props.isFetch || !this.props.quiz
                            ? <Preloader/>
                            : <>
                                {this.state.isFinished
                                    ? <FinishedQuiz
                                        quizLengh={this.props.quiz.length}
                                        quiz={this.props.quiz}
                                        results={this.state.results}
                                        onRestart={this.restartHandler}
                                    />
                                    : <ActiveQuiz
                                        question={this.props.quiz[this.state.activeQuestion].question}
                                        answers={this.props.quiz[this.state.activeQuestion].answers}
                                        onAnswerClick={this.onAnswerClickHandler}
                                        quizLengh={this.props.quiz.length}
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

const mapStateToProps = (state) => ({
    results: state.quiz.results,
    isFinished: state.quiz.isFinished,
    activeQuestion: state.quiz.activeQuestion,
    answerState: state.quiz.answerState, // {[id]: "success" || "error"}
    quiz: state.quiz.quiz,
    isFetch: state.quiz.isFetch,
});
const mapDispatchToProps = dispatch => ({
    fetchQuizById: id => dispatch(fetchQuizById(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);