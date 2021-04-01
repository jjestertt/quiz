import React from "react";
import style from "./Quiz.module.scss";
import ActiveQuiz from "../../components/ActiveQuiz/ActiveQuiz";
import FinishedQuiz from "../../components/FinishedQuiz/FinishedQuiz";
import Preloader from "../../components/UI/Preloader/Preloader";
import {connect} from "react-redux";
import {fetchQuizById, quizAnswerClick, restartQuiz} from "../../redux/actions/actions";

class Quiz extends React.Component {
    onAnswerClickHandler = answerId => {
        this.props.quizAnswerClick(answerId);
    }

    restartHandler = () => {
        this.props.restartQuiz();
    }

    componentDidMount() {
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
                                {this.props.isFinished
                                    ? <FinishedQuiz
                                        quizLengh={this.props.quiz.length}
                                        quiz={this.props.quiz}
                                        results={this.props.results}
                                        onRestart={this.restartHandler}
                                    />
                                    : <ActiveQuiz
                                        question={this.props.quiz[this.props.activeQuestion].question}
                                        answers={this.props.quiz[this.props.activeQuestion].answers}
                                        onAnswerClick={this.onAnswerClickHandler}
                                        quizLengh={this.props.quiz.length}
                                        questionNumber={this.props.activeQuestion + 1}
                                        answerState={this.props.answerState}
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
    answerState: state.quiz.answerState,
    quiz: state.quiz.quiz,
    isFetch: state.quiz.isFetch,
});
const mapDispatchToProps = dispatch => ({
    fetchQuizById: id => dispatch(fetchQuizById(id)),
    quizAnswerClick: answerId => dispatch(quizAnswerClick(answerId)),
    restartQuiz: () => dispatch(restartQuiz()),
})

export default connect(mapStateToProps, mapDispatchToProps)(Quiz);