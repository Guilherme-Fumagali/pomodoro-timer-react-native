import React from 'react'
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
        color: '#454545',
        borderColor: '#454545',
        marginBottom: 20,
        borderTopWidth: 1,
        paddingTop: 3,
        marginTop: 10,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100
    }
})