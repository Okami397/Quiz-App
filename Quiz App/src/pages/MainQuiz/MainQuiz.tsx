import React, { useReducer, useEffect } from "react";
import styles from "./MainQuiz.module.css";
import ProgressBar from "../../components/UI/spinners/ProgressBar";
import AnswerButton from "../../components/UI/buttons/AnswerButton";
import MyButton from "../../components/UI/buttons/MyButton";
import { quizQuestion } from "../../data/MockData";
import CountDownTimer from "../../components/UI/spinners/CountDownTimer";

interface MainQuizProps {}

type State = {
  progress: number;
  numberOfQuestions: number;
};

type Action =
  | { type: "SET_PROGRESS"; payload: number }
  | { type: "SET_NUMBER_OF_QUESTIONS"; payload: number };

const initialState: State = {
  progress: 0,
  numberOfQuestions: 0,
};

const reducer = (state: State = initialState, action: Action): State => {
  switch (action.type) {
    case "SET_PROGRESS":
      return { ...state, progress: action.payload };
    case "SET_NUMBER_OF_QUESTIONS":
      return { ...state, numberOfQuestions: action.payload };
    default:
      return state;
  }
};

const MainQuiz: React.FC<MainQuizProps> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const currentQuestion = quizQuestion[0];
  const timeLimit = 140;

  const selectAnswer = () => {};
  const endQuiz = () => {};

  useEffect(() => {
    const uniqueIds = new Set(quizQuestion.map((question) => question.id));
    dispatch({ type: "SET_NUMBER_OF_QUESTIONS", payload: uniqueIds.size });
    dispatch({ type: "SET_PROGRESS", payload: currentQuestion.id + 1 });
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.container__progress}>
        <div className={styles.container__progress_bar}>
          <ProgressBar
            currentQuestion={state.progress}
            totalQuestions={state.numberOfQuestions}
          />
        </div>
        <div className={styles.container__progress_timer}>
          <CountDownTimer initialTime={timeLimit} />
        </div>
      </div>
      <hr />
      <div className={styles.container__QA}>
        <h2 className={styles.container__Q}>{currentQuestion.questionText}</h2>
        <div className={styles.container__A}>
          {currentQuestion.options.map((option) => (
            <AnswerButton onClick={selectAnswer} key={currentQuestion.id + 1}>
              {option}
            </AnswerButton>
          ))}
        </div>
      </div>
      <div className={styles.container__btn}>
        <MyButton onClick={endQuiz}>End Quiz</MyButton>
      </div>
    </div>
  );
};

export default MainQuiz;
