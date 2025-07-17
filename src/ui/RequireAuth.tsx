import React, { PropsWithChildren, ReactElement, ReactNode } from 'react'
import { useSelector } from 'react-redux'
import type { RootState } from '../app/store'
import { Navigate } from 'react-router-dom'

type RequireAuthProps = PropsWithChildren<{}>

const RequireAuth = ({ children }: RequireAuthProps): ReactElement | null => {

  const user = useSelector((store: RootState) => store.user.email)

  if (!user) {
    return <Navigate to='/signup' replace />
  }

  return <>{children}</>
}

export default RequireAuth