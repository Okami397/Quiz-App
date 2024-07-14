import React, { useState } from 'react';
import styles from '../QuizConfig/QuizConfig.module.css'
import SelectInput from '../../components/UI/SelectInput/SelectInput';
import MyButton from '../../components/UI/button/MyButton';
import NumberInput from '../../components/UI/NumberInput/NumberInput'

interface QuizConfigProps {}

const QuizConfig: React.FC<QuizConfigProps> = () => {
    const [numberOfQuestions, setNumberOfQuestions] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [difficulty, setDifficulty] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [time, setTime] = useState<string>('');

    const selectOptions = [
        { 
            label: 'Category', 
            value: category, 
            onChange: () => {}, 
            options: []
        },
        { 
            label: 'Difficulty', 
            value: difficulty, 
            onChange: setDifficulty, 
            options: []
        },
        { 
            label: 'Type', 
            value: type, 
            onChange: () => {}, 
            options: []
        },
        { 
            label: 'Time', 
            value: time, 
            onChange: () => {}, 
            options: [
                { value: '1m', label: '1m' },
                { value: '2m', label: '2m' },
                { value: '3m', label: '3m' },
            ]
        },
    ];

    const startQuiz = () => {
    };

    const seeStats = () => {
    };

    return (
        <div className={styles.container}>
            <h1>Quiz Configuration</h1>

            <NumberInput />

            {selectOptions.map((option, index) => (
                <SelectInput
                    key={index}
                    label={option.label}
                    value={option.value}
                    onChange={option.onChange}
                    options={option.options}
                />
            ))}

            <div className={styles.container__btn}>
                <MyButton onClick={startQuiz}>Start Quiz</MyButton>
                <MyButton onClick={seeStats}>See my stats</MyButton>
            </div>
        </div>
    );
};

export default QuizConfig;
