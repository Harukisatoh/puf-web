import * as React from 'react'
import { useState, useEffect } from 'react'

import { Theme } from '~/components'

// import { Signup } from './Signup'
import { Login } from './Login'

const Dashboard = ({ onLogout }) => {
  return (
    <div>
      Estou logado! <button onClick={onLogout}>Sair</button>
    </div>
  )
}

export const App = () => {
  const [state, setState] = useState(() => {
    const user = window.localStorage.getItem('auth')

    return JSON.parse(user) || null
  })

  useEffect(() => {
    window.localStorage.setItem('auth', JSON.stringify(state) || null)
  }, [state])

  const logout = () => {
    setState(null)
  }

  return (
    <Theme>
      {state?.user ? (
        <Dashboard onLogout={logout} />
      ) : (
        <Login onLogin={setState} />
      )}
    </Theme>
  )
}
