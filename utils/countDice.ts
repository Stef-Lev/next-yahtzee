import { DiceGroupObj } from "../types/types";

export const sumDice = (sortedRoll: number[]) => {
  return sortedRoll.reduce((acc, cur) => acc + cur);
};

export const groupDice = (sortedRoll: number[]) => {
  const group: DiceGroupObj = {};
  sortedRoll.forEach((item: number) => {
    if (group[item]) {
      group[item] += 1;
    } else {
      group[item] = 1;
    }
  });

  return group;
};
