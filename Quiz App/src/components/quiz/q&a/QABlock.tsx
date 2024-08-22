import React from "react";
import AnswerButton from "../../UI/buttons/AnswerButton";
import styles from "./QABlock.module.css";
import { motion } from "framer-motion";

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
      <motion.h2
        key={question}
        className={styles.container__Q}
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: [0, 5, 0] }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        {question}
      </motion.h2>
      <div className={styles.container__A}>
        {answers.map((answer, index) => (
          <motion.div
            key={answer}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: [0, -5, 0] }}
            transition={{ delay: index * 0.2, duration: 0.5 }}
          >
            <AnswerButton onClick={() => onSelectAnswer(answer)}>
              {answer}
            </AnswerButton>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default QABlock;
