import { tarefa } from '../types'
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

const tarefas: tarefa[] = [
  {
    id: 0,
    nome: 'Trabalho de sociologia',
  },
  {
    id: 1,
    nome: 'Trabalho de não sei o que o que o que o que o que o que o que o que o que o que',
  },
  {
    id: 2,
    nome: 'Trabalho de sociologia',
  },
  {
    id: 3,
    nome: 'Trabalho de não sei o que o que o que o que o que o que o que o que o que o que',
  },
]

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: {
    value: tarefas,
  },
  reducers: {
    adicionar: (state, action: PayloadAction<tarefa>) => {
      state.value.push(action.payload)
    },
    remover: (state, action: PayloadAction<tarefa>) => {
      const index = state.value.findIndex(
        (element) => element.id === action.payload.id
      )
      state.value.splice(index, 1)
    },
  },
})
export const { adicionar, remover } = tarefasSlice.actions

const selecionarSlice = createSlice({
  name: 'selecionar',
  initialState: {
    value: -1,
  },
  reducers: {
    selecionar: (state, action: PayloadAction<number>) => {
      state.value = action.payload
    },
  },
})
export const { selecionar } = selecionarSlice.actions

export const store = configureStore({
  reducer: {
    tarefas: tarefasSlice.reducer,
    selecionar: selecionarSlice.reducer
  }
})