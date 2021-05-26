import styled, { createGlobalStyle } from 'styled-components'
import TodoWrap from './components/TodoWrap'
function App() {
  return (
    <WrapApp>
      <TodoWrap />
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
}

`
