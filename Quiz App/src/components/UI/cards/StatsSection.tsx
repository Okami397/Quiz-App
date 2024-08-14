import React from "react";
import { Stats } from "../../../store/reducers/statisticsSlice";
import styles from "./Cards.module.css";

interface StatsSectionProps {
  title: string;
  stats: Record<string, Stats>;
}

const StatsSection: React.FC<StatsSectionProps> = ({ title, stats }) => {
  return (
    <div className={styles.wrapper}>
      <h3>{title}</h3>
      <div className={styles.wrapper__card}>
        {Object.entries(stats).map(([key, { total, correct }]) => {
          return (
            <div className={styles.wrapper__card_item} key={key}>
              <h4>{key}:</h4>
              <p>
                Total: <span>{total ?? 0}</span>, Correct:{" "}
                <span>{correct ?? 0}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StatsSection;
