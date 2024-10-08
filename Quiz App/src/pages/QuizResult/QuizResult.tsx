import React, { useEffect } from "react";
import styles from "./QuizResult.module.css";
import { useNavigate } from "react-router-dom";
import ConfigOptionsCard from "../../components/UI/cards/ConfigOPtionsCard";
import MyButton from "../../components/UI/buttons/MyButton";
import Spinner from "../../components/UI/spinners/Spinner";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import {
  setQuizConfig,
  clearQuizData,
} from "../../store/reducers/quizConfigSlice";
import { resetQuiz } from "../../store/reducers/resultsSlice";
import { setStatistics } from "../../store/reducers/statisticsSlice";

interface QuizResultProps {}

const QuizResult: React.FC<QuizResultProps> = () => {
  const correct = useAppSelector((state) => state.results);
  const config = useAppSelector((state) => state.quizConfig.configuration);

  const configuration = {
    Quantity: config.amount,
    Category: config.category.value,
    Difficulty: config.difficulty,
    Type: config.type,
    Time: config.time,
  };

  const statistics = {
    totalQuestions: correct.totalQuestions,
    totalCorrect: correct.correctAnswers,
    category: {
      [config.category.value]: {
        total: correct.totalQuestions,
        correct: correct.correctAnswers,
      },
    },
    difficulty: {
      [config.difficulty]: {
        total: correct.totalQuestions,
        correct: correct.correctAnswers,
      },
    },
    type: {
      [config.type]: {
        total: correct.totalQuestions,
        correct: correct.correctAnswers,
      },
    },
  };

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(setStatistics(statistics));
  }, [correct, config, statistics]);

  const restart = () => {
    dispatch(resetQuiz());
    dispatch(setQuizConfig(config));
    navigate("/quiz");
  };

  const rebuild = () => {
    dispatch(resetQuiz());
    dispatch(clearQuizData());
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
            correctAnswers={correct.correctAnswers}
            totalQuestions={correct.totalQuestions}
          />
          <div className={styles.wrapper__results_time}>
            <h3>Time spent:</h3>
            <p>{correct.time} second's</p>
          </div>
        </section>
        <section className={styles.container__card}>
          <h3>Quiz configuration:</h3>
          {Object.entries(configuration).map(([key, value]) => (
            <ConfigOptionsCard title={key} option={value} key={key} />
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
