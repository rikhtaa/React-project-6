import {createContext, useEffect, useState} from "react"
import { useCookies } from "react-cookie";
import {jwtDecode} from 'jwt-decode';
export const AuthContext = createContext()

export default function AuthProvider({children}){
  const [user, setUser] = useState(null)
  const [token, setToken] = useState(null)
  const [cookie, setCookie, removeCookie] = useCookies(["jwt"])

  // const storeToken = (token)=>{
  //   const decodeToken = jwtDecode(token)
  //   setUser(decodeToken)
  // }

  const login = (tokenStr)=>{
    if(tokenStr){
      setToken(tokenStr)
      const {exp} = jwtDecode(tokenStr)
        
      if(exp){
        setCookie("jwt", tokenStr,{
          path: "/",
          maxAge: exp,
          sameSite: true,
        })
      }
      return
    }
    logout()
  }
  
  const logout = ()=>{
    setToken(null)
    setUser(null)
    removeCookie("jwt", {path: "/"})
  } 
  useEffect(() => {
    if (cookie?.jwt) {
      setToken(cookie.jwt);
      const user = jwtDecode(cookie.jwt);
      setUser(user);
    }
  }, [cookie]);
  

  return <AuthContext.Provider
  value={{
    user,
    token,
    logout,
   login,
  }}
  >
    {children}
  </AuthContext.Provider>
}
