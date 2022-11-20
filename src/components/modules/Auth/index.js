import * as React from 'react'
import { createContext, useContext, useState, useEffect } from 'react'

const AuthContext = createContext({})

export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(() => {
    const user = window.localStorage.getItem('auth')

    return JSON.parse(user) || null
  })

  useEffect(() => {
    window.localStorage.setItem('auth', JSON.stringify(auth) || null)
  }, [auth])

  const login = user => {
    setAuth(user)
  }

  const logout = () => {
    setAuth(null)
  }

  return (
    <AuthContext.Provider
      value={{
        auth,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => {
  const context = useContext(AuthContext)

  return context
}
