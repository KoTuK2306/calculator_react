export const protectionFromDoubleSigns = (inputedOperations, inputedNumber, sign) => {
  if ((inputedOperations + inputedNumber + sign).includes("--")) {
    inputedOperations = inputedOperations.slice(0, -1) + inputedNumber + sign;
    return inputedOperations;
  }
  if ((inputedOperations + inputedNumber + sign).includes("+-")) {
    inputedOperations = inputedOperations.slice(0, -1) + inputedNumber + sign;
    return inputedOperations;
  }
  //Только +- потому что минус может вылезти при клике на кнопку изменения знака, аналогично и --
  if ((inputedOperations + inputedNumber + sign).includes("." + sign)) {
    inputedOperations = inputedOperations + inputedNumber.slice(0, -1) + sign;
    return inputedOperations;
  } else return inputedOperations + inputedNumber + sign;
};
