import React from 'react'
import "./button.css"

const number = (val) => {
    return !isNaN(val) || val === "←" || val === ".";
}

const ac = (val) => {
    return val === "AC" || val === "←";
}

const equal = (val) => {
    return val === "=";
}

const bigFont = (val) => {
    return val === "←" || val === "+" || val === "-" || val === "×" || val === "=" || val === "÷";
}

export const Button = props => (
    <div className={`button ${number(props.children) ? null : "number"} ${ac(props.children) ? "ac" : null} ${equal(props.children) ? "equal" : null} ${bigFont(props.children) ? "big-font" : null}`} onClick={() => props.click(props.children)}>
        {props.children}
    </div>
);