import React, { useReducer, useEffect, useState } from "react";
import styles from "./MainQuiz.module.css";
import ProgressBar from "../../components/UI/spinners/ProgressBar";
import AnswerButton from "../../components/UI/buttons/AnswerButton";
import MyButton from "../../components/UI/buttons/MyButton";
import { quizQuestion } from "../../data/MockData";
import Spinner from "../../components/UI/spinners/Spinner";

interface MainQuizProps {}

type State = {
  progress: number;
  numberOfQuestions: number;
  currentQuestionId: number;
};
type Action = {
  type: "QUIZ__STATE" | "CURRENT_QUESTION_ID";
  payload: {
    numberOfQuestions?: number;
    progress?: number;
    currentQuestionId?: number;
  };
};

const initialState: State = {
  progress: 0,
  numberOfQuestions: 0,
  currentQuestionId: 0,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "QUIZ__STATE":
      return {
        ...state,
        numberOfQuestions:
          action.payload.numberOfQuestions ?? state.numberOfQuestions,
        progress: action.payload.progress ?? state.progress,
      };
    case "CURRENT_QUESTION_ID":
      return {
        ...state,
        currentQuestionId:
          action.payload.currentQuestionId ?? state.currentQuestionId,
      };
    default:
      return state;
  }
};

const MainQuiz: React.FC<MainQuizProps> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const timeLimit = 140;
  const currentQuestion = quizQuestion[state.currentQuestionId];

  const selectAnswer = () => {
    state.currentQuestionId < quizQuestion.length - 1
      ? dispatch({
          type: "CURRENT_QUESTION_ID",
          payload: { currentQuestionId: state.currentQuestionId + 1 },
        })
      : endQuiz();
  };
  const endQuiz = () => {};

  useEffect(() => {
    const uniqueIds = new Set(quizQuestion.map((question) => question.id));

    dispatch({
      type: "QUIZ__STATE",
      payload: {
        numberOfQuestions: uniqueIds.size,
        progress: state.currentQuestionId + 1,
      },
    });
  }, [state.currentQuestionId]);

  return (
    <div className={styles.container}>
      <section className={styles.container__progress}>
        <div className={styles.container__progress_bar}>
          <ProgressBar
            currentQuestion={state.progress}
            totalQuestions={state.numberOfQuestions}
          />
        </div>
        <div className={styles.container__progress_timer}>
          <Spinner initialTime={timeLimit} />
        </div>
      </section>
      <hr />
      <section className={styles.container__QA}>
        <h2 className={styles.container__Q}>{currentQuestion.questionText}</h2>
        <div className={styles.container__A}>
          {currentQuestion.options.map((option) => (
            <AnswerButton onClick={selectAnswer} key={option}>
              {option}
            </AnswerButton>
          ))}
        </div>
      </section>
      <section className={styles.container__btn}>
        <MyButton onClick={endQuiz}>End Quiz</MyButton>
      </section>
    </div>
  );
};

export default MainQuiz;
