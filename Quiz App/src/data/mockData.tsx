export interface OptionType {
  value: string;
  label: string;
}

export interface SelectOption {
  label: string;
  value: string;
  options?: OptionType[];
}

export interface QuizQuestion {
  id: number;
  questionText: string;
  options: string[];
  answer: string;
  type: "boolean" | "multiChoice";
}

export const selectOptions: SelectOption[] = [
  {
    label: "Category",
    value: "",
    options: [
      { value: "anime", label: "Anime" },
      { value: "history", label: "History" },
      { value: "music", label: "Music" },
      { value: "movies", label: "Movies" },
    ],
  },
  {
    label: "Difficulty",
    value: "",
    options: [
      { value: "easy", label: "Easy" },
      { value: "medium", label: "Medium" },
      { value: "hard", label: "Hard" },
    ],
  },
  {
    label: "Type",
    value: "",
    options: [
      { value: "multiple", label: "Multiple Choice" },
      { value: "boolean", label: "True / False" },
    ],
  },
  {
    label: "Time",
    value: "",
    options: [
      { value: "1m", label: "1 minute" },
      { value: "2m", label: "2 minutes" },
      { value: "3m", label: "3 minutes" },
    ],
  },
];

export const quizQuestion: QuizQuestion[] = [
  {
    id: 0,
    questionText: "Who says the famous phrase 'Say my Name'",
    options: ["Walter White", "Heisenberg", "Jesse Pinkman", "saul goodman"],
    answer: "Heisenberg",
    type: "multiChoice",
  },
  {
    id: 1,
    questionText:
      "When the two numbers on opposite sides of a dice are added together it always equals 7",
    options: ["True", "False"],
    answer: "True",
    type: "boolean",
  },
  {
    id: 2,
    questionText: "England last won the World Cup in 1969",
    options: ["True", "False"],
    answer: "False",
    type: "boolean",
  },
  {
    id: 3,
    questionText:
      "Whose body gained the properties of rubber after unintentionally eating a Devil Fruit?",
    options: ["Naruto", "Ichigo", "Monkey D. Luffy", "Senku Ishigami"],
    answer: "Heisenberg",
    type: "multiChoice",
  },
];
