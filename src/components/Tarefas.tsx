import React from 'react'
import { StyleSheet, View } from 'react-native'
import { store, setTarefas, persistor } from '../store/store'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import DraggableFlatList, {
  ShadowDecorator,
  OpacityDecorator,
} from 'react-native-draggable-flatlist'
import { PersistGate  } from 'redux-persist/integration/react'

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
    <View style={styles.container}>
      <AddTarefa />
      <GestureHandlerRootView>
        <PersistGate loading={null} persistor={persistor}>
        <DraggableFlatList
          style={styles.flatlist}
          ref={ref}
          data={tarefas}
          keyExtractor={(item: tarefa): string => item.id.toString()}
          onDragEnd={({ data }) => store.dispatch(setTarefas(data))}
          renderItem={renderTarefas}
        />
        </PersistGate>
      </GestureHandlerRootView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '55%',
  },
  flatlist: {
    minWidth: '90%'
  },
})
