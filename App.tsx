import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { StyleSheet, View } from 'react-native'
import { store, adicionar } from './src/store/store'
import axios from 'axios'

import Titulo from './src/components/Titulo'
import PomodoroTimer from './src/components/PomodoroTimer'
import Tarefas from './src/components/Tarefas'

export default function App() {
  const [tarefas, setTarefas] = React.useState(store.getState().value.tarefas)
  store.subscribe(() => setTarefas(store.getState().value.tarefas))

  /* Exemplo de uso com API */
  React.useEffect(() => {
    const fetchTarefas = async () => {
      const { data } = await axios.get(
        'https://jsonplaceholder.cypress.io/todos?_limit=3'
      )
      data.map((element: any) => store.dispatch(adicionar(element.title)))
    }
    
    fetchTarefas()
  }, [])

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Titulo />
      <PomodoroTimer />
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
