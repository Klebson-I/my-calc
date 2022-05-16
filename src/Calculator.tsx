import React, {createContext, useState} from "react";
import "./Calculator.css";

interface CalculatorContextType {
    mathOperation : string;
    addToMathOperation:(sign:number|string) => void;
    clearMathOperation:()=>void;
    history:string[];
    addToHistory:(line:string)=>void;
    clearHistory:()=>void;
    result:number|string;
}
export const Calculator = () => {
    const CalculatorContex = createContext<CalculatorContextType|null>(null);
    const [mathOperation,setMathOperation] = useState<string>("");
    const [history,setHistory] = useState<string[]>([]);
    const [result,setResult] = useState<number|string>(0);

    const addToMathOperation = (sign:number|string) => {
        setMathOperation(prev=>prev+=sign);
    };

    const clearMathOperation = () => {
        setMathOperation("");
    };

    const addToHistory = (line:string) => {
        setHistory(prev=>[
            ...prev,
            line
        ]);
    };

    const clearHistory = () => {
        setHistory([]);
    }

    return <main className="calculatorContainer">
            <CalculatorContex.Provider value={{
                mathOperation,
                addToMathOperation,
                clearMathOperation,
                history,
                addToHistory,
                clearHistory,
                result
            }}>
            <div className="calculatorContainer__workContainer">
                <header className="calculatorContainer__workContainer__header">
                    <h1>Calculator</h1>
                </header>

                <input type="text" className="mathInput"/>

                <div className="keys">
                    <div className="calculatorContainer__workContainer__leftButtonsDiv">
                        <button className="calculatorContainer__workContainer__leftButtonsDiv--375button">CE</button>
                        <button className="calculatorContainer__workContainer__leftButtonsDiv--375button">⬅</button>
                        <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">1</button>
                        <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">2</button>
                        <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">3</button>
                        <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">4</button>
                        <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">5</button>
                        <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">6</button>
                        <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">7</button>
                        <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">8</button>
                        <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">9</button>
                        <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">.</button>
                        <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">0</button>
                        <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">+/-</button>
                    </div>

                    <div className="calculatorContainer__workContainer__rightButtonsDiv">
                        <button className="calculatorContainer__workContainer__rightButtonsDiv--button">+</button>
                        <button className="calculatorContainer__workContainer__rightButtonsDiv--button">-</button>
                        <button className="calculatorContainer__workContainer__rightButtonsDiv--button">/</button>
                        <button className="calculatorContainer__workContainer__rightButtonsDiv--button">*</button>
                        <button className="calculatorContainer__workContainer__rightButtonsDiv--button">=</button>
                    </div>
                </div>

            </div>


            <div className="calculatorContainer__HistoryContainer">
                <h2 className="calculatorContainer__HistoryContainer--h2">History</h2>
                <button className="calculatorContainer__HistoryContainer--button">Delete history</button>
                <ul>
                    {
                        history.map((elem,index)=><li key={index}>elem</li>)
                    }
                </ul>
            </div>

        </CalculatorContex.Provider>
    </main>
}