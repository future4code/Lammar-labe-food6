import axios from "axios"
import React, { useContext, useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { BotaoLaranja } from "../../Components/Botoes/Styled.js"
import { CardItens, InformacaoProduto, Preco } from "../../Components/Cards/Styled"
import { FooterComponents } from "../../Components/Footer/Footer.js"
import { DivFundoPaginaFooter } from "../../Components/Footer/Styled"
import { HeaderStyled } from "../../Components/Header/Styled.js"
import { BASE_URL } from "../../Constants/index.js"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import { DadosRestaurante, DivQuantidadeStyled, DivValorTotal, Frete, MetodoDePagamentoStyled, PagamentoStyled, TextoCarrinho, TituloQuantidadeStyled } from "./styled"
import {IoIosArrowBack} from 'react-icons/io'
import { toast } from "react-toastify";
import { CircularProgress } from "@mui/material";
import Stack from '@mui/material/Stack';
import { DivCarregando } from "../Resultado/styled.js"

export const MeuCarrinhoPage=(props)=>{

    const navigate=useNavigate()
    const {addProduto, setAddProduto, infoRestaurante }=useContext(GlobalStateContext)
    const [valorTotal, setValorTotal]=useState(0)
    const [creditCard, setCreditCard] = useState(true)
    const [money, setMoney] = useState(false)

    const handlePaymentMethod = () => {
        setCreditCard(!creditCard)
        setMoney(!money)
    }

    const deletarProdutos = (produto) =>{
        const novoCarrinho = [...addProduto]
        const deletar = novoCarrinho.findIndex((p)=> p === produto)

        if(novoCarrinho[deletar].quantity===1){
            novoCarrinho.splice(deletar, 1)
        }else{
            novoCarrinho[deletar].quantity--
        }
        setAddProduto(novoCarrinho)

    }

    const carrinho = addProduto.map((item, index)=>{
        return(
            <CardItens key={index}>
                <img src={item.photoUrl} alt={item.name}/>
                <InformacaoProduto>
                    <TituloQuantidadeStyled>
                        <p className="quantidadeAdicionada">{item.quantity}</p>
                        <p className="nomeProduto">{item.name}</p>
                    </TituloQuantidadeStyled>
                    <p className="descricao">{item.description}</p>
                    <Preco> 
                        <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                        <button onClick={()=>deletarProdutos(item)}>Remover</button>
                    </Preco>  
                </InformacaoProduto>
            </CardItens>
        )
    })

    let valorFrete = Number(infoRestaurante.shipping)

    useEffect(()=>{
        let valorFinal = 0
        addProduto.forEach((produto)=>{
            valorFinal += (produto.price * produto.quantity) 
        }, [addProduto])
        setValorTotal(valorFinal + valorFrete)
        localStorage.setItem("carrinho", JSON.stringify(addProduto))
    },[addProduto])

    const param = useParams()

    const token = localStorage.getItem("token")
    const headers={
        headers:{
            auth: token
        }
    }

    const placeOrder=()=>{
        
        const arr = addProduto.map(({quantity, id}) => {
            return {
                quantity,
                id
            }
        })

        const body = {
            products: arr,
            paymentMethod: money ? "money" : "creditcard"
        }

        if(carrinho.length > 0){
            axios.post(`${BASE_URL}/restaurants/${param.id}/order`, body, headers)
            .then((response)=>{
                toast.success('Pedido realizado com sucesso!', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                localStorage.removeItem("carrinho");
                
            }).catch((error)=>{
                toast.error('Aguarde seu outro pedido ser finalizado.', {
                    position: "top-center",
                    autoClose: 2000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    });
                
            })
        }else{
            toast.warn('Insira pelo menos 1 item no carrinho.', {
                position: "top-center",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                });    }
    }

    const voltar=()=>{
        navigate(-1)
    }

    return(
        <DivFundoPaginaFooter>
            <HeaderStyled>
                 <button onClick={voltar}> <IoIosArrowBack size="24px" /></button>
                 <p>Meu carrinho</p>
            </HeaderStyled>
            {carrinho.length > 0 ? 
            <DadosRestaurante>
                <img src={infoRestaurante?.logoUrl} alt={infoRestaurante?.name} />
                <p className="estabelecimento">{infoRestaurante?.name}</p>
                <p className="endereco">{infoRestaurante?.address}</p>
                <p className="entrega">{infoRestaurante?.deliveryTime} min</p>
            </DadosRestaurante>
            :
            undefined
            }
            {carrinho.length > 0 ?
            <div>
                {carrinho}
            </div>
            :
            <TextoCarrinho>Carrinho vazio</TextoCarrinho>
            }
            {carrinho.length > 0 ? 
            <Frete>
                <p className="valorFrete">Frete: {infoRestaurante.shipping.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </Frete>
                :
            <Frete>
                <p className="valorFrete">Frete: R$ 0,00</p>
            </Frete>
            }
            <DivValorTotal>
                <p className="subtotal">SUBTOTAL:</p> 
                <p className="valor"> {valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </DivValorTotal>
            <MetodoDePagamentoStyled>
                <h6>Forma de pagamento</h6>
                <PagamentoStyled>
                    <label>
                        <input type="radio" checked={money} onChange={handlePaymentMethod} name="fav_language"/> 
                        Dinheiro
                    </label>
                </PagamentoStyled>
                <PagamentoStyled>
                    <label>
                        <input type="radio" checked={creditCard} onChange={handlePaymentMethod} name="fav_language"/> 
                        Cart??o de cr??dito
                    </label>
                </PagamentoStyled>
            </MetodoDePagamentoStyled>
            <BotaoLaranja onClick={placeOrder}>Confirmar</BotaoLaranja>
            <FooterComponents />
        </DivFundoPaginaFooter>
    )
}


