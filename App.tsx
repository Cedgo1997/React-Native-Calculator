import React from 'react'
import { SafeAreaView, StatusBar, Text, View } from 'react-native'
import { CalculatorScreen } from './src/screens/CalculatorScreen'
import { styles } from './src/theme/appTheme'

export const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar backgroundColor="black" barStyle='light-content'>
        <CalculatorScreen />
      </StatusBar>
    </SafeAreaView>
  )
}
