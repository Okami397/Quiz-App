import React, { useReducer, useCallback, useEffect } from "react";
import NumberInput from "../UI/NumberInput/NumberInput";
import SelectInput from "../UI/SelectInput/SelectInput";
import { selectOptions, SelectOption } from "../../data/categoryData";
import { useAppDispatch } from "../../hooks/redux";
import { setQuizConfig } from "../../store/reducers/quizConfigSlice";

type State = {
  numberOfQuestions: number;
  category: { id: number; value: string };
  difficulty: string;
  type: string;
  time: number;
};

type Action = {
  type:
    | "SET_NUMBER_OF_QUESTIONS"
    | "SET_CATEGORY"
    | "SET_DIFFICULTY"
    | "SET_TYPE"
    | "SET_TIME";
  payload: string | number | { id: number; value: string };
};

const initialState: State = {
  numberOfQuestions: 0,
  category: { id: 0, value: "" },
  difficulty: "",
  type: "",
  time: 0,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_NUMBER_OF_QUESTIONS":
      return { ...state, numberOfQuestions: action.payload as number };
    case "SET_CATEGORY":
      return {
        ...state,
        category: action.payload as { id: number; value: string },
      };
    case "SET_DIFFICULTY":
      return { ...state, difficulty: action.payload as string };
    case "SET_TYPE":
      return { ...state, type: action.payload as string };
    case "SET_TIME":
      return { ...state, time: action.payload as number };
    default:
      return state;
  }
};

const ConfigurationSelect: React.FC = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const dispatchToolkit = useAppDispatch();

  useEffect(() => {
    const configuration = {
      amount: state.numberOfQuestions,
      category: state.category,
      difficulty: state.difficulty,
      type: state.type,
      time: state.time,
    };
    dispatchToolkit(setQuizConfig(configuration));
  }, [state, dispatchToolkit]);

  const handleInputChange = useCallback(
    (
      type: Action["type"],
      value: number | string | { id: number; value: string },
    ) => {
      dispatch({ type, payload: value });
    },
    [dispatch],
  );

  return (
    <div>
      <NumberInput
        value={state.numberOfQuestions}
        onChange={(value) =>
          handleInputChange("SET_NUMBER_OF_QUESTIONS", value as number)
        }
      />
      {selectOptions.map((option: SelectOption) => (
        <SelectInput
          key={option.label}
          label={option.label}
          value={
            option.label === "Category"
              ? state.category.value
              : state[option.value as keyof State]
          }
          onChange={(value) => {
            if (option.label === "Category") {
              const selectedId =
                option.options?.find((opt) => opt.value === value)?.id || 0;
              dispatch({
                type: "SET_CATEGORY",
                payload: { id: selectedId, value: value as string },
              });
            } else {
              handleInputChange(
                `SET_${option.label.toUpperCase()}` as Action["type"],
                value,
              );
            }
          }}
          options={
            option.options?.map((opt) => ({
              value: opt.value,
              label: opt.value,
              id: opt.id,
            })) || []
          }
        />
      ))}
    </div>
  );
};

export default ConfigurationSelect;
