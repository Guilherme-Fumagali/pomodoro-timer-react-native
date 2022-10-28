import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

export default function Tarefa({ tarefa }: any) {

  return (
    <View style={styles.tarefa}>
      <Text style={styles.nome}>{tarefa.nome}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  tarefa: {
    borderWidth: 1,
    maxWidth: 350,
    borderColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  nome: {
    fontFamily: 'monospace',
    fontSize: 18,
    padding: 5
  },
})
