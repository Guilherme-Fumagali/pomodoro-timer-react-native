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
    if (nomeDaTarefa.length) store.dispatch(adicionar(nomeDaTarefa))
    setNomeDaTarefa('') //apaga input digitado
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={nomeDaTarefa}
          onChangeText={(text) => {
            setNomeDaTarefa(text)
          }}
          placeholder="Adicionar tarefa"
        />
        <TouchableOpacity onPress={handlePress}>
          <Text style={styles.plus}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    minWidth: '90%',
  },

  inputContainer: {
    position: 'relative',
    left: '400%',
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    maxWidth: '55%',
    borderBottomWidth: 1,
  },
  input: {
    fontFamily: 'monospace',
    fontSize: 18,
    paddingLeft: 10,
    width: '90%',
  },
  plus: {
    fontFamily: 'monospace',
    fontSize: 36,
  },
})
