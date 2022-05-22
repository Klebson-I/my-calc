import React, {useContext} from "react";
import './RightButtons.css';
import {CalculatorContext} from "../../utils/CalculatorContext";
import {Button} from "../Button/Button";

export const RightButtons = () => {
    const context = useContext(CalculatorContext);

    if(!context) {
        return null;
    }

    const {evaluateOperation,handleAddToMathOperationClick} =context;


    return <div className="calculatorContainer__workContainer__rightButtonsDiv">
        <Button
            className="calculatorContainer__workContainer__rightButtonsDiv--button"
            handleClickFunction={() => handleAddToMathOperationClick('+')}
        >
            +
        </Button>
        <Button
            className="calculatorContainer__workContainer__rightButtonsDiv--button"
            handleClickFunction={() => handleAddToMathOperationClick('-')}
        >
            -
        </Button>
        <Button
            className="calculatorContainer__workContainer__rightButtonsDiv--button"
            handleClickFunction={() => handleAddToMathOperationClick('/')}
        >
            /
        </Button>
        <Button
            className="calculatorContainer__workContainer__rightButtonsDiv--button"
            handleClickFunction={() => handleAddToMathOperationClick('*')}
        >
            *
        </Button>
        <Button
            className="calculatorContainer__workContainer__rightButtonsDiv--button"
            handleClickFunction={() => evaluateOperation()}
        >
            =
        </Button>
    </div>
}