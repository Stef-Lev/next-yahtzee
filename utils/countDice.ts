import { DiceGroupObj } from "../types/types";

export const sumDice = (sortedRoll: number[]) => {
  return sortedRoll.reduce((acc, cur) => acc + cur);
};

export const groupDice = (sortedRoll: (number | string)[]) => {
  const group: DiceGroupObj = {};
  sortedRoll.forEach((item: number | string) => {
    if (group[item as number]) {
      group[item as number] += 1;
    } else {
      group[item as number] = 1;
    }
  });

  return group;
};
