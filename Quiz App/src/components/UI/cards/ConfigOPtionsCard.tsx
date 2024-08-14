import React from "react";
import styles from "./Cards.module.css";

interface ConfigOptionsCardProps {
  title: string;
  option: string | number;
}

const ConfigOptionsCard: React.FC<ConfigOptionsCardProps> = ({
  title,
  option,
}) => {
  return (
    <div className={styles.container}>
      <h3>{title}</h3>
      <p>{option}</p>
    </div>
  );
};

export default ConfigOptionsCard;
