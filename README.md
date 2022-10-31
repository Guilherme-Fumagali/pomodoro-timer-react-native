# Pomodoro Timer - react-native
A aplicação propõe uma ferramenta de gerência de tarefas com base no método [Pomodoro](https://pt.wikipedia.org/wiki/T%C3%A9cnica_pomodoro).

| Imagem 1 | Imagem 2 | 
|----------|----------|
| <img src="https://user-images.githubusercontent.com/77642873/199110788-cc4eae60-42d5-44ca-b223-d9a24c2f60d8.png" alt="drawing" width="200"/> | <img src="https://user-images.githubusercontent.com/77642873/199111216-d9155c1d-cfa1-48aa-8073-54316692986a.png" alt="drawing" width="200"/>

### Funcionalidades
- Adicionar e remover tarefas;
- Visualizar o tempo gasto em cada tarefa;
- Mover as tarefas de modo a ordená-las de acordo com o critério do usuário;  
- Barras de progresso.

# Execução com Expo
### Pré-requisitos 
- [Node.js](https://nodejs.org/en/)
- git

### Comandos
```bash
npm install -g expo-cli

git clone https://github.com/Guilherme-Fumagali/pomodoro-timer-react-native.git
cd pomodoro-timer-react-native

npm install
npm start
```


# Limitações, bugs conhecidos e próximos passos
Um problema que está acontecendo é que, quando a API está ativada, os dados estão sendo solicitados toda vez que o app é aberto.
As principais limitações são:
- Definir um tempo previsto para a tarefa;
- Configurar os tempos do método Pomodoro;
- Pular etapas do métodos Pomodoro;
- Previsão de conclusão de todas as tarefas.
Com isso, os próximos passos estão relacionados diretamente com as limitações do aplicativo.

# Critérios mínimos

### Consumir dados de alguma API
Não achei muita utilidade para uma API nesta aplicação. Por isso, por padrão, essa função se encontra desativada. Para ativá-la é preciso mudar a constante "ACESSAR_API" no arquivo App.tsx para true. Essa API devolve um arquivo JSON com algumas informações, incluindo um "title", que no contexto é usado para adicionar tarefas com o nome definido a partir deste dado.

### Utilizar [Redux](https://redux.js.org/basics/usage-with-react/) para gerenciamento de estado
Foi usado o redux para armazenar e manipular as tarefas através dos reducers. 

### Possibilidade de utilização Online/Offline com algum tipo de persistência de dados Offline;
O estado armazenado no Redux persiste offline. Assim, tarefas criadas pelo usuário persistem, incluindo o tempo gasto nelas até o momento.

### Utilizar de ao menos um componente reutilizável(genérico);
O componente "Tarefas" é reutiliável.

### [Clean Code](https://becode.com.br/clean-code/)

## Diferenciais usados:
- OOP;
- TypeScript;

