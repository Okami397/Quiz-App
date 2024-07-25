import React, { useReducer } from "react";
import styles from "./QuizResult.module.css";
import { useNavigate } from "react-router-dom";
import { quizConfigSet, QuizConfigSet } from "../../data/MockData";
import ConfigOptionsCard from "../../components/UI/card/ConfigOptionsCard";
import MyButton from "../../components/UI/buttons/MyButton";
import Spinner from "../../components/UI/spinners/Spinner";

interface QuizResultProps {}

type Action = {
  type: "SET_ANSWERED" | "SET_TOTAL" | "SET_TIME";
  payload: number;
};

interface State {
  answered: number;
  total: number;
  time: number;
}

const initialState: State = {
  answered: 5,
  total: 15,
  time: 300,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_ANSWERED":
      return { ...state, answered: action.payload };
    case "SET_TOTAL":
      return { ...state, total: action.payload };
    case "SET_TIME":
      return { ...state, time: action.payload };
    default:
      return state;
  }
};

const QuizResult: React.FC<QuizResultProps> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const navigate = useNavigate();

  const restart = () => {
    navigate("/quiz");
  };

  const rebuild = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <h2>
        Thank you for completing this quiz
        <br />
        Here are your results:
      </h2>
      <section className={styles.wrapper}>
        <section className={styles.wrapper__results}>
          <Spinner
            size={200}
            correctAnswers={state.answered}
            totalQuestions={state.total}
          />
          <div className={styles.wrapper__results_time}>
            <h3>Time spent:</h3>
            <p>{state.time} second's</p>
          </div>
        </section>
        <section className={styles.container__card}>
          <h3>Quiz configuration:</h3>
          {quizConfigSet.map((option: QuizConfigSet) => (
            <ConfigOptionsCard
              title={option.title}
              option={option.option}
              key={option.title}
            />
          ))}
        </section>
      </section>
      <section className={styles.container__btn}>
        <MyButton onClick={restart}>Restart </MyButton>
        <MyButton onClick={rebuild}>Choose another quiz</MyButton>
      </section>
    </div>
  );
};

export default QuizResult;
