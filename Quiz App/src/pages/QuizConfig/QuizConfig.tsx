import React, { useReducer } from "react";
import styles from "../QuizConfig/QuizConfig.module.css";
import SelectInput from "../../components/UI/SelectInput/SelectInput";
import MyButton from "../../components/UI/buttons/MyButton";
import NumberInput from "../../components/UI/NumberInput/NumberInput";
import { selectOptions, SelectOption } from "../../data/MockData";

interface QuizConfigProps {}

type State = {
  numberOfQuestions: string;
  category: string;
  difficulty: string;
  type: string;
  time: string;
};

type Action = {
  type:
    | "SET_NUMBER_OF_QUESTIONS"
    | "SET_CATEGORY"
    | "SET_DIFFICULTY"
    | "SET_TYPE"
    | "SET_TIME";
  payload: string;
};

const initialState: State = {
  numberOfQuestions: "",
  category: "",
  difficulty: "",
  type: "",
  time: "",
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NUMBER_OF_QUESTIONS":
      return { ...state, numberOfQuestions: action.payload };
    case "SET_CATEGORY":
      return { ...state, category: action.payload };
    case "SET_DIFFICULTY":
      return { ...state, difficulty: action.payload };
    case "SET_TYPE":
      return { ...state, type: action.payload };
    case "SET_TIME":
      return { ...state, time: action.payload };
    default:
      return state;
  }
};

const QuizConfig: React.FC<QuizConfigProps> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleInputChange = (type: Action["type"]) => (value: string) => {
    dispatch({ type, payload: value });
  };

  const startQuiz = () => {};

  const seeStats = () => {};

  return (
    <div className={styles.container}>
      <h1>Quiz Configuration</h1>
      <NumberInput />
      {selectOptions.map((option) => (
        <SelectInput
          key={option.label}
          label={option.label}
          value={state[option.label.toLowerCase() as keyof State]}
          onChange={handleInputChange(
            `SET_${option.label.toUpperCase()}` as Action["type"],
          )}
          options={option.options || []}
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
