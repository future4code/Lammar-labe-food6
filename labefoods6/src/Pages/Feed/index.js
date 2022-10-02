import React, { useState, useEffect, useContext} from "react"
import { useNavigate } from 'react-router-dom'
import { useProtectPage } from "../../Hook/useProtectPage";
import { BASE_URL } from "../../Constants/index.js";
import axios from 'axios'
import {
    goToResultadoPage
} from '../../Routes/Coordinator'
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { InfoPedidoStyled, PedidoEmAndamentoStyled, RelogioStyled } from "./styled";
import {MdAccessTime} from "react-icons/md"
import { FooterComponents } from "../../Components/Footer/Footer";

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
            console.log(res.data)
            setFeed(res.data.restaurants)
          }).catch((error) => {
            console.log(error.message)
          })
      }, [])

    // const onClickCard = (id) => {
    //     goToResultadoPage(id)
    // }

    const goToResultadoPage = (id) => { navigate(`/resultado/${id}`) };

    const [searchTerm, setSearchTerm] = useState('')
    return(
        
        <div>
            <input 
                type="text"
                placeholder="Restaurantes"
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
                    
                    <div> 
                        <div onClick={() => goToResultadoPage(val.id)}>
                        <p>{val.name}</p>
                            <img src={val.logoUrl} width="47" height="47" />
                        </div>
                       <p>Tempo de espera:  {val.deliveryTime} min.</p>
                       <p>Frete: {val.shipping},00</p><br></br>
                    </div>
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


        </div>

        
    )
}


