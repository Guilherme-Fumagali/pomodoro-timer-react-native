import {
  TextInput,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native'
import React from 'react'
import { store, adicionar } from '../store/store'

export default function AddTarefa() {
  const [nomeDaTarefa, setNomeDaTarefa] = React.useState('')

  const handlePress = () => {
    if(nomeDaTarefa.length)
      store.dispatch(adicionar(nomeDaTarefa))
    setNomeDaTarefa('')
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} value={nomeDaTarefa} onChangeText={text => {setNomeDaTarefa(text)}} placeholder="Adicionar tarefa" />
      <TouchableOpacity onPress={handlePress}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: 200,
    borderBottomWidth: 1,
  },
  input: {
    fontFamily: 'monospace',
    fontSize: 18,
    paddingLeft: 10,
    width: 180,
  },
  plus: {
    fontFamily: 'monospace',
    fontSize: 36,
  }
})
