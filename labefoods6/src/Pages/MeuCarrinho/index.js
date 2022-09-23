import React, { useContext, useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { BotaoLaranja } from "../../Components/Botoes/Styled.js"
import { CardItens, InformacaoProduto, Preco } from "../../Components/Cards/Styled"
import { FooterComponents } from "../../Components/Footer/Footer.js"
import { DivFundoPaginaFooter } from "../../Components/Footer/Styled"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import { DivValorTotal, TextoCarrinho } from "./styled"

export const MeuCarrinhoPage=(props)=>{
    const navigate=useNavigate()
    const {addProduto, setAddProduto, }=useContext(GlobalStateContext)
    const [valorTotal, setValorTotal]=useState(0)

    const deletarProdutos = (produto) =>{
        const novoCarrinho = [...addProduto]
        const deletar = novoCarrinho.findIndex((p)=> p === produto)
        novoCarrinho.splice(deletar, 1)
        setAddProduto(novoCarrinho)

    }

    const carrinho = addProduto.map((item, index)=>{
        return(
            <CardItens key={index}>
                <img src={item.photoUrl} alt={item.name}/>
                <InformacaoProduto>
                    <p className="quantidade">{item.quantity}</p>
                    <p>{item.name}</p>
                    <p className="descricao">{item.description}</p>
                    <Preco> 
                        <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                        <button onClick={()=>deletarProdutos(item)}>Remover</button>
                    </Preco>  
                </InformacaoProduto>
            </CardItens>
        )
    })
    useEffect(()=>{
        let valorFinal = 0
        addProduto.forEach((produto)=>{
            valorFinal += (produto.price * produto.quantity) 
        }, [addProduto])
        setValorTotal(valorFinal)
        localStorage.setItem("carrinho", JSON.stringify(addProduto))
    })

    return(
        <DivFundoPaginaFooter>
            {carrinho.length > 0 ?
            <DivFundoPaginaFooter>
                {carrinho}
            </DivFundoPaginaFooter>
            :
            <TextoCarrinho>Carrinho vazio</TextoCarrinho>
            }
            <DivValorTotal>
                <p className="subtotal">SUBTOTAL:</p> 
                <p className="valor"> {valorTotal.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
            </DivValorTotal>
            <BotaoLaranja>Confirmar</BotaoLaranja>
            <FooterComponents />
        </DivFundoPaginaFooter>
    )
}


