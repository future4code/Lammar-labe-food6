import axios from "axios"
import React, { useContext, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import { CardItens, CardRestaurante, DivCarregando, DivFundoResultado, InformacaoProduto, Preco } from "./styled"
import { CircularProgress } from "@mui/material";
import Stack from '@mui/material/Stack';
import { BASE_URL } from "../../Constants"
import { FooterComponents } from "../../Components/Footer/Footer"


export const ResultadoPage=()=>{
    const {addProduto, setAddProduto, isLoading, setIsLoading, detalhesRestaurante, setDetalhesRestaurante, infoRestaurante, setInfoRestaurante}=useContext(GlobalStateContext)

    const adicionandoProdutoNoCarrinho = item =>{
        let procurarProduto= addProduto.find(elemento => elemento.id === item.id)

        if(procurarProduto){
            procurarProduto.quantity +=1
            setAddProduto(addProduto)
            localStorage.setItem("carrinho", JSON.stringify(addProduto))
        }else{
            item ={
                ...item,
                quantity: 1
            }
            const novoCarrinho = [...addProduto, item]
            setAddProduto(novoCarrinho)
            localStorage.setItem("carrinho", JSON.stringify(novoCarrinho))
        }
    }
    
    const navigate=useNavigate();
    const param = useParams()
    const token = localStorage.getItem("token")
    const headers={
        headers:{
            auth: token
        }
    }


    const obterRestaurantes=()=>{
        setIsLoading(true)
        axios.get(`${BASE_URL}/restaurants/${param.id}`, headers).then((response)=>{
            setIsLoading(false)
            setDetalhesRestaurante(response.data.restaurant.products)
            setInfoRestaurante(response.data.restaurant)
            localStorage.setItem("restaurante", JSON.stringify(response.data.restaurant)
            )
        }).catch((error)=>{
            navigate("/login")
        })
    }

    useEffect(()=>{
        obterRestaurantes()
    }, [])

    detalhesRestaurante.map((item, index)=>{
        return (
                <CardItens key={index}>
                    <img src={item.photoUrl} alt={item.name}/>
                    <InformacaoProduto>
                        <p>{item.quantity}</p>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                        <Preco>
                            <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                            <button onClick={()=> adicionandoProdutoNoCarrinho(item)}>Adicionar</button>
                        </Preco>
                    </InformacaoProduto>
                </CardItens>
        )
    })


    const produtosVariasCategorias =detalhesRestaurante.filter((item, index)=>{
        if (item.category !== "Bebida" && item.category !== "Acompanhamento" && item.category !== "Sobremesa" && item.category !== "Doce" && item.category !== "Sorvete"){
            return(
                <div key={index}>
                    <p>{item.name}</p>
                </div>
            )
        }
    })

    const resultadoVariasCategorias = produtosVariasCategorias.map((item, index)=>{
        return (
            <CardItens key={index}>
                <img src={item.photoUrl} alt={item.name}/>
                <InformacaoProduto>
                    <p>{item.quantity}</p>
                    <p>{item.name}</p>
                    <span>{item.description}</span>
                    <Preco>
                        <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                        <button onClick={()=> adicionandoProdutoNoCarrinho(item)}>Adicionar</button>
                    </Preco>
                </InformacaoProduto>
            </CardItens>
    )
    })

    const bebidas=detalhesRestaurante.filter((item, index)=>{
        if (item.category === "Bebida" ){
            return(
                <div key={index}>
                    <p>{item.name}</p>
                </div>
            )
        } 
    })

    const resultadoBebidas = bebidas.map((item, index)=>{
        return (
            <CardItens key={index}>
                <img src={item.photoUrl} alt={item.name}/>
                <InformacaoProduto>
                    <p>{item.quantity}</p>
                    <p>{item.name}</p>
                    <span>{item.description}</span>
                    <Preco>
                        <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                        <button onClick={()=> adicionandoProdutoNoCarrinho(item)}>Adicionar</button>
                    </Preco>
                </InformacaoProduto>
            </CardItens>
    )
    })

    const acompanhamentos=detalhesRestaurante.filter((item, index)=>{
        if (item.category === "Acompanhamento"){
            return(
                <div key={index}>
                    <p>{item.name}</p>
                </div>
            )
        }
    })

    const resultadoAcompanhamento = acompanhamentos.map((item, index)=>{
        return (
            <CardItens key={index}>
                <img src={item.photoUrl} alt={item.name}/>
                <InformacaoProduto>
                    <p>{item.quantity}</p>
                    <p>{item.name}</p>
                    <span>{item.description}</span>
                    <Preco>
                        <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                        <button onClick={()=> adicionandoProdutoNoCarrinho(item)}>Adicionar</button>
                    </Preco>
                </InformacaoProduto>
            </CardItens>
    )
    })

    const sobremesa=detalhesRestaurante.filter((item, index)=>{
        if (item.category === "Sobremesa" || item.category === "Sorvete" || item.category === "Doce"){
            return(
                <div key={index}>
                    <p>{item.name}</p>
                </div>
            )
        }
    })

    const resultadoSobremesa = sobremesa.map((item, index)=>{
        return (
            <CardItens key={index}>
                <img src={item.photoUrl} alt={item.name}/>
                <InformacaoProduto>
                    <p>{item.quantity}</p>
                    <p>{item.name}</p>
                    <span>{item.description}</span>
                    <Preco>
                        <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                        <button onClick={()=> adicionandoProdutoNoCarrinho(item)}>Adicionar</button>
                    </Preco>
                </InformacaoProduto>
            </CardItens>
    )
    })


    return(
        <DivFundoResultado>
            {isLoading ?
            <DivCarregando>
                <Stack sx={{ color: 'grey.500' }} spacing={1} direction="row">
                    <CircularProgress color="inherit" size="50px" />
                    <CircularProgress color="inherit" size="50px" />
                    <CircularProgress color="inherit" size="50px" />
                </Stack>
            </DivCarregando>
            :
            <>
                <CardRestaurante>
                    <img src={infoRestaurante?.logoUrl}  alt={infoRestaurante?.name}/>
                    <p>{infoRestaurante?.name}</p>
                    <span className="categoria">{infoRestaurante?.category}</span>
                    <div>
                        <span className="tempo">{infoRestaurante?.deliveryTime} min</span>
                        <span className="delivery"> {infoRestaurante?.shipping.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                    </div>
                        <span className="endereco"> {infoRestaurante?.address} </span>
                </CardRestaurante>
                <div>
                    <h6>Principais</h6>
                    {resultadoVariasCategorias}
                </div>

                {resultadoAcompanhamento.length > 0 ?
                <div>
                    <h6>Acompanhamentos</h6>
                    {resultadoAcompanhamento}
                </div>
                :
                undefined
                }

                <div>
                    <h6>Bebidas</h6>
                    {resultadoBebidas}
                </div>

                {resultadoSobremesa.length > 0 ?
                <div>
                    <h6>Sobremesa</h6>
                    {resultadoSobremesa}
                </div>
                :
                undefined
                }
            </>
            }

            <FooterComponents />
        </DivFundoResultado>
    )

}

