import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

import Titulo from './src/components/Titulo'

export default function App() {
  return (
    <View style={styles.container}>
      <Titulo/>
      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d18ac3',
    alignItems: 'center',
    justifyContent: 'center',
  },
})

/* Title */
/* Timer */
/* Tasks */