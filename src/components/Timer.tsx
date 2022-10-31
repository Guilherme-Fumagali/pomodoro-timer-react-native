import React from 'react'
import CountDown from 'react-native-countdown-component'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

export default function Timer({ until, handleComplete }: any) {
  const [isPlaying, setIsPlaying] = React.useState(false)

  return (
    <View>
      <CountDown
        running={isPlaying}
        onFinish={handleComplete}
        until={until}
        size={20}
        digitStyle={{ backgroundColor: 'rgba(0, 0, 0, 0)' }}
        separatorStyle={{ color: '#fff' }}
        showSeparator={true}
        digitTxtStyle={styles.time}
        timeToShow={['M', 'S']}
      />
      <TouchableOpacity onPress={() => setIsPlaying((prev) => !prev)}>
        <Text style={styles.touchable}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  time: {
    fontFamily: 'monospace',
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  touchable: {
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: 28,
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 10,
    width: 120,
  },
})
