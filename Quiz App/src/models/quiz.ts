export interface Question {
  id: number;
  question: string;
  answers: string[];
  correctAnswer: string;
}

export interface Configuration {
  amount: number;
  category: {
    id: number;
    value: string;
  };
  difficulty: string;
  type: string;
  time: number;
}
