import * as React from 'react'
import { useState } from 'react'
import axios from 'axios'

import { Field, Box, Button } from '~/components'

export const Signup = () => {
  const [values, setValues] = useState({})
  const [loading, setLoading] = useState(false)

  const onChange = event => {
    setValues(prev => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const onSubmit = async event => {
    event.preventDefault()

    setLoading(true)

    try {
      await axios.post('http://localhost:9901/users', values)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Box as="main" flexbox="column" flex={1} center>
      <Box style={{ width: 380 }}>
        <form onSubmit={onSubmit}>
          <Field
            name="name"
            label="Nome"
            type="text"
            disabled={loading}
            onChange={onChange}
            mb={3}
          />
          <Field
            name="email"
            label="Email"
            type="text"
            disabled={loading}
            onChange={onChange}
            mb={3}
          />
          <Field
            name="password"
            label="Senha"
            type="password"
            onChange={onChange}
            disabled={loading}
            mb={3}
          />

          <Box flexbox center>
            <Button type="submit" loading={loading}>
              Registrar
            </Button>
          </Box>
        </form>
      </Box>
    </Box>
  )
}
