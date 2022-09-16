import axios from "axios"
import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../Constants"
import { CardItens, DivFundoResultado, InformacaoProduto, Preco } from "./styled"

export const ResultadoPage=()=>{

    const [detalhesRestaurante, setDetalhesRestaurante]=useState([])

    const token = localStorage.getItem("token")

    const headers={
        headers:{
            auth: token
        }
    }

    const param = useParams()


    const obterRestaurantes=()=>{
        axios.get(`${BASE_URL}/restaurants/${param.id}`, headers).then((response)=>{
            setDetalhesRestaurante(response.data.restaurant.products)
        })
    }

    useEffect(()=>{
        obterRestaurantes()
    }, [])

    const obterDetalhes= detalhesRestaurante.map((item, index)=>{
        return (
            <>
                <CardItens key={index}>
                    <img src={item.photoUrl} alt={item.name}/>
                    <InformacaoProduto>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                        <Preco>
                            <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                            <button>Adicionar</button>
                        </Preco>
                    </InformacaoProduto>
                </CardItens>
            </>
        )
    })

    const acompanhamentos=detalhesRestaurante.filter((item, index)=>{
        if (item.category === "Bebida"){
            return(
                <div key={index}>
                    <p>{item.name}</p>
                </div>
            )
        } else{

        }
    })
    console.log(acompanhamentos)

    return(
        <DivFundoResultado>
            {obterDetalhes}
            <h3>Acompanhamentos</h3>
        </DivFundoResultado>
    )

}

