import React from 'react'
import { View } from 'react-native'
import { store } from '../store/store'

import Tarefa from './Tarefa'

export default function Tarefas({ tarefas }: any) {
  const [tarefaSelecionada, setTarefaSelecionada] = React.useState(
    store.getState().selecionar.value
  )
  store.subscribe(() => setTarefaSelecionada(store.getState().selecionar.value))
  return (
    <View>
      {tarefas.map((tarefa: any, i: number) => {
        var selecao = false
        if (tarefaSelecionada === tarefa.id) selecao = true

        return  <Tarefa key={i} tarefa={tarefa} selecionado={selecao}/>
      })}
    </View>
  )
}
