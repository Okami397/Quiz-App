import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizConfig from "./pages/QuizConfig/QuizConfig";
import MainQuiz from "./pages/MainQuiz/MainQuiz";
import QuizResult from "./pages/QuizResult/QuizResult";
import Statistics from "./pages/Statistics/Statistics";
import PageTransition from "./components/UI/spinners/PageTransition";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PageTransition>
        <QuizConfig />
      </PageTransition>
    ),
  },
  {
    path: "/quiz",
    element: (
      <PageTransition>
        <MainQuiz />
      </PageTransition>
    ),
  },
  {
    path: "/result",
    element: (
      <PageTransition>
        <QuizResult />
      </PageTransition>
    ),
  },
  {
    path: "/statistics",
    element: (
      <PageTransition>
        <Statistics />
      </PageTransition>
    ),
  },
]);

const App: React.FC = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
