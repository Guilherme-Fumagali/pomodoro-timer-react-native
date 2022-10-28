import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import Titulo from './src/components/Titulo'
import Timer from './src/components/Timer'
import Tarefas from './src/components/Tarefas'

export default function App() {
  const tarefas = [
    {
      nome: 'Trabalho de sociologia',
    },
    {
      nome: 'Trabalho de não sei o que o que o que o que o que o que o que o que o que o que',
    },
  ]

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