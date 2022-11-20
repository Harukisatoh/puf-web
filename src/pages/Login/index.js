import * as React from 'react'
import styled from 'styled-components'

import { Box, font, Logo } from '~/components'

import { Form } from './Form'
import { ReactComponent as Ilustra } from './ilustra.svg'

const Title = styled('h2')`
  ${font}
`

const CenteredBox = ({ children, ...props }) => (
  <Box {...props} flexbox="column" flex={1} center>
    <Box style={{ width: 445 }}>{children}</Box>
  </Box>
)

export const Login = () => {
  return (
    <Box flex={1} flexbox>
      <CenteredBox bg="black">
        <Logo />
        <Ilustra />
      </CenteredBox>
      <CenteredBox as="main">
        <Title textAlign="center">Login</Title>
        <Form />
      </CenteredBox>
    </Box>
  )
}
