import * as React from 'react'
import styled from 'styled-components'

import { th, margin } from '~/components/Theme/styled'
import { Spinner } from '~/components/uikit/Spinner'

const StyledButton = styled('button')`
  background: ${th.color('white')};
  border: none;
  border-radius: 200px;
  color: ${th.color('black')};
  padding: ${th.space(2)}px ${th.space(8)}px;
  outline: none;

  ${({ disabled }) => disabled && 'opacity: 0.5;'}
  ${margin}
`

export const Button = ({ children, disabled, loading, ...props }) => (
  <StyledButton {...props} disabled={disabled || loading}>
    {loading ? <Spinner /> : children}
  </StyledButton>
)
