import { createContext } from "react";
import { useState } from "react";
 export const AppContext = createContext()

 const AppContextProvider = (Props) =>{
    const [user, setUser ]= useState(null);

    const value = {
        user, setUser
    }
    return (
        <AppContext.Provider value ={value}>
            {Props.children}
        </AppContext.Provider>
    )
 }

 export default AppContextProvider