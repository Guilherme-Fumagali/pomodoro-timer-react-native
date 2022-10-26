import * as React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Titulo() {
  return (
    <View>
      <Text style={styles.text}>Pomodoro Timer</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'monospace',
        fontSize: 26,
        fontWeight: 'bold',
        color: '#fff'
    }
})