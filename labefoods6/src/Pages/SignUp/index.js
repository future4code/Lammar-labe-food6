import React, {useState, useEffect} from "react"
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom'
import { useForm } from "../../Hook/useForm";
import { SignupPageContainer, FormContainer  } from "../SignUp/styled";
import { BASE_URL, validateCPF, validateEmail, validatePassword, validateName} from "../../Constants/index.js";
import { clear } from "@testing-library/user-event/dist/clear";
import axios from 'axios'

import {
    goToCadastar
} from '../../Routes/Coordinator'

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
            alert("ok")
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
         <SignupPageContainer >
            <FormContainer>
                {/* <form onSubmit={onSubmit}>
                    
                    <input 
                        name='name' 
                        type="name" 
                        value={form.name} 
                        onChange={onChange} 
                        placeholder="Nome"
                        isValid={isNameValid}
                        >                        
                    </input>
                    <input 
                        name='email' 
                        type="email" 
                        value={form.email} 
                        onChange={onChange} 
                        placeholder="Email"
                        isValid={isEmailValid}
                        >
                    </input>
                    <input
                        name='cpf' 
                        type="number" 
                        value={form.cpf} 
                        onChange={onChange} 
                        placeholder="CPF"
                        
                        isValid={isCpfValid}>     
                                         
                    </input>
                    <input
                        name='password' 
                        type="password" 
                        value={form.password} 
                        onChange={onChange} 
                        placeholder="Senha"
                        isValid={isPasswordValid}
                        >                        
                    </input><br></br>
                    <input
                        name='password-confirm' 
                        type="password" 
                        value={confirmPassword}
                        onChange={(e) => {setConfirmPassword(e.target.value)}} label="Confirmar*" 
                        placeholder="Confirme a senha anterior"   
                        isValid={confirmPassword}
                    >
                    
                    </input>
                    <button type='submit'>Criar</button>
                </form> */}
                            {isValid ?

<form onSubmit={onSubmit}>
    <input name="name" value={form.name} onChange={onChange} color="#B8B8B8" isValid={isNameValid}/>
    <input name="email" value={form.email} onChange={onChange} color="#B8B8B8" isValid={isEmailValid}/>
    <input name="cpf" value={form.cpf} onChange={onChange} color="#B8B8B8" isValid={isCpfValid}/>
    <input type="password" name="password" value={form.password} onChange={onChange} label="Senha*" placeholder="Mínimo 6 caracteres" color="#B8B8B8" isValid={isPasswordValid} errorMessage="A senha deve possuir no mínimo 6 caracteres"/>
    <input type="password" name="password-check" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} label="Confirmar*" placeholder="Confirme a senha anterior" color="#B8B8B8" isValid={confirmPassword} errorMessage="Deve ser a mesma que a anterior."/>
    <button type='submit'>Criar</button>
</form>

: 

<form onSubmit={onSubmit}>
    <input name="name" value={form.name} onChange={onChange} color="#e02020" isValid={isNameValid}/>
    <input name="email" value={form.email} onChange={onChange} color="#e02020" isValid={isEmailValid}/>
    <input name="cpf" value={form.cpf} onChange={onChange} color="#e02020" isValid={isCpfValid}/>
    <input type="password" name="password" value={form.password} onChange={onChange} label="Senha*" placeholder="Mínimo 6 caracteres" color="#e02020" isValid={isPasswordValid} errorMessage="A senha deve possuir no mínimo 6 caracteres"/>
    <input type="password" name="password-check" value={confirmPassword} onChange={(e) => {setConfirmPassword(e.target.value)}} label="Confirmar*" placeholder="Confirme a senha anterior" color="#e02020" isValid={confirmPassword} errorMessage="Deve ser a mesma que a anterior."/>
    {isEmailValid && isPasswordValid && isCpfValid && isNameValid && confirmPassword ? <p>{errorText}.</p> : undefined}
    <button type='submit'>Criar</button>
</form>}
            </FormContainer>
        </SignupPageContainer >
    )
}

