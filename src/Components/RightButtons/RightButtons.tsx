import React, {useContext} from "react";
import './RightButtons.css';
import {CalculatorContext} from "../../utils/CalculatorContext";

export const RightButtons = () => {
    const context = useContext(CalculatorContext);

    if(!context) {
        return null;
    }

    const {evaluateOperation,handleAddToMathOperationClick} =context;


    return <div className="calculatorContainer__workContainer__rightButtonsDiv">
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
}