import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import QuizConfig from "./pages/QuizConfig/QuizConfig";
import MainQuiz from "./pages/MainQuiz/MainQuiz";
import QuizResult from "./pages/QuizResult/QuizResult";
import Statistics from "./pages/Statistics/Statistics";
import PageTransition from "./components/UI/spinners/PageTransition";

const routes = [
  { path: "/", component: QuizConfig },
  { path: "/quiz", component: MainQuiz },
  { path: "/result", component: QuizResult },
  { path: "/statistics", component: Statistics },
];

const refinedRoutes = routes.map(({ path, component }) => ({
  path,
  element: <PageTransition>{React.createElement(component)}</PageTransition>,
}));

const router = createBrowserRouter(refinedRoutes);

const App: React.FC = () => {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;
