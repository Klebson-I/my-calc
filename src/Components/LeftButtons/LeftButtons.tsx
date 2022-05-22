import React, {useContext} from "react";
import './LeftButtons.css';
import {CalculatorContext} from "../../utils/CalculatorContext";
import {Button} from "../Button/Button";


export const LeftButtons = () => {
    const context = useContext(CalculatorContext);

    if(!context){
        return null;
    }

    const {clearMathOperation,addToMathOperation,deleteLastSign, handleAddToMathOperationClick} = context;


    return <div className="calculatorContainer__workContainer__leftButtonsDiv">
        <Button
            className="calculatorContainer__workContainer__leftButtonsDiv--375button"
            handleClickFunction={clearMathOperation}
        >
            CE
        </Button>
        <button
            className="calculatorContainer__workContainer__leftButtonsDiv--375button"
            onClick={() => deleteLastSign()}
        >
            ⬅
        </button>
        <Button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            handleClickFunction={() => handleAddToMathOperationClick("1")}
        >
            1
        </Button>
        <Button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            handleClickFunction={() => handleAddToMathOperationClick('2')}
        >
            2
        </Button>
        <Button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            handleClickFunction={() => handleAddToMathOperationClick('3')}
        >
            3
        </Button>
        <Button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            handleClickFunction={() => handleAddToMathOperationClick('4')}
        >
            4
        </Button>
        <Button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            handleClickFunction={() => handleAddToMathOperationClick('5')}
        >
            5
        </Button>
        <Button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            handleClickFunction={() => handleAddToMathOperationClick('6')}
        >
            6
        </Button>
        <Button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            handleClickFunction={() => handleAddToMathOperationClick('7')}
        >
            7
        </Button>
        <Button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            handleClickFunction={() => handleAddToMathOperationClick('8')}
        >
            8
        </Button>
        <Button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            handleClickFunction={() => handleAddToMathOperationClick('9')}
        >
            9
        </Button>
        <Button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            handleClickFunction={() => handleAddToMathOperationClick('.')}
        >
            .
        </Button>
        <Button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            handleClickFunction={() => handleAddToMathOperationClick('0')}
        >
            0
        </Button>
        <Button
            className="calculatorContainer__workContainer__leftButtonsDiv--25button"
            handleClickFunction={() => handleAddToMathOperationClick('+/-')}
        >
            +/-
        </Button>
    </div>
}