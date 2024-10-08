export interface OptionType {
  value: string | number;
  id?: number;
}

export interface SelectOption {
  label: string;
  value: string | number;
  options?: OptionType[];
}

export const selectOptions: SelectOption[] = [
  {
    label: "Category",
    value: "",
    options: [
      { id: 9, value: "General Knowledge" },
      { id: 10, value: "Entertainment: Books" },
      { id: 11, value: "Entertainment: Film" },
      { id: 12, value: "Entertainment: Music" },
      { id: 13, value: "Entertainment: Musicals & Theatres" },
      { id: 14, value: "Entertainment: Television" },
      { id: 15, value: "Entertainment: Video Games" },
      { id: 16, value: "Entertainment: Board Games" },
      { id: 17, value: "Science & Nature" },
      { id: 18, value: "Science: Computers" },
      { id: 19, value: "Science: Mathematics" },
      { id: 20, value: "Mythology" },
      { id: 21, value: "Sports" },
      { id: 22, value: "Geography" },
      { id: 23, value: "History" },
      { id: 24, value: "Politics" },
      { id: 25, value: "Art" },
      { id: 26, value: "Celebrities" },
      { id: 27, value: "Animals" },
      { id: 28, value: "Vehicles" },
      { id: 29, value: "Entertainment: Comics" },
      { id: 30, value: "Science: Gadgets" },
      { id: 31, value: "Entertainment: Japanese Anime & Manga" },
      { id: 32, value: "Entertainment: Cartoon & Animations" },
    ],
  },
  {
    label: "Difficulty",
    value: "",
    options: [{ value: "easy" }, { value: "medium" }, { value: "hard" }],
  },
  {
    label: "Type",
    value: "",
    options: [{ value: "multiple" }, { value: "boolean" }],
  },
  {
    label: "Time",
    value: "",
    options: [{ value: 60 }, { value: 120 }, { value: 180 }],
  },
];
