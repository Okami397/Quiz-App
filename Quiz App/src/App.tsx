import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizConfig from "./pages/QuizConfig/QuizConfig";
import MainQuiz from "./pages/MainQuiz/MainQuiz";
import QuizResult from "./pages/QuizResult/QuizResult";
import Statistics from "./pages/Statistics/Statistics";

const router = createBrowserRouter([
  {
    path: "/",
    element: <QuizConfig />,
  },
  {
    path: "/quiz",
    element: <MainQuiz />,
  },
  {
    path: "/result",
    element: <QuizResult />,
  },
  {
    path: "/statistics",
    element: <Statistics />,
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
