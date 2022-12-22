export const sumDice = (sortedRoll: number[]) => {
  return sortedRoll.reduce((acc, cur) => acc + cur);
};

export const groupDice = (sortedRoll: number[]) => {
  const group = {};
  sortedRoll.forEach((item) => {
    if (group[item] as number) {
      group[item] += 1;
    } else {
      group[item] = 1;
    }
  });

  return group;
};
