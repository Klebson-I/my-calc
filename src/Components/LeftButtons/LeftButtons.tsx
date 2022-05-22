import React, {useContext} from "react";
import './LeftButtons.css';
import {CalculatorContext} from "../../utils/CalculatorContext";


export const LeftButtons = () => {
    const context = useContext(CalculatorContext);

    if(!context){
        return null;
    }

    const {clearMathOperation,addToMathOperation,deleteLastSign} = context;

    const handleAddToMathOperationClick = (sign: string) => {
        addToMathOperation(sign);
    };

    return <div className="calculatorContainer__workContainer__leftButtonsDiv">
        <button
            className="calculatorContainer__workContainer__leftButtonsDiv--375button"
            onClick={() => clearMathOperation()}
        >
            CE
        </button>
        <button
            className="calculatorContainer__workContainer__leftButtonsDiv--375button"
            onClick={()=>deleteLastSign()}
        >
            ⬅
        </button>
        <button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            onClick={() => handleAddToMathOperationClick('1')}
        >
            1
        </button>
        <button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            onClick={() => handleAddToMathOperationClick('2')}
        >
            2
        </button>
        <button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            onClick={() => handleAddToMathOperationClick('3')}
        >
            3
        </button>
        <button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            onClick={() => handleAddToMathOperationClick('4')}
        >
            4
        </button>
        <button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            onClick={() => handleAddToMathOperationClick('5')}
        >
            5
        </button>
        <button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            onClick={() => handleAddToMathOperationClick('6')}
        >
            6
        </button>
        <button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            onClick={() => handleAddToMathOperationClick('7')}
        >
            7
        </button>
        <button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            onClick={() => handleAddToMathOperationClick('8')}
        >
            8
        </button>
        <button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            onClick={() => handleAddToMathOperationClick('9')}
        >
            9
        </button>
        <button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            onClick={() => handleAddToMathOperationClick('.')}
        >
            .
        </button>
        <button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            onClick={() => handleAddToMathOperationClick('0')}
        >
            0
        </button>
        <button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            onClick={() => handleAddToMathOperationClick('+/-')}
        >
            +/-
        </button>
    </div>
}