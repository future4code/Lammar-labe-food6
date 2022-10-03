import React, {useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import { useForm } from "../../Hook/useForm";
import { BASE_URL, validateCPF, validateEmail, validatePassword, validateName} from "../../Constants/index.js";
import { clear } from "@testing-library/user-event/dist/clear";
import axios from 'axios'
import Logo from "../../img/logo-future-eats-invert.png"
import {
    goToCadastar
} from '../../Routes/Coordinator'

import {
    SignupContainer

} from './styled'
export const SignupPage=()=>{
    const navigate = useNavigate()

    const [ form, onChange] = useForm({
        name: "",
        email: "",
        cpf: "",
        password: "",

    })

    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isValid, setIsValid] = useState(true)
    const [isNameValid, setIsNameValid] = useState(true);
    const [isCpfValid, setIsCpfValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
    const [confirmPassword, setConfirmPassword] = useState("")
    const [errorText, setErrorText] = useState(undefined)
    

    const userRegister = (event) => {
        axios.post(`${BASE_URL}/signup`, form)
        .then((res) => {
            localStorage.setItem("token", res.data.token)
            localStorage.setItem("ProductCart", JSON.stringify([]))
            goToCadastar(navigate)
            

        }).catch((e) =>{
            setErrorText(e.response.data.message)
            setIsValid(false)
        })
        clear()
    }

    useEffect(() => {
        if (form.password === confirmPassword) {
            setIsPasswordValid(true)
        } else {
            setIsPasswordValid(false)
        }
    }, [confirmPassword, form.password])

    const onSubmit = (e) => {
        e.preventDefault();
        setIsEmailValid(validateEmail(form.email))
        setIsPasswordValid(validatePassword(form.password))
        setIsCpfValid(validateCPF(form.cpf))
        setIsNameValid(validateName(form.name))
        isEmailValid && isPasswordValid && isCpfValid && isNameValid && isPasswordValid && userRegister()  
    }
    return(
         <SignupContainer >
            <img src={Logo} />       
            <p>Cadastrar</p>

{isValid ?

<form onSubmit={onSubmit}>
    <input 
        name="name" 
        value={form.name} 
        onChange={onChange} 
        isValid={isNameValid}
        placeholder="Nome e Sobrenome"
    />
    <input
         name="email" 
         value={form.email} 
         onChange={onChange} 
         isValid={isEmailValid}
         placeholder="email@email.com"
    />
    <input 
         name="cpf" 
         value={form.cpf} 
         onChange={onChange}  
         isValid={isCpfValid}
         placeholder="000.000.000.00"
    />
    <input 
        type="password" 
        name="password" 
        value={form.password} 
        onChange={onChange} label="Senha*" 
        placeholder="Mínimo 6 caracteres"
        isValid={isPasswordValid} 
        errorMessage="A senha deve possuir no mínimo 6 caracteres"
    />
    <input 
        type="password" 
        name="password-check" 
        value={confirmPassword} 
        onChange={(e) => {setConfirmPassword(e.target.value)}} label="Confirmar*" 
        placeholder="Confirme a senha anterior" 
        isValid={confirmPassword} errorMessage="Deve ser a mesma que a anterior."
    />
    <button type='submit'>Criar</button>
</form>

: 

<form onSubmit={onSubmit}>
    <input 
        name="name" 
        value={form.name} 
        onChange={onChange}  
        isValid={isNameValid}
    />
    <input 
        name="email" 
        value={form.email} 
        onChange={onChange}  
        isValid={isEmailValid}
    />
    <input 
        name="cpf" 
        value={form.cpf} 
        onChange={onChange} 
        isValid={isCpfValid}
    />
    <input 
        type="password" 
        name="password" 
        value={form.password} 
        onChange={onChange} label="Senha*" 
        placeholder="Mínimo 6 caracteres" color="#e02020" 
        isValid={isPasswordValid} 
        errorMessage="A senha deve possuir no mínimo 6 caracteres"
    />
    <input 
        type="password" 
        name="password-check" 
        value={confirmPassword} 
        onChange={(e) => {setConfirmPassword(e.target.value)}} 
        label="Confirmar*" placeholder="Confirme a senha anterior"
        isValid={confirmPassword} 
        errorMessage="Deve ser a mesma que a anterior."/>

    {isEmailValid && isPasswordValid && isCpfValid && isNameValid && confirmPassword ? <p>{errorText}.</p> : undefined}
    <button type='submit'>Criar</button>
</form>}
        </SignupContainer>
    )
}

