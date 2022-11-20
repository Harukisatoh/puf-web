import * as React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { useAuth } from '~/components/modules'

import { Signup } from './Signup'
import { Login } from './Login'
import { Dashboard } from './Dashboard'

const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  )
}

const LoggedInRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
    </Routes>
  )
}

export const App = () => {
  const { auth } = useAuth()

  return (
    <BrowserRouter>
      {auth?.user ? <LoggedInRoutes /> : <AuthRoutes />}
    </BrowserRouter>
  )
}
