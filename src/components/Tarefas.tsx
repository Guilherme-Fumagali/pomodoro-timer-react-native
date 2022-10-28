import React from 'react'
import { View } from 'react-native'
import { store, setTarefas } from '../store/store'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import DraggableFlatList, {
  ScaleDecorator,
  ShadowDecorator,
  OpacityDecorator,
} from 'react-native-draggable-flatlist'

import AddTarefa from './AddTarefa'
import Tarefa from './Tarefa'
import { tarefa } from '../types'

export default function Tarefas({ tarefas }: any) {
  const ref = React.useRef(null)
  const [tarefaSelecionada, setTarefaSelecionada] = React.useState(
    store.getState().value.selecionado
  )

  store.subscribe(() =>
    setTarefaSelecionada(store.getState().value.selecionado)
  )

  const renderTarefas = ({ item, drag }: any) => {
    const selecao = tarefaSelecionada === item.id ? true : false
    return (
      <ScaleDecorator>
        <OpacityDecorator>
          <ShadowDecorator>
            <Tarefa key={item.id} drag={drag} tarefa={item} selecionado={selecao} />
          </ShadowDecorator>
        </OpacityDecorator>
      </ScaleDecorator>
    )
  }

  return (
    <View style={{ alignItems: 'flex-end' }}>
      <AddTarefa />
      <GestureHandlerRootView>
        <DraggableFlatList
          ref={ref}
          data={tarefas}
          keyExtractor={(item: tarefa): string => item.id.toString()}
          onDragEnd={({ data }) => store.dispatch(setTarefas(data))}
          renderItem={renderTarefas}
        />
      </GestureHandlerRootView>
    </View>
  )
}
