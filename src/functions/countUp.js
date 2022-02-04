/* eslint-disable no-eval */
export const countUp = (result, subResult) => {
  let answer = 0;
  if (result === "" && subResult !== "") {
    answer = eval(subResult.slice(0, -1));
  } else answer = eval(subResult + result);
  return Number(answer.toFixed(7));
};
