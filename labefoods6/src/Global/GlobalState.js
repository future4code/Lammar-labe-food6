import axios from "axios"
import { useEffect, useState } from "react"
import { BASE_URL } from "../Constants"
import { GlobalStateContext } from "./GlobalStateContext"

export const GlobalState = (props) =>{
    const [addProduto, setAddProduto]=useState(JSON.parse(localStorage.getItem("carrinho")) || [])
    const [isLoading, setIsLoading]=useState(false)
    const [infoRestaurante, setInfoRestaurante]=useState(JSON.parse(localStorage.getItem("restaurante")) || ("") )
    const [detalhesRestaurante, setDetalhesRestaurante]=useState([])
    const [pedidoEmAndamento, setPedidoEmAndamento]=useState([])


    const token = localStorage.getItem("token")
    const headers={
        headers:{
            auth: token
        }
    }
        //PEDIDO EM ANDAMENTO:
        const pedidoAtual = () => {
            axios.get(`${BASE_URL}/active-order`, headers)
            .then((response)=>{
                setPedidoEmAndamento(response.data.order)
            })
        }

        useEffect(()=>{
            pedidoAtual()
        },[])

    const data ={addProduto, setAddProduto, isLoading, setIsLoading, infoRestaurante, setInfoRestaurante, detalhesRestaurante, setDetalhesRestaurante, pedidoEmAndamento }

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}