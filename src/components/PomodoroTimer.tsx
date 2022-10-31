import React from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { CountdownCircleTimer } from 'react-native-countdown-circle-timer'
import { store, addTempoNaTarefaSelecionada } from '../store/store'
import * as Progress from 'react-native-progress'
import Pomodoro from '../classes/Pomodoro'

export default function PomodoroTimer({ setBreakTime }: any) {
  const [pomodoro] = React.useState(new Pomodoro(2, 3, 4))
  const [textInfo, setTextInfo] = React.useState('Mantenha o foco!')

  /* CountdownCircleTimer states */
  const [duracaoDoTimer, setDuracaoDoTimer] = React.useState(
    pomodoro.tempo_etapa_atual()
  )
  const [key, setKey] = React.useState(0)
  const [isPlaying, setIsPlaying] = React.useState(false)
  /* -------------------------- */

  React.useEffect(() => {
    setKey((prevKey) => prevKey + 1)
    if (pomodoro.isBreakTime()) {
      setBreakTime(true)
      setTextInfo('Break time :)')
    } else {
      setBreakTime(false)
      setTextInfo('Mantenha o foco!')
    }
  }, [duracaoDoTimer])

  const handleUpdate = (remainingTime: number) => {
    store.dispatch(addTempoNaTarefaSelecionada(1))
    if (!remainingTime) {
      pomodoro.avanca_etapa()
      setDuracaoDoTimer(pomodoro.tempo_etapa_atual())
      setIsPlaying(false)
    }
  }

  const showTime = ({ remainingTime }: any) => {
    const minutes = Math.floor(remainingTime / 60)
    const seconds = (remainingTime % 60).toString().padStart(2, '0')
    return <Text style={styles.time}>{`${minutes}:${seconds}`}</Text>
  }

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.progressText}>Progresso</Text>
        <Progress.Bar
          progress={pomodoro.getBreakCount() / 4}
          color={'#454545'}
          width={200}
        />
      </View>
      <Text style={styles.progressText}>{textInfo}</Text>
      <CountdownCircleTimer
        key={key}
        isPlaying={isPlaying}
        size={150}
        strokeWidth={2}
        trailStrokeWidth={0}
        strokeLinecap={'butt'}
        duration={duracaoDoTimer}
        colors={'#454545'}
        onUpdate={(remainingTime) => handleUpdate(remainingTime)}
      >
        {showTime}
      </CountdownCircleTimer>
      <TouchableOpacity onPress={() => setIsPlaying((prev) => !prev)}>
        <Text
          style={
            isPlaying
              ? { ...styles.touchable, marginTop: 1 }
              : { ...styles.touchable, borderWidth: 2 }
          }
        >
          Iniciar
        </Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    justifyContent: 'space-between',
    backgroundColor: 'rgba(0,0,0,0.15)',
    borderRadius: 20,
    width: '90%',
    minHeight: '33%',
    alignItems: 'center',
    padding: 8,
  },
  time: {
    fontFamily: 'monospace',
    fontSize: 46,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#454545',
  },
  touchable: {
    textAlign: 'center',
    fontFamily: 'monospace',
    fontSize: 28,
    borderWidth: 1,
    borderRadius: 10,
    padding: 4,
    borderColor: '#454545',
    color: '#454545',
  },
  progressText: {
    textAlign: 'center',
    fontFamily: 'monospace',
    color: '#454545',
    marginBottom: 3,
  },
})
