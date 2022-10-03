import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useProtectPage } from "../../Hook/useProtectPage";
import { useForm } from '../../Hook/useForm'
import { BASE_URL } from "../../Constants/index.js";
import { Link } from 'react-router-dom';
import axios from 'axios'
import Logo from "../../img/logo-future-eats-invert.png"
import {
    Container,
    Content
} from './styled'

const LoginPage =()=>{
    useProtectPage()
    const navigate = useNavigate()

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
  

    return( 

            <Container>
                <Content>
            <img src={Logo} />       
            <p>Entrar</p>
   
                <form onSubmit={onSubmit}>                   
                    <input
                        name='email' 
                        type="email" 
                        value={form.email} 
                        onChange={onChangeInputs} 
                        placeholder="email@email.com">
                    </input>
                </form>
                <form onSubmit={onSubmit}>
                    <input  
                        name='password' 
                        type="password" 
                        value={form.password} 
                        onChange={onChangeInputs} 
                        placeholder="Mínimo 6 caracteres">
                    </input><br></br>
                    <button>Entrar</button>
                </form>
                <h1>Não possui cadastro? <Link to="/signup">Clique aqui</Link></h1>
                </Content>
                </Container>
    )
}
export default LoginPage;