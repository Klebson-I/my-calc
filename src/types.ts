export enum MathSign  {
    minus='-',
    plus='+',
    divide='/',
    multiply='*'
}

export interface MathObject {
    firstNumber:number;
    secondNumber:number;
    sign:MathSign;
}

export interface ReturnFromEvaluations {
    result:number;
    historyEntry:string;
}