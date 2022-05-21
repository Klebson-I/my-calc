import {MathObject, MathSign, ReturnFromEvaluations} from "./types";

const findNumberFromString = (mathOperationStringArray:string[]) => {
    const arr : string[] = [];
    for (let i = 0 ;i<mathOperationStringArray.length;i++) {
        if(mathOperationStringArray[i]==="-"&&i===0) {
            arr.push(mathOperationStringArray[i]);
        }
        else if(!Number.isNaN(Number(mathOperationStringArray[i])) || mathOperationStringArray[i]==="."){
            arr.push(mathOperationStringArray[i]);
        }
        else{
            break;
        }
    }
    return arr;
}

export const parseMathOperation = (mathOperation:string) : MathObject => {
    const mathOperationStringArray = mathOperation.split("");
    let typeOfOperation:MathSign = MathSign.minus;

    //find first number
    const firstNumberArr = findNumberFromString(mathOperationStringArray);
    mathOperationStringArray.splice(0,firstNumberArr.length);

    //sign

    if(mathOperationStringArray[0]==="-") typeOfOperation=MathSign.minus;
    if(mathOperationStringArray[0]==="+") typeOfOperation=MathSign.plus;
    if(mathOperationStringArray[0]==="/") typeOfOperation=MathSign.divide;
    if(mathOperationStringArray[0]==="*") typeOfOperation=MathSign.multiply;

    mathOperationStringArray.splice(0,1);

    //find second number
    const secondNumberArr = findNumberFromString(mathOperationStringArray);

    return {
        firstNumber: Number(firstNumberArr.join("")),
        secondNumber: Number(secondNumberArr.join("")),
        sign: typeOfOperation,
    }
}

export const evaluateResults = (mathOperation:MathObject) : ReturnFromEvaluations => {
    const {firstNumber,secondNumber,sign} = mathOperation;
    let result = 0;
    let historyEntry = "";

    switch (sign) {
        case MathSign.multiply:{
            result = firstNumber*secondNumber;
            historyEntry = `${firstNumber} ${MathSign.multiply} ${secondNumber} = ${result.toFixed(3)}`;
            break;
        }
        case MathSign.divide: {
            result = firstNumber/secondNumber;
            historyEntry = `${firstNumber} ${MathSign.divide} ${secondNumber} = ${result.toFixed(3)}`;
            break;
        }
        case MathSign.minus:{
            result = firstNumber-secondNumber;
            historyEntry = `${firstNumber} ${MathSign.minus} ${secondNumber} = ${result.toFixed(3)}`;
            break;
        }
        case MathSign.plus:{
            result = firstNumber+secondNumber;
            historyEntry = `${firstNumber} ${MathSign.plus} ${secondNumber} = ${result.toFixed(3)}`;
            break;
        }
        default:break;
    }

    return {
        result:Number(result.toFixed(3)),
        historyEntry
    }
}