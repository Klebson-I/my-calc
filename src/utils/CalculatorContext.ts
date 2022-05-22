import { createContext } from 'react';

interface CalculatorContextType {
    mathOperation: string;
    addToMathOperation: (sign: number | string) => void;
    clearMathOperation: () => void;
    history: string[];
    addToHistory: (line: string) => void;
    clearHistory: () => void;
    result: number | string;
    evaluateOperation: () => void;
    deleteLastSign: () => void;
}

export const CalculatorContext = createContext<CalculatorContextType | null>(
    null
);
