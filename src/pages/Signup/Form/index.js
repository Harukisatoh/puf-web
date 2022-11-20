import * as React from 'react'
import * as yup from 'yup'
import { useFormik } from 'formik'
import styled from 'styled-components'
import { Link as RouterLink } from 'react-router-dom'

import { Field, Box, Button, font, margin } from '~/components'

const Link = styled(RouterLink)`
  text-decoration: none;

  ${font}
  ${margin}
`

const validationSchema = yup.object().shape({
  name: yup.string().required('Informe o seu nome'),
  email: yup.string().required('Informe o seu e-mail').email('E-mail inválido'),
  password: yup.string().required('Digite uma senha'),
})

export const Form = ({ onSubmit }) => {
  const {
    values,
    handleChange,
    handleBlur,
    handleSubmit,
    isSubmitting,
    errors,
    touched,
  } = useFormik({
    onSubmit,
    validationSchema,
    initialValues: { name: '', email: '', password: '' },
  })

  return (
    <form onSubmit={handleSubmit}>
      <Field
        name="name"
        label="Nome"
        type="text"
        value={values.name}
        disabled={isSubmitting}
        error={touched.name && errors.name}
        onChange={handleChange}
        onBlur={handleBlur}
        mb={3}
      />
      <Field
        name="email"
        label="Email"
        type="text"
        value={values.email}
        disabled={isSubmitting}
        error={touched.email && errors.email}
        onChange={handleChange}
        onBlur={handleBlur}
        mb={3}
      />
      <Field
        name="password"
        label="Senha"
        type="password"
        value={values.password}
        disabled={isSubmitting}
        error={touched.password && errors.password}
        onChange={handleChange}
        onBlur={handleBlur}
        mb={3}
      />

      <Box flexbox="column" center>
        <Button type="submit" loading={isSubmitting} mb={1}>
          Registrar
        </Button>

        <Link to="/" mt={1} fontSize={1} color="gray" fontWeight="bold">
          Já sou cadastrado!
        </Link>
      </Box>
    </form>
  )
}
