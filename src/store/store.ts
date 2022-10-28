import { tarefa } from '../types'
import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'

const tarefas: tarefa[] = [
  {
    nome: 'Trabalho de sociologia',
  },
  {
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
      state.value.splice(state.value.indexOf(action.payload), 1)
    },
  },
})

export const store = configureStore(tarefasSlice)

