import React from 'react'
import { StyleSheet, View } from 'react-native'
import { store, setTarefas } from '../store/store'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import DraggableFlatList, {
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
      <OpacityDecorator>
        <ShadowDecorator>
          <Tarefa
            key={item.id}
            drag={drag}
            tarefa={item}
            selecionado={selecao}
          />
        </ShadowDecorator>
      </OpacityDecorator>
    )
  }

  return (
    <View style={{ alignItems: 'flex-end' }}>
      <AddTarefa />
      <GestureHandlerRootView>
        <DraggableFlatList
          style={styles.flatlist}
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

const styles = StyleSheet.create({
  flatlist: {
    maxHeight: 400,
  },
})
