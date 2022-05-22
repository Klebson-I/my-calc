import React, {useContext} from "react";
import './CalculatorInput.css';
import {CalculatorContext} from "../../utils/CalculatorContext";

export const CalculatorInput = () => {
    const context = useContext(CalculatorContext);

    if (!context) {
        return null;
    }

    const {mathOperation} = context;

    return <input
        type="text"
        className="mathInput"
        readOnly={true}
        value={mathOperation}
    />
}