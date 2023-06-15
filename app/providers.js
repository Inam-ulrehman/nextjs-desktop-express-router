'use client'

import { AntRegistry } from '@/lib/styles/antRegistry'
import StyledComponentsRegistry from '@/lib/styles/styledRegistry'
import { Provider } from 'react-redux'
import store from '@/store'
import { theme } from './styles/theme'
import { App, ConfigProvider } from 'antd'

export function Providers({ children }) {
  return (
    <>
      <StyledComponentsRegistry>
        <AntRegistry>
          <ConfigProvider theme={theme}>
            <Provider store={store}>
              <App>{children}</App>
            </Provider>
          </ConfigProvider>
        </AntRegistry>
      </StyledComponentsRegistry>
    </>
  )
}
