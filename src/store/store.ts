import { tarefa } from '../types'
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
}

const tarefas: tarefa[] = []

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: {
    value: { tarefas: tarefas, selecionado: -1 },
  },
  reducers: {
    setTarefas: (state, action: PayloadAction<tarefa[]>) => {
      state.value.tarefas = action.payload
    },
    adicionar: (state, action: PayloadAction<string>) => {
      const novaTarefa: tarefa = {
        id: Math.floor(Date.now() * Math.random()), /* Id "aleatório" */
        nome: action.payload,
        tempo: 0,
      }
      state.value.tarefas.unshift(novaTarefa)
    },
    remover: (state, action: PayloadAction<tarefa>) => {
      const index = state.value.tarefas.findIndex(
        (element) => element.id === action.payload.id
      )
      state.value.tarefas.splice(index, 1)
      if (state.value.selecionado === action.payload.id)
        state.value.selecionado = -1
    },
    selecionar: (state, action: PayloadAction<number>) => {
      state.value.selecionado = action.payload
    },
    addTempo: (state, action: PayloadAction<number>) => {
      if (state.value.selecionado >= 0) {
        const index = state.value.tarefas.findIndex(
          (element) => element.id === state.value.selecionado
        )
        state.value.tarefas[index].tempo += action.payload
      }
    },
  },
})

export const { adicionar, remover, selecionar, addTempo, setTarefas } = tarefasSlice.actions
export const store = configureStore(tarefasSlice)
