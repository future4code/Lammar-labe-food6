import { useState } from "react"
import { GlobalStateContext } from "./GlobalStateContext"

export const GlobalState = (props) =>{
    const [addProduto, setAddProduto]=useState(JSON.parse(localStorage.getItem("carrinho")) || [])
    const [isLoading, setIsLoading]=useState(false)
    const [infoRestaurante, setInfoRestaurante]=useState(JSON.parse(localStorage.getItem("restaurante")) || ("") )
    const [detalhesRestaurante, setDetalhesRestaurante]=useState([])




    const data ={addProduto, setAddProduto, isLoading, setIsLoading, infoRestaurante, setInfoRestaurante, detalhesRestaurante, setDetalhesRestaurante }

    return(
        <GlobalStateContext.Provider value={data}>
            {props.children}
        </GlobalStateContext.Provider>
    )

}