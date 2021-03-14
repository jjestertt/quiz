import React from "react";
import style from "./FinishedQuiz.module.scss"

const FinishedQuiz = props => {
    return (
      <div className={style.FinishedQuiz}>
          <ul>
              <li>
                  <strong>1. </strong>
                  Как дела?
                  <i className={"fa fa-times " + style.error}/>
              </li>
              <li>
                  <strong>2. </strong>
                  Как дела?
                  <i className={"fa fa-check " + style.success}/>
              </li>
          </ul>

          <p>Правильно 2 из 4</p>
          <div>
              <button>Повторить</button>
          </div>

      </div>
    );
}

export default FinishedQuiz;