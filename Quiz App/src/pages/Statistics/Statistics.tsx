import React from "react";
import { useAppSelector, useAppDispatch } from "../../hooks/redux";
import MyButton from "../../components/UI/buttons/MyButton";
import { useNavigate } from "react-router-dom";
import { resetStatistics } from "../../store/reducers/statisticsSlice";
import StatsSection from "../../components/UI/cards/StatsSection";
import styles from "./Statistics.module.css";

const Statistics = () => {
  const data = useAppSelector((state) => state.statisticsSlice);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const stats = [
    {
      title: "Difficulty",
      stats: data.difficulty,
    },
    {
      title: "Type",
      stats: data.type,
    },
    {
      title: "Category",
      stats: data.category,
    },
  ];

  return (
    <div className={styles.container}>
      <h1>Statistics</h1>
      {data.totalQuestions ? (
        <section className={styles.wrapper}>
          <div className={styles.wrapper__count}>
            <h2>
              {data.totalQuestions ?? 0}/<span>{data.totalCorrect ?? 0}</span>
            </h2>
            <p>
              Questions/<span>Correct</span>
            </p>
          </div>
          {stats.map(({ title, stats }) => (
            <StatsSection key={title} title={title} stats={stats} />
          ))}
        </section>
      ) : (
        <h2>No data available</h2>
      )}
      <section className={styles.container__btn}>
        <MyButton onClick={() => navigate("/")}>Configure quiz</MyButton>
        <MyButton onClick={() => dispatch(resetStatistics())}>
          Reset statistics
        </MyButton>
      </section>
    </div>
  );
};

export default Statistics;
