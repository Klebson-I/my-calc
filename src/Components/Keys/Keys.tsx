import React from "react";
import './Keys.css';

export const Keys=()=>{
    return <div className="keys">
        <div className="calculatorContainer__workContainer__leftButtonsDiv">
            <button className="calculatorContainer__workContainer__leftButtonsDiv--375button">
                CE
            </button>
            <button className="calculatorContainer__workContainer__leftButtonsDiv--375button">
                ⬅
            </button>
            <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">
                1
            </button>
            <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">
                2
            </button>
            <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">
                3
            </button>
            <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">
                4
            </button>
            <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">
                5
            </button>
            <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">
                6
            </button>
            <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">
                7
            </button>
            <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">
                8
            </button>
            <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">
                9
            </button>
            <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">
                .
            </button>
            <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">
                0
            </button>
            <button className="calculatorContainer__workContainer__leftButtonsDiv--25button">
                +/-
            </button>
        </div>

        <div className="calculatorContainer__workContainer__rightButtonsDiv">
            <button className="calculatorContainer__workContainer__rightButtonsDiv--button">
                +
            </button>
            <button className="calculatorContainer__workContainer__rightButtonsDiv--button">
                -
            </button>
            <button className="calculatorContainer__workContainer__rightButtonsDiv--button">
                /
            </button>
            <button className="calculatorContainer__workContainer__rightButtonsDiv--button">
                *
            </button>
            <button className="calculatorContainer__workContainer__rightButtonsDiv--button">
                =
            </button>
        </div>
    </div>
}