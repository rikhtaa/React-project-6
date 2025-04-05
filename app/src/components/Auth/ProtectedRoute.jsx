import { Navigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"

const ProtectedRoute = ({children}) => {
  const {token} = useAuth()
  console.log(token)
  return <>{token ? children : <Navigate to="/signin" />}</>
}

export default ProtectedRoute