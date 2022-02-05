/* eslint-disable no-eval */
import * as buttonsId from "../constants/buttonsId";
import { calcPercent } from "./calcPercent";
import { point } from "./point";
import { countUp } from "./countUp";
import { numberProtection } from "./numberProtection";
import { operationProtection } from "./operationProtection";
import { changeSign } from "./changeSign";
import { changeTextSize } from "./changeTextSize";

let countUpIsClicked = false;

export const setNumber = (event, setStr, setInput, str, input) => {
  if (event.target.id === "buttonsWrapper") return;
  setStr(
    numberProtection(str + event.target.innerHTML, countUpIsClicked, event)
  );
  countUpIsClicked = false;
  switch (event.target.id) {
    case buttonsId.CLEAN:
      setStr("");
      setInput("");
      break;
    case buttonsId.SUM:
    case buttonsId.MINUS:
    case buttonsId.MULTIPLE:
    case buttonsId.DIVIDE:
      setInput(operationProtection(input + str, event.target.innerHTML));
      setStr("");
      break;
    case buttonsId.DELETE_LAST_OPERATION:
      setStr("");
      break;
    case buttonsId.SQRT:
      const sqrt = Number(Math.sqrt(str).toFixed(7));
      setStr(sqrt);
      break;
    case buttonsId.SQUARE:
      const square = Number(Math.pow(2, str).toFixed(7));
      setStr(square);
      break;
    case buttonsId.PART_OF_A_WHOLE:
      const partOfAWhole = Number((1 / str).toFixed(7));
      setStr(partOfAWhole);
      break;
    case buttonsId.PERCENT:
      const numbers = input;
      const percent = str;
      setStr(calcPercent(percent, numbers));
      setInput("");
      break;
    case buttonsId.BACKSPACE:
      setStr(str.toString().slice(0, -1));
      break;
    case buttonsId.POINT:
      setStr(point(str));
      break;
    case buttonsId.CHANGE_SIGN:
      setStr(changeSign(str));
      break;
    case buttonsId.COUNT_UP:
      countUpIsClicked = true;
      const result = str;
      const subResult = input;
      setStr(countUp(result, subResult));
      setInput("");
      break;
    default:
      break;
  }
  changeTextSize(str);
};
