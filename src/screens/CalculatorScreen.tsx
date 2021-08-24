import React from 'react'
import { Text, View } from 'react-native'
import { CalcButton } from '../components/CalcButton'
import { styles } from '../theme/appTheme'

export const CalculatorScreen = () => {
    return (
        <View style={styles.calculatorContainer}>
            <Text style={styles.tinyResult}>1,500.00</Text>
            <Text style={styles.result}>1,500.00</Text>
            <View style={styles.row}>
                <CalcButton text='C' color='lightGrey' />
                <CalcButton text='+/-' color='lightGrey' />
                <CalcButton text='%' color='lightGrey' />
                <CalcButton text='/' color='orange' />
            </View>
        </View>
    )
}
