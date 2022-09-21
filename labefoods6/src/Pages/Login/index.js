import React, { useState } from 'react'
import {goToSignUp} from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import { useProtectPage } from "../../Hook/useProtectPage";
import { useForm } from '../../Hook/useForm'
import { BASE_URL, appName } from "../../Constants/index.js";
import { Link } from 'react-router-dom';
import axios from 'axios'
import {
    LooginPageContainer,
    FormContainer,

} from './styled'

const LoginPage =()=>{
    useProtectPage()
    const navigate = useNavigate()

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [showPassword, setShowPassword] = useState(false);
    
    const [ form, onChangeInputs, clearInputs] = useForm({
        email: "",
        password: ""
    })

    const onClick = () => navigate("/feed");
    const onSubmit = (e) => {
        e.preventDefault();
        axios
          .post(`${BASE_URL}/login`, form)
          .then((response) => {
            console.log(response.data);
            onClick();
            localStorage.setItem("token", response.data.token);
          })
          .catch((erro) => {
            console.log("Deu erro!");
            alert("Acesso invalido");
          });
    
        clearInputs();
      };
  

    const onClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    return( 
        <LooginPageContainer>
            <FormContainer>
                <form onSubmit={onSubmit}>
                    
                    <input 
                        name='email' 
                        type="email" 
                        value={form.email} 
                        onChange={onChangeInputs} 
                        placeholder="Email"></input>
                </form>
                <form onSubmit={onSubmit}>
                    <input  
                        name='password' 
                        type="password" 
                        value={form.password} 
                        onChange={onChangeInputs} 
                        placeholder="Sen"></input><br></br>
                    <button type='submit'>Login</button>
                </form>
                <h1>Não possui cadastro? <Link to="/signup">Clique aqui</Link></h1>
            </FormContainer>
        </LooginPageContainer>
    )
}
export default LoginPage;