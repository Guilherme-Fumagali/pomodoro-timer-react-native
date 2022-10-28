import { tarefa } from '../types'
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

const tarefas: tarefa[] = [
  {
    id: 0,
    nome: 'Trabalho de sociologia',
    tempo: 880,
  },
  {
    id: 1,
    nome: 'Trabalho de não sei o que o que o que o que o que o que o que o que o que o que',
    tempo: 990,
  },
]

const tarefasSlice = createSlice({
  name: 'tarefas',
  initialState: {
    value: { tarefas: tarefas, selecionado: -1 },
  },
  reducers: {
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

export const { adicionar, remover, selecionar, addTempo } = tarefasSlice.actions
export const store = configureStore(tarefasSlice)
