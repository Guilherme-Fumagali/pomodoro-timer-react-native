import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import CountDown from 'react-native-countdown-component'
import { store, addTempo } from '../store/store'
import Pomodoro from '../classes/pomodoro'

export default function PomodoroTimer() {
  const pomodoro = new Pomodoro(7, 5, 6)
  const [time, setTime] = React.useState(pomodoro.etapa_atual()) 
  const [countDownId, setCountDownId] = React.useState(new Date().getTime().toString())
  const [isPlaying, setIsPlaying] = React.useState(false)

  React.useEffect(() => {
    console.log('time atualizou', time)
    setIsPlaying(false)
    const id = new Date().getTime().toString()
    setCountDownId(id)
  }, [time])  

  const handleComplete = () => {
    console.log('entrei aqui')
    pomodoro.avanca_etapa()
    setTime(pomodoro.etapa_atual())
  }

  return (
    <View style={styles.container}>
      <CountDown
        id={countDownId}
        running={isPlaying}
        onFinish={handleComplete}
        until={time}
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
