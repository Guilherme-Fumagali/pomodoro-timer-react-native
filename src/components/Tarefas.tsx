import React from 'react'
import { View } from 'react-native'
import { store } from '../store/store'

import AddTarefa from './AddTarefa'
import Tarefa from './Tarefa'

export default function Tarefas({ tarefas }: any) {
  const [tarefaSelecionada, setTarefaSelecionada] = React.useState(
    store.getState().value.selecionado
  )

  store.subscribe(() =>
    setTarefaSelecionada(store.getState().value.selecionado)
  )

  const tarefasView = tarefas.map((tarefa: any, i: number) => {
    var selecao = false
    if (tarefaSelecionada === tarefa.id) selecao = true
    return <Tarefa key={i} tarefa={tarefa} selecionado={selecao} />
  })

  return (
    <View style={{ alignItems: 'flex-end' }}>
      <AddTarefa />
        <View>{tarefasView}</View>
    </View>
  )
}
