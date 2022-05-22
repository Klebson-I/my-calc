import React from "react";


interface Props {
    className: string;
    children: React.ReactNode;
    handleClickFunction: (sign?: string | number) => void;
}

export const Button = (props: Props) => {
    return <button
        className={props.className}
        onClick={() => props.handleClickFunction()}
    >
        {props.children}
    </button>
}