import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

interface Props {
    text: string;
    color?: string;
    isBig: boolean;
}

export const CalcButton = ({ text, color = '#2D2D2D', isBig = false }: Props) => {

    return (
        <View style={{ ...styles.button, backgroundColor: color, width: (isBig ? 170 : 80) }}>
            <Text style={{...styles.buttonText, color: (color === '#9B9B9B') ? 'black' : 'white' }}>{text}</Text>
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
    buttonText: {
        color: 'white',
        fontSize: 30,
        fontWeight: '300'
    },

});