import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from "../../Hook/useForm"
import { toast } from "react-toastify";
import axios from "axios";
import { BASE_URL } from "../../Constants";
import { DivFundoResultado as DivFundoEditar } from "../Resultado/styled";
import { Header } from "../../Components/Header/Header";
import { InputStyled } from "../../Components/Inputs/Endereco/Styled";
import { NameInput } from "../../Components/Inputs/DadosPessoais/name";
import { EmailInput } from "../../Components/Inputs/DadosPessoais/email";
import { CpfInput } from "../../Components/Inputs/DadosPessoais/cpf";
import { FormStyled } from "../Cadastro/styled";
import { BotaoLaranja } from "../../Components/Botoes/Styled";


export const EditarPage=()=>{
    const navigate=useNavigate()
    const [form, onChangeInputs, clearInputs] = useForm({
        name:"",
        email:"",
        cpf:""
    })

    const token = localStorage.getItem("token")

    const headers={
        headers:{
            auth: token
        }
    }

    const [endereco, setEndereco]=useState([])

    const editarDados = (event)=>{
        event.preventDefault();
        axios.put(`${BASE_URL}/profile`,form,headers).then((response)=>{
            setEndereco()
            toast.success('Dados atualizado com sucesso', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });              
                navigate("/meu_perfil")
        }).catch((error)=>{
            toast.error('Os dados não foram atualizados', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });        
        }) 
    }

    const voltar =()=>{
        navigate(-1)
    }

    return(
        <DivFundoEditar>
            <Header>
                Editar
            </Header>
            <FormStyled onSubmit={editarDados}>
                <NameInput
                    value={form.name}
                    onChange={onChangeInputs}
                    name="name"
                />
                <EmailInput
                    value={form.email}
                    onChange={onChangeInputs}
                    name="email"
                />
                <CpfInput
                    value={form.cpf}
                    onChange={onChangeInputs}
                    name="cpf"
                />
                <BotaoLaranja type="submit">Salvar</BotaoLaranja>
            </FormStyled>
        </DivFundoEditar>
    )
}

