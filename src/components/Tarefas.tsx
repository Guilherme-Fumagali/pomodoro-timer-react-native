import React from 'react'
import { View } from 'react-native'

import Tarefa from './Tarefa'

export default function Tarefas({ tarefas }: any) {
    return (
    <View >
      {tarefas.map((tarefa:any, i:number) => (
            <Tarefa key={i} tarefa={tarefa}></Tarefa>
      ))}
    </View>
  )
}