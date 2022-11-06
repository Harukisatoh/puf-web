import * as React from 'react'

import { Box } from '~/components/uikit/Box'
import { Label } from '~/components/uikit/Label'
import { Input } from '~/components/uikit/Input'

export const Field = ({ name, label, type, disabled, ...props }) => (
  <Box {...props} flexbox="column">
    <Label htmlFor={name}>{label}</Label>
    <Input type={type} name={name} id={name} disabled={disabled} />
  </Box>
)
