import { tarefa } from '../types'
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

const tarefas: tarefa[] = [
  {
    id: 0,
    nome: 'Trabalho de sociologia',
    tempo: 0
  },
  {
    id: 1,
    nome: 'Trabalho de não sei o que o que o que o que o que o que o que o que o que o que',
    tempo:0
  },
  {
    id: 2,
    nome: 'Trabalho de sociologia',
    tempo:0
  },
  {
    id: 3,
    nome: 'Trabalho de não sei o que o que o que o que o que o que o que o que o que o que',
    tempo:0
  },
]

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: {
    value: {tarefas: tarefas, selecionado: -1},
  },
  reducers: {
    adicionar: (state, action: PayloadAction<tarefa>) => {
      state.value.tarefas.push(action.payload)
    },
    remover: (state, action: PayloadAction<tarefa>) => {
      const index = state.value.tarefas.findIndex(
        (element) => element.id === action.payload.id
      )
      state.value.tarefas.splice(index, 1)
    },
    selecionar: (state, action: PayloadAction<number>) => {
      state.value.selecionado = action.payload
    },
    addTempo: (state, action: PayloadAction<number>) => {
      if(state.value.selecionado >= 0)
        state.value.tarefas[state.value.selecionado].tempo += 1
    }, 
   },
})
export const { adicionar, remover, selecionar, addTempo } = tarefasSlice.actions

export const store = configureStore(tarefasSlice)