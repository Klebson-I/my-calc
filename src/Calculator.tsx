import React, {createContext, useEffect, useState} from 'react';
import './Calculator.css';
import { evaluateResults, parseMathOperation } from './utils';
import { Keys } from './Components/Keys/Keys';

interface CalculatorContextType {
    mathOperation: string;
    addToMathOperation: (sign: number | string) => void;
    clearMathOperation: () => void;
    history: string[];
    addToHistory: (line: string) => void;
    clearHistory: () => void;
    result: number | string;
    evaluateOperation: () => void;
    deleteLastSign: () =>void;
}

export const CalculatorContext = createContext<CalculatorContextType | null>(
    null
);

export const Calculator = () => {
    const [mathOperation, setMathOperation] = useState<string>('');
    const [history, setHistory] = useState<string[]>([]);
    const [result, setResult] = useState<number | string>(0);

    const addToMathOperation = (sign: number | string) => {
        setMathOperation((prev) => prev += sign);
    };

    const clearMathOperation = () => {
        setMathOperation('');
    };

    const evaluateOperation = () => {
        const evaluationObject = parseMathOperation(mathOperation);
        const results = evaluateResults(evaluationObject);
        setResult(results.result);
        setHistory((prev) => [...prev, results.historyEntry]);
    };

    const deleteLastSign = () => {
        const temporaryMathOperation = mathOperation.slice(0,mathOperation.length-1);
        setMathOperation(temporaryMathOperation);
    }

    const addToHistory = (line: string) => {
        setHistory((prev) => [...prev, line]);
    };

    const clearHistory = () => {
        setHistory([]);
    };



    useEffect(()=> {
        setMathOperation(String(result));
    },[result])

    useEffect(()=>{
        setMathOperation("");
    },[])

    return (
        <main className="calculatorContainer">
            <CalculatorContext.Provider
                value={{
                    mathOperation,
                    addToMathOperation,
                    clearMathOperation,
                    history,
                    addToHistory,
                    clearHistory,
                    result,
                    evaluateOperation,
                    deleteLastSign
                }}
            >
                <div className="calculatorContainer__workContainer">
                    <header className="calculatorContainer__workContainer__header">
                        <h1>Calculator</h1>
                    </header>

                    <input
                        type="text"
                        className="mathInput"
                        readOnly={true}
                        value={mathOperation}
                    />

                    <Keys />
                </div>

                <div className="calculatorContainer__HistoryContainer">
                    <h2 className="calculatorContainer__HistoryContainer--h2">
                        History
                    </h2>
                    <button className="calculatorContainer__HistoryContainer--button" onClick={()=>clearHistory()}>
                        Delete history
                    </button>
                    <ul>
                        {history.map((elem, index) => (
                            <li key={index}>{elem}</li>
                        ))}
                    </ul>
                </div>
            </CalculatorContext.Provider>
        </main>
    );
};
