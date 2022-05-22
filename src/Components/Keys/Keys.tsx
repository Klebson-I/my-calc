import React, { useContext } from 'react';
import './Keys.css';
import { CalculatorContext } from '../../utils/CalculatorContext';
import {LeftButtons} from "../LeftButtons/LeftButtons";

export const Keys = () => {
    const context = useContext(CalculatorContext);

    if (!context) {
        return null;
    }

    const { addToMathOperation, clearMathOperation, evaluateOperation, deleteLastSign, mathOperation } =
        context;

    const handleAddToMathOperationClick = (sign: string) => {
        addToMathOperation(sign);
    };

    const handlePlusMinusSign = () => {

    }

    return (
        <div className="keys">
            <LeftButtons/>
            <div className="calculatorContainer__workContainer__rightButtonsDiv">
                <button
                    className="calculatorContainer__workContainer__rightButtonsDiv--button"
                    onClick={() => handleAddToMathOperationClick('+')}
                >
                    +
                </button>
                <button
                    className="calculatorContainer__workContainer__rightButtonsDiv--button"
                    onClick={() => handleAddToMathOperationClick('-')}
                >
                    -
                </button>
                <button
                    className="calculatorContainer__workContainer__rightButtonsDiv--button"
                    onClick={() => handleAddToMathOperationClick('/')}
                >
                    /
                </button>
                <button
                    className="calculatorContainer__workContainer__rightButtonsDiv--button"
                    onClick={() => handleAddToMathOperationClick('*')}
                >
                    *
                </button>
                <button
                    className="calculatorContainer__workContainer__rightButtonsDiv--button"
                    onClick={() => evaluateOperation()}
                >
                    =
                </button>
            </div>
        </div>
    );
};
