/* eslint-disable prettier/prettier */
import React from 'react';
import { Text, View } from 'react-native'
import { CalcButton } from '../components/CalcButton'
import { useCalculator } from '../hooks/useCalculator'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {

    const { total, subTotal, clear, changeSign, buildNumber, deleteNum, btnDivide, btnMultiply, btnRest, btnSum, calculate } = useCalculator();

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
