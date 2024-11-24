import axios from "axios";
import { createContext, useEffect } from "react";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
 export const AppContext = createContext()

 const AppContextProvider = (Props) =>{
    const [user, setUser ]= useState(null);
    const [showLogin, setShowLogin] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'))

    const [credit, setCredit]= useState(false)

    const navigate = useNavigate()
    const backendUrl = import.meta.env.BACKEND_URL
    const loadCreditsData = async ()=>{
        try {
            const {data} = await axios.get('http://localhost:4000/api/user/credits', {headers:{token}})

            if(data.success){
                setCredit(data.credits)
                setUser(data.user)
            }
        } catch (error) {
            console.log(error);
      
           toast.error(error.message)
        }
    }

    const logout = ()=>{
        localStorage.removeItem('token');
        setToken('')
        setUser(null)
        
    }

    useEffect(()=>{
    if(token){
        loadCreditsData()
    }

    },[token])
   

    const generateImage = async(prompt)=>{
        try {
            const {data} = await axios.post('http://localhost:4000/api/image/generate-image', {prompt},{headers:{token}})

            if(data.success){
                loadCreditsData()
                return data.resultImage
            }else{
                toast.error(data.message)
                loadCreditsData()
                if(data.creditBalance === 0){
                    navigate('/buy')
                }
            }
        } catch (error) {
            toast.error(error.message)
        }
    }

    const value = {
        user, setUser, showLogin, setShowLogin,backendUrl, token, setToken, credit, setCredit, loadCreditsData, logout,generateImage
    }
    return (
        <AppContext.Provider value ={value}>
            {Props.children}
        </AppContext.Provider>
    )
 }

 export default AppContextProvider