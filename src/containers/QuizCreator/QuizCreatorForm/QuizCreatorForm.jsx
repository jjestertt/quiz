import {Field, Form, Formik} from "formik";
import {quizCreateValidate} from "../../../helpers/validate";
import Input from "../../../components/UI/Input/Input";
import Select from "../../../components/UI/Select/Select";
import Button from "../../../components/UI/Button/Button";
import React from "react";

const QuizCreatorForm = ({createQuizHandler, addQuestionHandler, quiz}) => {
    return (
        <Formik
            initialValues={{
                rightAnswer: "1", question: "",
                option1: "", option2: "",
                option3: "", option4: "",
            }}
            validate={quizCreateValidate}
            onSubmit={() => null}
        >
            {({values, isValid, dirty, handleReset}) => (
                <Form>
                    <Input id="question" type="text" name="question" label="Введите вопрос"/>
                    <Input id="1" type="text" name="option1" label="Ответ 1"/>
                    <Input id="2" type="text" name="option2" label="Ответ 2"/>
                    <Input id="3" type="text" name="option3" label="Ответ 3"/>
                    <Input id="4" type="text" name="option4" label="Ответ 4"/>

                    <Field name="rightAnswer" as={Select}
                           label="Выберите правильный ответ"
                           options={[
                               {value: 1, text: 1},
                               {value: 2, text: 2},
                               {value: 3, text: 3},
                               {value: 4, text: 4}
                           ]}
                    />

                    <Button type="primary"
                            disabled={!(isValid && dirty)}
                            onClick={() => {
                                addQuestionHandler(isValid, dirty, values);
                                handleReset();
                            }}
                    >
                        Добавить вопрос
                    </Button>
                    <Button type="success" disabled={quiz.length === 0}
                            onClick={(e) => {
                                e.preventDefault();
                                createQuizHandler();
                                handleReset();
                            }}
                    >
                        Создать тест
                    </Button>
                    <div>Вопросов добавлено {quiz.length}</div>
                </Form>
            )}
        </Formik>
    );
}

export default QuizCreatorForm;