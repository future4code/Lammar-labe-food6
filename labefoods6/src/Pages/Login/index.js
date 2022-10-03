import React, { useState } from 'react'
import {goToSignUp} from '../../Routes/Coordinator'
import { useNavigate } from 'react-router-dom'
import { useProtectPage } from "../../Hook/useProtectPage";
import { useForm } from '../../Hook/useForm'
import { BASE_URL, appName } from "../../Constants/index.js";
import { Link } from 'react-router-dom';
import axios from 'axios'
import Logo from "../../img/logo-future-eats-invert.png"
import {
    LooginPageContainer,
    FormContainer,
    InputEmail,
    LoginPageStyle,
    TextContainer,
    Container,
    Content,
    Button,
    VisualizarSenhaStyled

} from './styled'
import {BsEyeFill} from 'react-icons/bs'
import {BsEyeSlashFill} from 'react-icons/bs'

const LoginPage =()=>{
    useProtectPage()
    const navigate = useNavigate()

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    
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
  

    const [show, setShow]=useState(false)
    const handleClick = () => setShow(!show)


    return( 
        <Container>
            <Content>
                <img src={Logo} alt="Logo da empresa"/>       
                <p>Entrar</p>
                <form onSubmit={onSubmit}>                   
                    <input
                        required
                        name='email' 
                        type="email" 
                        value={form.email} 
                        onChange={onChangeInputs} 
                        placeholder="email@email.com">
                    </input>
                </form>
                <form onSubmit={onSubmit}>
                    <VisualizarSenhaStyled>
                        <input
                            required
                            name='password' 
                            type= {show? "text" : "password"}
                            value={form.password} 
                            onChange={onChangeInputs} 
                            placeholder="Mínimo 6 caracteres">
                        </input>
                       <p className='show'> {show? <BsEyeFill size="20px" onClick={handleClick} className="icone" /> : <BsEyeSlashFill size="20px" onClick={handleClick} className="icone" />} </p>
                    </VisualizarSenhaStyled>
                    <button >Entrar</button>
                </form>
                <h1>Não possui cadastro? <Link to="/signup">Clique aqui</Link></h1>
            </Content>
        </Container>
    )
}
export default LoginPage;