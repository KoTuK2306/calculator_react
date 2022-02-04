/* eslint-disable no-eval */
export const calcPercent = (percent, numbers) => {
  const sign = numbers.slice(-1);
  const equation = eval(numbers.slice(0, -1));
  let answer = 0;
  if (sign === "+" || sign === "-") {
    answer = eval(equation + sign + equation * (percent / 100));
  } else if (sign === "*" || sign === "/") {
    answer = eval(equation + sign + percent / 100);
  } else answer = percent / 100;
  return answer;
};
