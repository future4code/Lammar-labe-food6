import React, {useState} from "react"
import { Link } from "react-router-dom";
import { useForm } from "../../Hook/useForm";
import { SignupPageContainer, FormContainer  } from "../SignUp/styled";
import { BASE_URL, appName } from "../../Constants/index.js";
import { clear } from "@testing-library/user-event/dist/clear";
import axios from 'axios'

export const SignupPage=()=>{


    const [isEmailValid, setIsEmailValid] = useState(true);
    const [isNameValid, setIsNameValid] = useState(true);
    const [isCpfValid, setIsCpfValid] = useState(true);
    const [isPasswordValid, setIsPasswordValid] = useState(true);
  
    const [isPasswordConfirmValid, setPasswordConfirmaValid] = useState(true);
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        setIsEmailValid(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/.test(form.email));
        setIsNameValid(/[A-Z][a-z]* [A-Z][a-z]{2,}$/.test(form.name));
        setIsCpfValid(
          /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/.test(
            form.cpf
          )
        );
        setIsPasswordValid(/^[0-9]{6,8}$/.test(form.password));
        setPasswordConfirmaValid(passwordConfirm === form.password ? true : false);
      };


    const [ form, onChange] = useForm({
        name: "",
        email: "",
        cpf: "",
        password: "",

    })

    const userRegister = (event) => {
        event.preventDefault()

        axios.post(`${BASE_URL}/${appName}/signup`, form)
        .then((res) => {
            alert("ok")
            console.log(res.data)
        }).catch((e) =>{
            alert("Erro")
        })
        clear()
    }
    return(
         <SignupPageContainer >
            <FormContainer>
                <form onSubmit={userRegister}>
                    
                    <input 
                        name='name' 
                        type="name" 
                        value={form.name} 
                        onChange={onChange} 
                        placeholder="Nome">                        
                    </input>
                    <input  
                        name='email' 
                        type="email" 
                        value={form.email} 
                        onChange={onChange} 
                        placeholder="Email">
                    </input>
                    <input 
                        name='cpf' 
                        type="number" 
                        value={form.cpf} 
                        onChange={onChange} 
                        placeholder="CPF">                        
                    </input>
                    <input 
                        name='password' 
                        type="password" 
                        value={form.password} 
                        onChange={onChange} 
                        placeholder="Senha">                        
                    </input><br></br>
                    <button type='submit'>Criar</button>
                </form>
            </FormContainer>
        </SignupPageContainer >
    )
}

