export const point = (inputedNumber, setStr) => {
  if (inputedNumber.includes(".")) return; //Если в числе уже имеется точка, больше не ставим
  if (inputedNumber.length === 0) return setStr("0."); //Если была нажата точка, а число в окне набора цифра
  //отсутствует (inputedNumber может прийти пустым в качестве аргумента), то число начинается с "0."
  return setStr(inputedNumber + ".");
};
