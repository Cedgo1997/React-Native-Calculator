/* eslint-disable prettier/prettier */
import { useRef, useState } from 'react';

enum Operators {
    sum, rest, multiply, divide
}

export const useCalculator = () => {
    const [total, setTotal] = useState('0');
    const [subTotal, setSubTotal] = useState('0');

    const lastOperation = useRef<Operators>();

    const clear = () => {
        setTotal('0');
        setSubTotal('0');
    };

    const buildNumber = (textNumber: string) => {

        total === '0'
            ? textNumber === '.'
                ? setTotal(total + textNumber)
                : setTotal(textNumber)
            : total.includes('.')
                ? textNumber === '.'
                    ? false
                    : setTotal(total + textNumber)
                : setTotal(total + textNumber);
    };

    const changeSign = () => {
        total !== '0' && (total.includes('-') ? setTotal(total.replace('-', '')) : setTotal('-' + total));
    };

    const deleteNum = () => {
        if (total.length > 1 && total !== '0') {
            if (total.length === 2 && total.includes('-')) {
                setTotal('0');
            } else {
                setTotal(total.slice(0, -1));
            }
        } else {
            setTotal('0');
        }
    };

    const passToSubtotal = () => {
        if (total.endsWith('.')) {
            setSubTotal(total.slice(0, -1));
        } else {
            setSubTotal(total);
        }
        setTotal('0');
    };

    const btnDivide = () => {
        passToSubtotal();
        lastOperation.current = Operators.divide;
    };
    const btnMultiply = () => {
        passToSubtotal();
        lastOperation.current = Operators.multiply;
    };
    const btnRest = () => {
        passToSubtotal();
        lastOperation.current = Operators.rest;
    };
    const btnSum = () => {
        passToSubtotal();
        lastOperation.current = Operators.sum;
    };

    const calculate = () => {
        const num1 = Number(total);
        const num2 = Number(subTotal);
        switch (lastOperation.current) {
            case Operators.sum:
                setTotal(`${num1 + num2}`);
                break;
            case Operators.rest:
                setTotal(`${-(num1 - num2)}`);
                break;
            case Operators.multiply:
                setTotal(`${num1 * num2}`);
                break;
            case Operators.divide:
                setTotal(`${num2 / num1}`);
                break;
            default:
                break;
        }
        setSubTotal('0');
    };

    return {
        total,
        subTotal,
        clear,
        buildNumber,
        changeSign,
        deleteNum,
        btnDivide,
        btnMultiply,
        btnRest,
        btnSum,
        calculate,
    };
};
