import * as React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

import { Box, font, Logo } from '~/components'
import { useAuth } from '~/components/modules'

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

export const Signup = () => {
  const navigate = useNavigate()

  const { login: setAuth } = useAuth()

  const onSubmit = async values => {
    try {
      const res = await axios.post('http://localhost:9901/users', values)

      setAuth({ user: res.data })
      navigate('/', { replace: true })
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Box flex={1} flexbox>
      <CenteredBox bg="black">
        <Logo />
        <Ilustra />
      </CenteredBox>
      <CenteredBox as="main">
        <Title textAlign="center">Cadastro</Title>
        <Form onSubmit={onSubmit} />
      </CenteredBox>
    </Box>
  )
}
