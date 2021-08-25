/* eslint-disable prettier/prettier */
import React, { useRef, useState } from 'react'
import { Text, View } from 'react-native'
import { CalcButton } from '../components/CalcButton'
import { styles } from '../theme/appTheme'

enum Operators {
    sum, rest, multiply, divide
}

export const CalculatorScreen = () => {

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

    return (
        <View style={styles.calculatorContainer}>
            <Text style={styles.tinyResult}>{!(subTotal === '0' && total === '0') && subTotal}</Text>
            <Text style={styles.result} numberOfLines={1} adjustsFontSizeToFit>{total}</Text>
            <View style={styles.row}>
                <CalcButton text='C' color='#9B9B9B' action={clear} />
                <CalcButton text='+/-' color='#9B9B9B' action={changeSign} />
                <CalcButton text='del' color='#9B9B9B' action={deleteNum} />
                <CalcButton text='/' color='#FF9427' action={btnDivide} />
            </View>
            <View style={styles.row}>
                <CalcButton text='7' action={buildNumber} />
                <CalcButton text='8' action={buildNumber} />
                <CalcButton text='9' action={buildNumber} />
                <CalcButton text='X' color='#FF9427' action={btnMultiply} />
            </View>
            <View style={styles.row}>
                <CalcButton text='4' action={buildNumber} />
                <CalcButton text='5' action={buildNumber} />
                <CalcButton text='6' action={buildNumber} />
                <CalcButton text='-' color='#FF9427' action={btnRest} />
            </View>
            <View style={styles.row}>
                <CalcButton text='1' action={buildNumber} />
                <CalcButton text='2' action={buildNumber} />
                <CalcButton text='3' action={buildNumber} />
                <CalcButton text='+' color='#FF9427' action={btnSum} />
            </View>
            <View style={styles.row}>
                <CalcButton text='0' isBig action={buildNumber} />
                <CalcButton text='.' action={buildNumber} />
                <CalcButton text='=' color='#FF9427' action={calculate} />
            </View>
        </View>
    )
}
