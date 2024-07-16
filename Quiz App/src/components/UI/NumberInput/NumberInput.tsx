import React, { useState } from 'react';
import styles from '../NumberInput/NumberInput.module.css'

const NumberInput: React.FC = () => {
  const [value, setValue] = useState<number | string>('');

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => { 
    const numberValue = Number(event.target.value); 
    
    if (!Number.isNaN(numberValue) && numberValue >= 5 && numberValue <= 15) { 
      setValue(numberValue);
    } else { 
      setValue(''); 
    } 
  };

  return (
    <div className={styles.wrapper}>
      <label htmlFor="number-input">Number of Questions</label>
      <input className={styles.input}
        id="number-input"
        type="number"
        min={5}
        max={15}
        value={value}
        onChange={handleChange}
        placeholder=''
      />
    </div>
  );
};

export default NumberInput;
