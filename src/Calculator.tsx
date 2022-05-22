import React, {useEffect, useState} from 'react';
import './Calculator.css';
import {evaluateResults, parseMathOperation} from './utils/utils';
import {Keys} from './Components/Keys/Keys';
import {CalculatorContext} from './utils/CalculatorContext';
import {CalculatorInput} from "./Components/CalculatorInput/CalculatorInput";
import {Button} from "./Components/Button/Button";
import {HistoryList} from "./Components/HistoryList/HistoryList";

export const Calculator = () => {
    const [mathOperation, setMathOperation] = useState<string>('');
    const [history, setHistory] = useState<string[]>([]);
    const [result, setResult] = useState<number | string>(0);

    const addToMathOperation = (sign: number | string) => {
        setMathOperation((prev) => (prev += sign));
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
        const temporaryMathOperation = mathOperation.slice(
            0,
            mathOperation.length - 1
        );
        setMathOperation(temporaryMathOperation);
    };

    const addToHistory = (line: string) => {
        setHistory((prev) => [...prev, line]);
    };

    const clearHistory = () => {
        setHistory([]);
    };

    const handleAddToMathOperationClick = (sign: string) => {
        addToMathOperation(sign);
    };

    useEffect(() => {
        setMathOperation(String(result));
    }, [result]);

    useEffect(() => {
        setMathOperation('');
    }, []);

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
                    deleteLastSign,
                    handleAddToMathOperationClick
                }}
            >
                <div className="calculatorContainer__workContainer">
                    <header className="calculatorContainer__workContainer__header">
                        <h1>Calculator</h1>
                    </header>
                    <CalculatorInput/>
                    <Keys/>
                </div>

                <div className="calculatorContainer__HistoryContainer">
                    <h2 className="calculatorContainer__HistoryContainer--h2">
                        History
                    </h2>
                    <Button
                        className="calculatorContainer__HistoryContainer--button"
                        handleClickFunction={() => clearHistory()}
                    >
                        Delete history
                    </Button>
                    <HistoryList/>
                </div>
            </CalculatorContext.Provider>
        </main>
    );
};
