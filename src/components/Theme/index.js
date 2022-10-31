import * as React from 'react'
import { ThemeProvider } from 'styled-components'

import { config } from './config'

export const Theme = ({ children }) => (
  <ThemeProvider theme={config}>{children}</ThemeProvider>
)
