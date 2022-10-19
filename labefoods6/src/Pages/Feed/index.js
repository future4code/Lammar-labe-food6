import React, { useState, useEffect, useContext} from "react"
import { useNavigate } from 'react-router-dom'
import { useProtectPage } from "../../Hook/useProtectPage";
import { BASE_URL } from "../../Constants/index.js";
import axios from 'axios'
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { DivRenderizacao, InfoPedidoStyled, PedidoEmAndamentoStyled, RelogioStyled, Input} from "./styled";
import {MdAccessTime} from "react-icons/md"
import { FooterComponents } from "../../Components/Footer/Footer";
import {DivFundoPaginaFooter} from "../../Components/Footer/Styled"
import { DivCards, DivInformacaoRestaurante } from "../../Components/Inputs/Buscar/Styled";


export const FeedPage=()=>{
    useProtectPage()
    const navigate = useNavigate()

    const {pedidoEmAndamento}=useContext(GlobalStateContext)
    const token = localStorage.getItem('token')

      const [feed, setFeed] = useState([])
      
      useEffect(() => {
        axios.get(`${BASE_URL}/restaurants`, {
          headers: {
            'auth': token
          }
        })
          .then((res) => {
            setFeed(res.data.restaurants)
          }).catch((error) => {
            console.log(error.message)
          })
      }, [])

    const goToResultadoPage = (id) => { navigate(`/resultado/${id}`) };

    const [searchTerm, setSearchTerm] = useState('')
    return( 
        <DivFundoPaginaFooter>
            <Input 
                type="text"
                placeholder="Buscar"
                onChange={event => {
                    setSearchTerm(event.target.value)
                    
                }}
            />

            {feed.filter((val) => {
                if (searchTerm == ""){
                    return val
                } else if(val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
                    return val
                }
            }).map((val, key) => {
                return (
                    
                    <DivRenderizacao > 
                        <DivCards key={key} onClick={() => goToResultadoPage(val.id)}>
                            <img src={val.logoUrl} alt={val.name} />
                            <p>{val.name}</p>
                            <DivInformacaoRestaurante>
                                <span>{val.deliveryTime} min</span>
                                <span>Frete: {val.shipping.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</span>
                            </DivInformacaoRestaurante>
                        </DivCards>
                    </DivRenderizacao>
                )
            })}

            {pedidoEmAndamento?.totalPrice > 0 ?
                <PedidoEmAndamentoStyled>
                    <RelogioStyled>
                        <p><MdAccessTime size="32px" color="white"/></p>
                    </RelogioStyled>
                    <InfoPedidoStyled>
                        <p className="status">Pedido em andamento</p>
                        <p className="restaurante">{pedidoEmAndamento?.restaurantName}</p>
                        <p className="pagamento">SUBTOTAL: {pedidoEmAndamento?.totalPrice.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}</p>
                    </InfoPedidoStyled>
                </PedidoEmAndamentoStyled>
                :
                null
            }
            <FooterComponents />


        </DivFundoPaginaFooter>

        
    )
}


