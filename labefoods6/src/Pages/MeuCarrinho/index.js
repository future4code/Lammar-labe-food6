import React, { useContext } from "react"
import { useNavigate } from "react-router-dom"
import { GlobalStateContext } from "../../Global/GlobalStateContext"

export const MeuCarrinhoPage=()=>{
    const navigate=useNavigate()
    const {addProduto, setAddProduto, isLoading, setIsLoading}=useContext(GlobalStateContext)

    const carrinho = addProduto.map((item, index)=>{
        return(
            <div key={index}>
                <p>{item.name}</p>
                <p>{item.price}</p>
            </div>
        )
    })

    console.log(addProduto)
    return(
        <>
            <h1>Meu Carrinho</h1>
                {carrinho}
        </>
    )
}

