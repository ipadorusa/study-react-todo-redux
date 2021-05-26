import styled, { createGlobalStyle } from 'styled-components'
import TodoList from './components/TodList'
import TodoCreate from './components/TodoCreate'
import TodoHead from './components/TodoHead'
import TodoTemplate from './components/TodoTemplate'
function App() {
  return (
    <WrapApp>
      <TodoTemplate>
        <TodoHead />
        <TodoList />
        <TodoCreate />
      </TodoTemplate>
      <GlobalStyle />
    </WrapApp>
  )
}

export default App

const WrapApp = styled.div`
  display: flex;
`
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
