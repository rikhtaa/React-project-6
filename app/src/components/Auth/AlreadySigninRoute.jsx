import React from "react";
import { Navigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const AlreadySigninRoute = ({children}) => {
  const {token} = useAuth()
  console.log(token)
  return <>{!token ? children : <Navigate to="/" />}</>
}

export default AlreadySigninRoute