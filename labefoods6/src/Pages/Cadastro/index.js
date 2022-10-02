import axios from "axios"
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { BotaoLaranja } from "../../Components/Botoes/Styled"
import { Header } from "../../Components/Header/Header"
import { BairroInput } from "../../Components/Inputs/Endereco/bairro"
import { CidadeInput } from "../../Components/Inputs/Endereco/cidade"
import { ComplementoInput } from "../../Components/Inputs/Endereco/complemento"
import { EnderecoInput } from "../../Components/Inputs/Endereco/endereco"
import { EstadoInput } from "../../Components/Inputs/Endereco/estado"
import { NumeroInput } from "../../Components/Inputs/Endereco/numero"
import { DivFormulario, DivFundo } from "../../Components/Inputs/Endereco/Styled"
import { BASE_URL } from "../../Constants"
import { useForm } from "../../Hook/useForm"
import { FormStyled, TituloPagina } from "./styled"

export const CadastroPage=()=>{
    const navigate=useNavigate()
    const [form, onChangeInputs, limparInputs] = useForm ({
        street: "",
        number: "",
        complement: "",
        neighbourhood: "",
        city: "",
        state: ""
    })
    const token = localStorage.getItem("token")

    const headers={
        headers:{
            auth: token
        }
    }

    const cadastrarEndereco = (event)=>{
        event.preventDefault();
        axios.put(`${BASE_URL}/address`,form,headers).then((response)=>{
            localStorage.setItem("token", response.data.token)
            setEndereco()          
            navigate("/meu_perfil")
        }).catch((error)=>{
            toast.error('Endereço não cadastrado', {
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

    const voltar=()=>{
        navigate(-1)
    }

    const [endereco, setEndereco]=useState([])
    return(
        <DivFundo>
            <DivFormulario>
                <Header />
                <TituloPagina>Meu endereço</TituloPagina>
                <FormStyled onSubmit={cadastrarEndereco}>
                    <EnderecoInput
                        value={form.street}
                        onChange={onChangeInputs}
                        name="street"
                    />
                    <NumeroInput
                        value={form.number}
                        onChange={onChangeInputs}
                        name="number"
                    />
                    <ComplementoInput
                        value={form.complement}
                        onChange={onChangeInputs}
                        name="complement"
                    />
                    <BairroInput
                        value={form.neighbourhood}
                        onChange={onChangeInputs}
                        name="neighbourhood"
                    />
                    <CidadeInput
                        value={form.city}
                        onChange={onChangeInputs}
                        name="city"
                    />
                    <EstadoInput
                      value={form.state}
                      onChange={onChangeInputs}
                      name="state"
                    />
                    <BotaoLaranja type="submit">Salvar</BotaoLaranja>
                </FormStyled>
            </DivFormulario>
        </DivFundo>
    )
}

