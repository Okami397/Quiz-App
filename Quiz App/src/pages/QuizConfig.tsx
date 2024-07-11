import React, { useState } from 'react';
import styles from '../pages/QuizConfig.module.css';
import SelectInput from '../components/UI/SelectInput/SelectInput';
import MyButton from '../components/UI/button/MyButton';

interface QuizConfigProps {}

const QuizConfig: React.FC<QuizConfigProps> = () => {
    const [numberOfQuestions, setNumberOfQuestions] = useState<string>('');
    const [category, setCategory] = useState<string>('');
    const [difficulty, setDifficulty] = useState<string>('');
    const [type, setType] = useState<string>('');
    const [time, setTime] = useState<string>('');

    const startQuiz = () => {
    };

    const seeStats = () => {
    };

    const numberOptions = Array.from({ length: 11 }, (_, index) => ({
        value: (index + 5).toString(),
        label: (index + 5).toString(),
    }));

    const categoryOptions: { value: string; label: string }[] = [
    ];
    

    const difficultyOptions: { value: string; label: string }[] = [
    ];
    

    const typeOptions: { value: string; label: string }[] = [
    ];
    

    const timeOptions = [
        { value: '1m', label: '1m' },
        { value: '2m', label: '2m' },
        { value: '3m', label: '3m' },
    ];

    return (
        <div className={styles.container}>
            <h1>Quiz Configuration</h1>

            <SelectInput
                label="Number of Questions"
                value={numberOfQuestions}
                onChange={setNumberOfQuestions}
                options={numberOptions}
            />

            <SelectInput
                label="Category"
                value={category}
                onChange={setCategory}
                options={categoryOptions}
            />

            <SelectInput
                label="Difficulty"
                value={difficulty}
                onChange={setDifficulty}
                options={difficultyOptions}
            />

            <SelectInput
                label="Type"
                value={type}
                onChange={setType}
                options={typeOptions}
            />

            <SelectInput
                label="Time"
                value={time}
                onChange={setTime}
                options={timeOptions}
            />

            <div className={styles.container__btn}>
                <MyButton onClick={startQuiz}>Start Quiz</MyButton>
                <MyButton onClick={seeStats}>See my stats</MyButton>
            </div>
        </div>
    );
};

export default QuizConfig;
