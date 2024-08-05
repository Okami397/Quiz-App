import React, { useState } from "react";
import styles from "../NumberInput/NumberInput.module.css";

interface NumberInputProps {
  value: number;
  onChange: (value: number | null) => void;
}

const NumberInput: React.FC<NumberInputProps> = ({ value, onChange }) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const numberValue = Number(event.target.value);
    onChange(numberValue);
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor="number-input">Number of Questions</label>
      <input
        className={styles.input}
        id="number-input"
        type="number"
        min={5}
        max={15}
        value={value === 0 ? "" : value}
        onChange={handleChange}
        placeholder="Type Number..."
      />
    </div>
  );
};

export default NumberInput;
