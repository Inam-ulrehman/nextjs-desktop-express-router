'use client'

import { Button } from 'antd'
import styled from 'styled-components'

export const Test = () => {
  return (
    <Wrapper>
      <h1>Test</h1>
      <Button type='primary'>Test</Button>
      <h1>How are you </h1>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: pink;
`
