export const operationProtection = (num, sign) => {
  if (isNaN(Number(num.slice(-1)))) {
    num = num.slice(0, -1);
  }
  if (num.includes("--")) {
    num = num.replace("--", "-");
  }
  if (num.includes("+-")) {
    num = num.replace("+-", "-");
  }
  if (num.includes("." + sign)) {
    num = num.replace("." + sign, sign);
  }
  return num + sign;
};
