import * as React from 'react'

import { Field, Box, Button } from '~/components'

export const Signup = () => {
  return (
    <Box as="main" flexbox="column" flex={1} center>
      <Box style={{ width: 380 }}>
        <Field name="name" label="Nome" type="text" mb={3} />
        <Field name="email" label="Email" type="text" mb={3} />
        <Field name="password" label="Senha" type="password" mb={3} />

        <Box flexbox center>
          <Button>Registrar</Button>
        </Box>
      </Box>
    </Box>
  )
}
