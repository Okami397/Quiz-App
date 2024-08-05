import React, { useReducer, useState, useEffect } from "react";
import styles from "../QuizConfig/QuizConfig.module.css";
import QuizConfigurationSelect from "../../components/quiz/ConfigurationSelect";
import { useNavigate } from "react-router-dom";
import MyButton from "../../components/UI/buttons/MyButton";
import { useAppSelector } from "../../hooks/redux";

interface QuizConfigProps {}

const QuizConfig: React.FC<QuizConfigProps> = () => {
  const navigate = useNavigate();
  const config = useAppSelector((state) => state.quizConfig.configuration);

  const startQuiz = () => {
    if (
      !config ||
      !config.amount ||
      !config.category ||
      !config.difficulty ||
      !config.type ||
      !config.time
    ) {
      alert("Please complete the quiz configuration before starting.");
      return;
    }
    navigate("/quiz");
  };

  const seeStats = () => {
    navigate("/statistics");
  };

  return (
    <div className={styles.container}>
      <h1>Quiz Configuration</h1>
      <QuizConfigurationSelect />
      <div className={styles.container__btn}>
        <MyButton onClick={startQuiz}>Start Quiz</MyButton>
        <MyButton onClick={seeStats}>See my stats</MyButton>
      </div>
    </div>
  );
};

export default QuizConfig;
