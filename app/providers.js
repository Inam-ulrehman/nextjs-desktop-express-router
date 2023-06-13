'use client'

import { AntRegistry } from '@/lib/styles/antRegistry'
import StyledComponentsRegistry from '@/lib/styles/styledRegistry'
import { Provider } from 'react-redux'
import store from '@/store'

export function Providers({ children }) {
  return (
    <>
      <StyledComponentsRegistry>
        <AntRegistry>
          <Provider store={store}>{children}</Provider>
        </AntRegistry>
      </StyledComponentsRegistry>
    </>
  )
}
