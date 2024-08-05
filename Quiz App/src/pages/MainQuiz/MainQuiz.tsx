import React, { useEffect, useReducer, useCallback, useMemo } from "react";
import styles from "./MainQuiz.module.css";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../../components/UI/spinners/ProgressBar";
import AnswerButton from "../../components/UI/buttons/AnswerButton";
import MyButton from "../../components/UI/buttons/MyButton";
import Spinner from "../../components/UI/spinners/Spinner";
import ConfirmModal from "../../components/UI/modal/ConfirmModal";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import { Configuration } from "../../models/quiz";
import { quizApi } from "../../services/quizApi";
import QABlock from "../../components/quiz/q&a/QABlock";
import {
  setCorrectAnswers,
  setTotal,
  setTime,
  resetQuiz,
} from "../../store/reducers/resultsSlice";
import { clearQuizData } from "../../store/reducers/quizConfigSlice";
import useTimer from "../../hooks/timer";

type Action =
  | { type: "SET_PROGRESS"; payload: number }
  | { type: "SET_NUMBER_OF_QUESTIONS"; payload: number }
  | { type: "SET_CURRENT_QUESTION_ID"; payload: number }
  | { type: "TOGGLE_MODAL"; payload: boolean };

interface State {
  progress: number;
  numberOfQuestions: number;
  currentQuestionId: number;
  isModalOpen: boolean;
}

const initialState: State = {
  progress: 0,
  numberOfQuestions: 0,
  currentQuestionId: 0,
  isModalOpen: false,
};

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "SET_PROGRESS":
      return { ...state, progress: action.payload };
    case "SET_NUMBER_OF_QUESTIONS":
      return { ...state, numberOfQuestions: action.payload };
    case "SET_CURRENT_QUESTION_ID":
      return { ...state, currentQuestionId: action.payload };
    case "TOGGLE_MODAL":
      return { ...state, isModalOpen: action.payload };
    default:
      return state;
  }
};

interface MainQuizProps {}

const MainQuiz: React.FC<MainQuizProps> = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { progress, numberOfQuestions, currentQuestionId, isModalOpen } = state;
  const { startTimer, stopTimer, resetTimer, getElapsedTime } = useTimer();
  const config = useAppSelector((state) => state.quizConfig.configuration);
  const { data, error, isLoading } = quizApi.useFetchQuestionsQuery(
    config as Configuration,
  );
  const timeLimit = config!.time;

  const dispatchAnswers = useAppDispatch();
  const navigate = useNavigate();

  const currentQuestionData = useMemo(() => {
    return data ? data[currentQuestionId] : null;
  }, [data, currentQuestionId]);

  useEffect(() => {
    if (data) {
      dispatchAnswers(setTotal(data.length));
      dispatch({ type: "SET_NUMBER_OF_QUESTIONS", payload: data.length });
      resetTimer();
      startTimer();
    }
  }, [data]);

  useEffect(() => {
    dispatch({ type: "SET_PROGRESS", payload: currentQuestionId + 1 });
  }, [currentQuestionId]);

  const endQuiz = () => {
    dispatch({ type: "TOGGLE_MODAL", payload: true });
  };

  const confirm = () => {
    dispatchAnswers(resetQuiz());
    dispatchAnswers(clearQuizData());
    navigate("/");
  };

  const cancel = () => {
    dispatch({ type: "TOGGLE_MODAL", payload: false });
  };

  const timeOrQuestionsEnd = useCallback(() => {
    stopTimer();
    dispatchAnswers(setTime(getElapsedTime()));
    resetTimer();
    navigate("/result");
  }, [dispatchAnswers]);

  const selectAnswer = useCallback(
    (answer: string) => {
      if (currentQuestionData) {
        const isCorrect = currentQuestionData.correctAnswer === answer;

        if (isCorrect) {
          dispatchAnswers(setCorrectAnswers());
        }

        if (currentQuestionId < numberOfQuestions - 1) {
          dispatch({
            type: "SET_CURRENT_QUESTION_ID",
            payload: currentQuestionId + 1,
          });
        } else {
          timeOrQuestionsEnd();
        }
      }
    },
    [
      currentQuestionData,
      currentQuestionId,
      numberOfQuestions,
      dispatchAnswers,
      timeOrQuestionsEnd,
    ],
  );

  return (
    <div className={styles.container}>
      {isLoading ? (
        "Loading..."
      ) : error ? (
        <ConfirmModal
          active={true}
          onClick={confirm}
          setActive={(isActive: boolean) =>
            dispatch({ type: "TOGGLE_MODAL", payload: isActive })
          }
        >
          <h2>Please select another quiz configuration...</h2>
          <div className={styles.container__btn}>
            <AnswerButton onClick={confirm}>Confirm</AnswerButton>
          </div>
        </ConfirmModal>
      ) : (
        data && (
          <>
            <section className={styles.container__progress}>
              <div className={styles.container__progress_bar}>
                <ProgressBar
                  currentQuestion={progress}
                  totalQuestions={numberOfQuestions}
                />
              </div>
              <div className={styles.container__progress_timer}>
                <Spinner initialTime={timeLimit} timeEnd={timeOrQuestionsEnd} />
              </div>
            </section>
            <hr />
            <section className={styles.container__QA}>
              <QABlock
                question={data[currentQuestionId].question}
                answers={data[currentQuestionId].answers}
                onSelectAnswer={selectAnswer}
              />
            </section>
            <section className={styles.container__btn}>
              <MyButton onClick={endQuiz}>End Quiz</MyButton>
            </section>
            <ConfirmModal
              active={isModalOpen}
              onClick={confirm}
              setActive={(isActive: boolean) =>
                dispatch({ type: "TOGGLE_MODAL", payload: isActive })
              }
            >
              <h2>Are you sure?</h2>
              <div className={styles.container__btn}>
                <AnswerButton onClick={confirm}>Confirm</AnswerButton>
                <AnswerButton onClick={cancel}>Cancel</AnswerButton>
              </div>
            </ConfirmModal>
          </>
        )
      )}
    </div>
  );
};

export default MainQuiz;
