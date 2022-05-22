import React, {useContext} from 'react';
import './Keys.css';
import {CalculatorContext} from '../../utils/CalculatorContext';
import {LeftButtons} from "../LeftButtons/LeftButtons";
import {RightButtons} from "../RightButtons/RightButtons";

export const Keys = () => {
    const context = useContext(CalculatorContext);

    if (!context) {
        return null;
    }

    const { addToMathOperation, clearMathOperation, evaluateOperation, deleteLastSign, mathOperation } =
        context;

    return (
        <div className="keys">
            <LeftButtons/>
            <RightButtons/>
        </div>
    );
};
