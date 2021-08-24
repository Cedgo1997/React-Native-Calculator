import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    text: string;
    color?: string;
}

export const CalcButton = ({ text, color = 'default' }: Props) => {

    return (
        <View style={
            color === 'default'
                ? styles.button
                : { ...styles.button, ...styles[color] }
        }>
            <Text style={styles.buttonText}>{text}</Text>
        </View >
    )
}

const styles = StyleSheet.create({
    button: {
        height: 80,
        width: 80,
        borderRadius: 100,
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 4,
        backgroundColor: '#2D2D2D',
    },
    lightGrey: {
        backgroundColor: '#9B9B9B',
        color: 'black'
    },
    orange: {
        backgroundColor: '#FF9427',
    },
    buttonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '300'
    },

});