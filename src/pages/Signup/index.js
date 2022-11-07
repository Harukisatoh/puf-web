import * as React from 'react'
import styled from 'styled-components'

import { Box, font } from '~/components'

import { Form } from './Form'

const Title = styled('h2')`
  ${font}
`

const CenteredBox = ({ children, ...props }) => (
  <Box {...props} flexbox="column" flex={1} center>
    <Box style={{ width: 445 }}>{children}</Box>
  </Box>
)

export const Signup = () => {
  return (
    <Box flex={1} flexbox>
      <CenteredBox bg="black">Esquerdo</CenteredBox>
      <CenteredBox as="main">
        <Title textAlign="center">Cadastro</Title>
        <Form />
      </CenteredBox>
    </Box>
  )
}
