import React from 'react'
import {goToSignUp} from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'

const LoginPage =()=>{
    
        const navigate = useNavigate()
    
    return( 
        <>
        <h1>Entrar</h1>
        <label htmlFor='email'>Email</label>
        <input type="email" id='email'></input>
        <label htmlFor='senha'>Senha</label>
        <input type="password" id='senha'></input>  
        <button>Entrar</button>   
        Não possui cadastro? <label onClick={()=>goToSignUp(navigate)}>Clique aqui.</label>
        </>
    )
}
export default LoginPage;