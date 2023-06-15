'use client'

import { Typography } from 'antd'

export default function Home() {
  const { Text, Paragraph, Title } = Typography
  return (
    <main>
      <Title>Next.js + Ant Design</Title>
      <Title level={2}>How is work heading 2</Title>
      <Title level={3}>this is heading 3</Title>
      <Title level={4}>this is heading 4</Title>
      <Title level={5}>this is heading 5</Title>
      <Paragraph>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quis
        perspiciatis aperiam nostrum placeat dicta hic perferendis minus non
        libero dolores fuga, porro, totam eius!
      </Paragraph>
      <h1>Next.js + Ant Design</h1>

      <h2>How is work heading 2</h2>
      <h2>How is work heading 2</h2>
      <h3>this is heading 3</h3>
      <h4>this is heading 4</h4>
      <h5>this is heading 5</h5>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt quis
        perspiciatis aperiam nostrum placeat dicta hic perferendis minus non
        libero dolores fuga, porro, totam eius!
      </p>
    </main>
  )
}
