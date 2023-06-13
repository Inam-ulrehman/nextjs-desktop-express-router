'use client'

import { AntRegistry } from '@/lib/styles/antRegistry'
import StyledComponentsRegistry from '@/lib/styles/styledRegistry'

export function Providers({ children }) {
  return (
    <>
      <StyledComponentsRegistry>
        <AntRegistry>{children}</AntRegistry>
      </StyledComponentsRegistry>
    </>
  )
}
