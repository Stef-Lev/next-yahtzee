type NumToString = {
  [key: number]: string;
};

type StringToNum = {
  [key: string]: number;
};

export const numToString: NumToString = {
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
};

export const stringToNum: StringToNum = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
};
