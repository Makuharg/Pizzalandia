import { createContext, useState } from "react";

export const MyUserContext = createContext();


export const UserContext = ({children}) => {
    const [token, setToken] = useState(true)



  return (
    <MyUserContext.Provider value={{ token, setToken }}>
        {children}
    </MyUserContext.Provider>
  )
}


export default UserContext
