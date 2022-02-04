export const numberProtection = (number, countUpIsClicked, event) => {
  if (Number(number) === 0 && !number.includes("0.")) {
    number = "";
  }
  if (countUpIsClicked === true && event.target.id === "") {
    number = event.target.innerHTML;
  }
  return number;
};
