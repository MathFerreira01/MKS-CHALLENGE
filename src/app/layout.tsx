'use client'

import { QueryClientProvider } from 'react-query'
import StyledJsxRegistry from './registry'
import { queryClient } from './queryClientProvider'
import { Provider } from 'react-redux'
import store from './store'
import { GlobalStyle } from './styles/globalStyles'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <QueryClientProvider client={queryClient}>
          <StyledJsxRegistry>
            <Provider store={store}>
              {children}
              <GlobalStyle />
            </Provider>
          </StyledJsxRegistry>
        </QueryClientProvider>
      </body>
    </html>
  )
}
