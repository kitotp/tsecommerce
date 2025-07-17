
import React, { PropsWithChildren, ReactElement } from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import { Navigate } from 'react-router-dom'

type RequireNoAuthProps = PropsWithChildren<{}>

const RequireNoAuth = ({ children }: RequireNoAuthProps): ReactElement | null => {

    const user = useSelector((store: RootState) => store.user.email)

    if (user) {
        return <Navigate to='/' replace />
    }
    return <>{children}</>
}

export default RequireNoAuth