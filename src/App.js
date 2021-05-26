import { createGlobalStyle } from 'styled-components'
import { TodoProvider } from './components/TodoContext'
import TodoList from './components/TodList'
import TodoCreate from './components/TodoCreate'
import TodoHead from './components/TodoHead'
import TodoTemplate from './components/TodoTemplate'

function App() {
  return (
    <TodoProvider>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
      <GlobalStyle />
    </TodoProvider>
  )
}

export default App

const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  list-style: none;
}
html,
body {
  font-size: 12px;
  background: #e9ecef;
}

`
