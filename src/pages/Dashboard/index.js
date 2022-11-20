import * as React from 'react'

import { useAuth } from '~/components/modules'

export const Dashboard = () => {
  const { logout } = useAuth()

  return (
    <div>
      Estou logado! <button onClick={logout}>Sair</button>
    </div>
  )
}
