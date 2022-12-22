export type ScoreItemType = {
  title: string;
  value: number;
  isSpecial?: boolean;
};
export type RollPoints = {
  one: number;
  two: number;
  three: number;
  four: number;
  five: number;
  six: number;
  threeOAK: number;
  fourOAK: number;
  fullHouse: number;
  smallS: number;
  largeS: number;
  chance: number;
  yahtzee: number;
};

export type DiceGroupObj = {
  [key: number]: number;
};
