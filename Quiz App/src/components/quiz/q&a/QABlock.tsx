import React from "react";
import AnswerButton from "../../UI/buttons/AnswerButton";
import styles from "./QABlock.module.css";

interface QABlockProps {
  question: string;
  answers: string[];
  onSelectAnswer: (answer: string) => void;
  style?: React.CSSProperties;
}

const QABlock: React.FC<QABlockProps> = ({
  question,
  answers,
  onSelectAnswer,
  style,
}) => {
  return (
    <div className={styles.container__QA}>
      <h2 className={styles.container__Q}>{question}</h2>
      <div className={styles.container__A}>
        {answers.map((answer) => (
          <AnswerButton onClick={() => onSelectAnswer(answer)} key={answer}>
            {answer}
          </AnswerButton>
        ))}
      </div>
    </div>
  );
};

export default QABlock;
