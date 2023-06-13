'use client'

import StyledComponentsRegistry from '@/lib/styles/styledRegistry'

export function Providers({ children }) {
  return (
    <>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </>
  )
}
