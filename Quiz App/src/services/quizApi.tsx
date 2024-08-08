import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Question, Configuration } from "../models/quiz";

interface Response {
  code: number;
  results: Question[];
}

export const quizApi = createApi({
  reducerPath: "quizApi",
  tagTypes: ["Config"],
  baseQuery: fetchBaseQuery({ baseUrl: "https://opentdb.com/api.php" }),
  endpoints: (build) => ({
    fetchQuestions: build.query<Question[], Configuration>({
      query: ({ amount, category, difficulty, type }) => ({
        url: "api.php",
        params: { amount, category: category.id, difficulty, type },
      }),
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: "Config" as const, id })),
              "Config",
            ]
          : ["Config"],
      transformResponse: (response: Response) => {
        if (response.results.length === 0) {
          throw new Error("Configuration does not exist");
        }
        return response.results.map((question: any) => ({
          id: question.id,
          question: question.question,
          answers: [...question.incorrect_answers, question.correct_answer],
          correctAnswer: question.correct_answer,
        }));
      },
    }),
  }),
});

export const { useFetchQuestionsQuery } = quizApi;
