import React, {useContext} from "react";
import {CalculatorContext} from "../../utils/CalculatorContext";
import './HistoryList.css';

export const HistoryList = () => {
    const context = useContext(CalculatorContext);

    if (!context) {
        return null;
    }

    const {history} = context;

    return <ul className="calculatorContainer__HistoryContainer--ul">
        {history.map((elem, index) => (
            <li key={index}>{elem}</li>
        ))}
    </ul>
}