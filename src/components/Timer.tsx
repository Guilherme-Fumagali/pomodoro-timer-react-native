import * as React from 'react'
import { Text, View, StyleSheet, Button } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'

export default function App() {
  const [time, setTime] = React.useState(1500)
  const [isPlaying, setIsPlaying] = React.useState(false)

  const handleComplete = () => {
    return { shouldRepeat: true, delay: 1.5 }
  }

  const showTime = ({ remainingTime }:any) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = remainingTime % 60 === 0 ? '00' : remainingTime % 60

    return <Text style={styles.time}>{`${minutes}:${seconds}`}</Text>
  }

  return (
    <View>
      <CountdownCircleTimer
        isPlaying = {isPlaying}
        size={200}
        strokeWidth={10}
        strokeLinecap={'round'}
        duration={time}
        colors={'#000000'}
        onComplete={handleComplete}
      >
        {showTime}
      </CountdownCircleTimer>
      <Button title="Start" onPress={() => setIsPlaying(prev => !prev)} />
    </View>
  )
}

const styles = StyleSheet.create({
  time: {
    fontFamily: 'monospace',
    fontSize: 36,
    fontWeight:'bold'
  }
})
