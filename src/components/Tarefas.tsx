import React from 'react'
import { View, StyleSheet } from 'react-native'

import Tarefa from './Tarefa'

export default function Tarefas({ tarefas }: any) {
    return (
    <View >
      {tarefas.map((tarefa:any) => (
            <Tarefa tarefa={tarefa}></Tarefa>
      ))}
    </View>
  )
}