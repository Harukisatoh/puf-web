import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from './GlobalStyle'
import { config } from './config'

export const Theme = ({ children }) => (
  <ThemeProvider theme={config}>
    <GlobalStyle bg="raisinBlack" color="white" fontSize={3} />
    {children}
  </ThemeProvider>
)
