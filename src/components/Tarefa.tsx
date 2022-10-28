import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import { selecionar, remover, store } from '../store/store'

export default function Tarefa({ tarefa, selecionado }: any) {
  const mostrarTempo = (segundos: number): string => {
    const hours = Math.floor(segundos / 3600)
    const minutes = Math.floor(segundos / 60).toString().padStart(2, '0')
    return `${hours}:${minutes}`
  }

  return (
    <View
      style={selecionado ? { ...styles.tarefa, borderWidth: 4 } : styles.tarefa}
    >
      <Text style={styles.tempo}>{mostrarTempo(tarefa.tempo)}</Text>
      <Text
        style={styles.nome}
        onPress={() => {
          store.dispatch(selecionar(tarefa.id))
        }}
      >
        {tarefa.nome}
      </Text>
      <TouchableOpacity onPress={() => store.dispatch(remover(tarefa))}>
        <Text style={styles.excluir}>X</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  tarefa: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderWidth: 1,
    width: 350,
    borderColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  nome: {
    fontFamily: 'monospace',
    fontSize: 18,
    padding: 5,
    width: 250,
  },
  tempo: {
    fontFamily: 'monospace',
    fontSize: 18,
    margin: 5,
  },
  excluir: {
    fontSize: 35,
    marginRight: 10,
  },
})
