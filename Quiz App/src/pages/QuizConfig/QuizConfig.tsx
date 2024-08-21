import React, { useReducer, useState, useEffect } from "react";
import styles from "../QuizConfig/QuizConfig.module.css";
import QuizConfigurationSelect from "../../components/quiz/ConfigurationSelect";
import { useNavigate } from "react-router-dom";
import MyButton from "../../components/UI/buttons/MyButton";
import { useAppSelector } from "../../hooks/redux";
import { motion } from "framer-motion";

interface QuizConfigProps {}

const QuizConfig: React.FC<QuizConfigProps> = () => {
  const navigate = useNavigate();
  const config = useAppSelector((state) => state.quizConfig.configuration);

  const startQuiz = () => {
    const isConfigurationVAlid =
      !config ||
      !config.amount ||
      !config.category ||
      !config.difficulty ||
      !config.type ||
      !config.time;

    if (isConfigurationVAlid) {
      alert("Please complete the quiz configuration before starting.");
      return;
    }
    navigate("/quiz");
  };

  const seeStats = () => {
    navigate("/statistics");
  };

  return (
    <motion.div className={styles.container}>
      <h1>Quiz Configuration</h1>
      <QuizConfigurationSelect />
      <div className={styles.container__btn}>
        <MyButton onClick={startQuiz}>Start Quiz</MyButton>
        <MyButton onClick={seeStats}>See my stats</MyButton>
      </div>
      <motion.div
        // initial={{ x: 0 }}
        animate={{
          x: [0, 1000],
          opacity: 0,
          transition: { duration: 2.5, ease: "circOut" },
        }}
        exit={{ x: [0, -5], transition: { duration: 0.5, ease: "circIn" } }}
        className="privacy-screen"
      />
    </motion.div>
  );
};

export default QuizConfig;
