'use client'

import { Typography } from 'antd'
import { styled } from 'styled-components'

const LandingPage = () => {
  const { Paragraph, Title } = Typography
  return (
    <Wrapper>
      <Title>Next.js + Ant Design</Title>
      <Paragraph> This is a boilerplate for Next.js + Ant Design</Paragraph>
    </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: 100vh;
`
export default LandingPage
