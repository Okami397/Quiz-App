import React from "react";
import { useAppSelector } from "../../hooks/redux";

const Statistics = () => {
  const data = useAppSelector((state) => state.statisticsSlice);
  console.log(data);
  return (
    <div>
      <p>Number of questions {data.totalQuestions}</p>
      <p>Number of correct answers {data.totalCorrect}</p>
      {/* <p>Number of questions for each category that user took{data.category.map(type => {}) }</p> */}
      <p>Number of questions for each difficulty</p>
      <p>Number of questions for each type</p>
    </div>
  );
};

export default Statistics;
