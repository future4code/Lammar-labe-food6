import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { goToLogin } from "../Routes/Coordinator"

export function useProtectPage(){
    const navigate=useNavigate()
    
    const token=localStorage.getItem("token")
    
    useEffect(()=>{
        if(!token){
            goToLogin(navigate)
        }
    },[])

    
}