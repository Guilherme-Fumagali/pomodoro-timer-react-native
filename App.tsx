import React from 'react'
import { StyleSheet } from 'react-native'
import { store, adicionar } from './src/store/store'
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated'
import api from './src/service/api'

import { StatusBar } from 'expo-status-bar'
import Titulo from './src/components/Titulo'
import PomodoroTimer from './src/components/PomodoroTimer'
import Tarefas from './src/components/Tarefas'

export default function App() {
  const [breakTime, setBreakTime] = React.useState(false)
  const [tarefas, setTarefas] = React.useState(store.getState().value.tarefas)
  store.subscribe(() => setTarefas(store.getState().value.tarefas))

  const ACESSAR_API = false

  /* Exemplo de uso com API durante a renderização do app */
  React.useEffect(() => {
    const fetchTarefas = async () => {
      const { data } = await api.get(
        '/todos?_limit=3'
      )
      data.map((element: any) => store.dispatch(adicionar(element.title)))
    }
    
    if(ACESSAR_API)
      fetchTarefas()
  }, []) 

  const progress = useDerivedValue(() => {
    return withTiming(breakTime ? 1 : 0, { duration: 1000 })
  })

  const rStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      ['#d5c7bc', '#93b7be']
    )

    return {
      backgroundColor,
    }
  })

  return (
    <Animated.View style={[styles.container, rStyle]}>
      <StatusBar style='auto' />
      <Titulo/>
      <PomodoroTimer setBreakTime={setBreakTime} />
      <Tarefas tarefas={tarefas} />
    </Animated.View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
