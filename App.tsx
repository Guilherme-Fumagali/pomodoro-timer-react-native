import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'

import Titulo from './src/components/Titulo'
import Timer from './src/components/Timer'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Titulo />
      <Timer />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: '#d18ac3',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

/* Title */
/* Timer */
/* Tasks */
