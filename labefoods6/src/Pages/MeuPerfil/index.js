import React, { useContext, useEffect, useState } from "react"
import { FooterComponents } from "../../Components/Footer/Footer.js"
import axios from 'axios';
import { MdOutlineModeEdit } from "react-icons/md";
import { HeaderStyled } from "../../Components/Header/Styled.js";
import { goToCadastar, goToEditar, goToLogin } from "../../Routes/Coordinator.js";
import { useNavigate } from "react-router-dom";
import { BotaoEditar, DadosPessoais, DadosStyled, DivBotao, DivInformacoes, EnderecoStyled, FundoStyled, HistoricoPedidos, RenderizarHistorico } from "./styled.js";
import { CircularProgress } from "@mui/material";
import Stack from '@mui/material/Stack';
import { GlobalStateContext } from "../../Global/GlobalStateContext.js";
import { DivCarregando } from "../Resultado/styled.js";

export const MeuPerfilPage = () => {
    const navigate=useNavigate()
    const {isLoading, setIsLoading} = useContext(GlobalStateContext)

    const botaoSair=()=>{
        localStorage.removeItem("token")
        goToLogin(navigate)
    }

    let [perfilDetails, setPerfilDetails] = useState((JSON.parse(localStorage.getItem("dados")) || ("") ));
    let [orderHistory, setOrderHistory] = useState(null);

    useEffect(() => {
        getPerfilDetails();
        getOrderHistory();
    }, [])
    const token = localStorage.getItem("token")
    let getPerfilDetails = () => {

        var config = {
            method: 'get',
            url: 'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile',
            headers: {
                auth: token
            }
        };

        setIsLoading(true)
        axios(config)
            .then(function (response) {
                setIsLoading(false)
                setPerfilDetails(response.data.user)
                console.log(response.data.user);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    let getOrderHistory = () => {
        var config = {
            method: 'get',
            url: 'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/orders/history',
            headers: {
                auth: token
            }
        };
        
        setIsLoading(true)
        axios(config)
            .then(function (response) {
                setIsLoading(false)
                setOrderHistory(response.data.orders)
            })
            .catch(function (error) {
                console.log(error);
            });


    }

    return (
        <FundoStyled>
            {isLoading?
            <DivCarregando>
                <Stack sx={{ color: 'grey.500' }} spacing={1} direction="row">
                    <CircularProgress color="inherit" size="50px" />
                    <CircularProgress color="inherit" size="50px" />
                    <CircularProgress color="inherit" size="50px" />
                </Stack>
            </DivCarregando>
            :
            <>
                <HeaderStyled>
                    <h1 className="meuPerfil">Meu Perfil</h1>
                    <button onClick={botaoSair}>sair</button>
                </HeaderStyled>
                <DadosStyled>
                    <BotaoEditar>
                        <button onClick={()=>goToEditar(navigate)}> <MdOutlineModeEdit size="24px" /> </button>
                    </BotaoEditar>
                    <DadosPessoais>
                        <p className="nome">{perfilDetails?.name}</p>
                        <p className="email">{perfilDetails?.email}</p>
                        <p className="cpf">{perfilDetails?.cpf}</p>
                    </DadosPessoais>
                </DadosStyled>
                <EnderecoStyled>
                    <DivBotao>
                        <button onClick={()=>goToCadastar(navigate)}> <MdOutlineModeEdit size="24px" /> </button>
                    </DivBotao>
                    <DivInformacoes>
                        <span className="titulo">Endereço cadastrado:</span>
                        <p className="endereco">{perfilDetails?.address}</p>
                    </DivInformacoes>
                </EnderecoStyled>
                <HistoricoPedidos>
                    <div>
                        <p className="tituloHistorico">Histórico de pedidos</p>
                        {orderHistory?.map((element) => {
                            let date =  new Date(element?.createdAt);
                            let finalDate = date.toLocaleString('pt-BR');
                            return( 
                            <RenderizarHistorico>
                                    <p className="nomeRestaurante">{element?.restaurantName}</p>
                                    <p className="data">{finalDate}</p>
                                    <p className="subtotal">SUBTOTAL: R$ { element?.totalPrice}</p>                                    
                            </RenderizarHistorico>
                            )
                        })}
                    </div>
                </HistoricoPedidos>
                <FooterComponents />
            </>
            }
        </FundoStyled>
    )
}

