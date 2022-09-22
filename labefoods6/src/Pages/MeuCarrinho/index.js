import React, { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { BotaoLaranja } from "../../Components/Botoes/Styled.js"
import { CardItens, InformacaoProduto, Preco } from "../../Components/Cards/Styled"
import { FooterComponents } from "../../Components/Footer/Footer.js"
import { DivFundoPaginaFooter } from "../../Components/Footer/Styled"
import { GlobalStateContext } from "../../Global/GlobalStateContext"
import { TextoCarrinho } from "./styled"

export const MeuCarrinhoPage=()=>{
    const navigate=useNavigate()
    const {addProduto, setAddProduto, }=useContext(GlobalStateContext)

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
                    <p>{item.name}</p>
                    <span>{item.description}</span>
                    <Preco>
                        <span> {(item.price).toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})} </span>
                        <button onClick={()=>deletarProdutos(item)}>Remover</button>
                    </Preco>  
                </InformacaoProduto>
            </CardItens>
        )
    })
    console.log(carrinho)
    return(
        <DivFundoPaginaFooter>
            {carrinho.length > 0 ?
            <DivFundoPaginaFooter>
                {carrinho}
            </DivFundoPaginaFooter>
            :
            <TextoCarrinho>Carrinho vazio</TextoCarrinho>
            }
            <BotaoLaranja>Confirmar</BotaoLaranja>
            <FooterComponents />
        </DivFundoPaginaFooter>
    )
}


