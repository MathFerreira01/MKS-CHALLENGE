'use client'

import { QueryClientProvider } from 'react-query'
import StyledJsxRegistry from './registry'
import { queryClient } from './queryClientProvider'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <QueryClientProvider client={queryClient}>
          <StyledJsxRegistry>{children}</StyledJsxRegistry>
        </QueryClientProvider>
      </body>
    </html>
  )
}
