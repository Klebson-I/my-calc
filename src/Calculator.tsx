import React, {createContext} from "react";

interface CalculatorContexType {
    mathOperation : string;
    addToMathOperation:(sign:number|string) => void;
    clearMathOperation:()=>void;
    history:string[];
    addToHistory:(line:string)=>void;
    clearHistory:()=>void;
    result:number;
}
export const Calculator = () => {
    const CalculatorContex = createContext<CalculatorContexType|null>(null);

    return <CalculatorContex.Provider>

    </CalculatorContex.Provider>;
}