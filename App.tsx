import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import {store} from './src/store/store'

import Titulo from './src/components/Titulo'
import Timer from './src/components/Timer'
import Tarefas from './src/components/Tarefas'

export default function App() {
  const [tarefas, setTarefas] = React.useState(store.getState().tarefas.value)
  store.subscribe(() => setTarefas(store.getState().tarefas.value))

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Titulo />
      <Timer />
      <Tarefas tarefas={tarefas} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#77bcd1',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
