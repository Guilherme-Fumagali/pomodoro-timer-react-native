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
      style={
        selecionado
          ? { ...styles.tarefa, borderWidth: 3 }
          : { ...styles.tarefa, margin: 3 }
      }
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
      <TouchableOpacity activeOpacity={0} onPressIn={drag} style={styles.moverArea}>
        <Text style={styles.tempo}>{mostrarTempo(tarefa.tempo)}</Text>
        <Text style={styles.mover}>⁝⁝</Text>
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
    width: '90%',
    borderColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 10,
  },
  nome: {
    fontFamily: 'monospace',
    fontSize: 18,
    fontWeight: 'bold',
    padding: 3,
    width: '65%',
  },
  tempo: {
    fontFamily: 'monospace',
    fontSize: 18,
  },
  excluir: {
    fontSize: 30,
    margin: 0,
    marginLeft: 10,
    fontWeight: '300',
  },
  mover: {
    fontSize: 35,
    color: 'rgba(0,0,0,0.3)',
    paddingRight: 5
  },
  moverArea: {
    flex: 0,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '20%',
    alignItems: 'center',
    alignSelf: 'center',
  }
})
