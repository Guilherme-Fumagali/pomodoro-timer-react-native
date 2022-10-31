import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from 'react-native'
import { selecionar, remover, store } from '../store/store'

export default function Tarefa({ tarefa, selecionado, drag }: any) {
  const mostrarTempo = (segundos: number): string => {
    const hours = Math.floor(segundos / 3600)
    const minutes = Math.floor(segundos / 60)
      .toString()
      .padStart(2, '0')
    return `${hours}:${minutes}`
  }

  return (
    <View
      style={selecionado ? { ...styles.tarefa, borderWidth: 4 } : {...styles.tarefa, margin:4}}
    >
      <TouchableOpacity onPress={() => store.dispatch(remover(tarefa))}>
        <Text style={styles.excluir}>X</Text>
      </TouchableOpacity>
      <Text
        style={styles.nome}
        onPress={() => {
          store.dispatch(selecionar(tarefa.id))
        }}
      >
        {tarefa.nome}
      </Text>
      <Text style={styles.tempo}>{mostrarTempo(tarefa.tempo)}</Text>
      <Text style={styles.mover} onLongPress={drag}>
        ⁝⁝
      </Text>
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
    fontWeight: 'bold',
    padding: 5,
    width: 250,
  },
  tempo: {
    fontFamily: 'monospace',
    fontSize: 18,
    marginRight: 8,
    marginLeft: 5
  },
  excluir: {
    fontSize: 30,
    margin: 0,
    marginLeft: 10,
    fontWeight: '300'
  },
  mover: {
    fontSize: 35,
    marginRight: 8,
    color: 'rgba(0,0,0,0.3)',
  },
})
