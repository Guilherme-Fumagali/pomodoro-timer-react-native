import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { store, addTempo } from '../store/store'
import * as Progress from 'react-native-progress'
import Pomodoro from '../classes/Pomodoro'

export default function PomodoroTimer() {
  const [pomodoro] = React.useState(new Pomodoro(2, 3, 4))
  const [time, setTime] = React.useState(pomodoro.tempo_etapa_atual())
  const [key, setKey] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(false)

  React.useEffect(() => {
    setKey((prevKey) => prevKey + 1)
  }, [time])

  const handleUpdate = (remainingTime: number) => {
    store.dispatch(addTempo(1))
    if (!remainingTime) {
      pomodoro.avanca_etapa()
      setTime(pomodoro.tempo_etapa_atual())
      setIsPlaying(false)
    }
  }

  const showTime = ({ remainingTime }: any) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = (remainingTime % 60).toString().padStart(2, '0')
    return <Text style={styles.time}>{`${minutes}:${seconds}`}</Text>
  }

  console.log(pomodoro.getBreakCount())
  return (
    <View style={styles.container}>
      <Text>Progresso</Text>
      <Progress.Bar
        progress={pomodoro.getBreakCount() / 4}
        color={'black'}
        width={200}
      />
      <CountdownCircleTimer
        key={key}
        isPlaying={isPlaying}
        size={200}
        strokeWidth={10}
        strokeLinecap={'round'}
        duration={time}
        colors={'#000000'}
        onUpdate={(remainingTime) => handleUpdate(remainingTime)}
      >
        {showTime}
      </CountdownCircleTimer>
      <TouchableOpacity onPress={() => setIsPlaying((prev) => !prev)}>
        <Text style={styles.touchable}>Iniciar</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#rgba(0,0,0,0.15)',
    borderRadius: 20,
    width: 350,
    alignItems: 'center',
    padding: 18,
  },
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
