import { useState } from 'react'
import styled from 'styled-components'

function TodoWrap() {
  const [input, setInput] = useState('')
  const changeInput = (e) => {
    setInput(e.target.value)
  }
  return (
    <div>
      <WrapInput>
        <input type="text" value={input} onChange={changeInput} />
        <SubmitBtn type="button">등록</SubmitBtn>
      </WrapInput>
      <TodoList>
        <li>
          <label for="id_aa">
            <input type="checkbox" id="id_aa" />
            <span>text</span>
          </label>
          <button type="button">수정</button>
          <button type="button">삭제</button>
        </li>
      </TodoList>
    </div>
  )
}

export default TodoWrap

const WrapInput = styled.div`
  display: flex;
  margin: 3rem;
  align-items: center;
  input {
    border: 1px solid blue;
    width: 200px;
    height: 30px;
  }
`
const SubmitBtn = styled.button`
  width: 50px;
  height: 30px;
`
const TodoList = styled.ul`
  display: flex;
  margin: 3rem;
  align-items: center;
`
