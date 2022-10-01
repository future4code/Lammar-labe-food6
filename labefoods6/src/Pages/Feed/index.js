import React, { useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import { useProtectPage } from "../../Hook/useProtectPage";
import { BASE_URL } from "../../Constants/index.js";
import axios from 'axios'
import {
    goToResultadoPage
} from '../../Routes/Coordinator'


export const FeedPage=()=>{
    useProtectPage()
    const navigate = useNavigate()

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

    const onClickCard = (id) => {
        goToResultadoPage(id)
    }

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
                        <div>
                        <p>{val.name}</p>
                            <img src={val.logoUrl} width="47" height="47" />
                        </div>
                       <p>Tempo de espera:  {val.deliveryTime} min.</p>
                       <p>Frete: {val.shipping},00</p><br></br>
                    </div>
                )
            })}

        </div>

        
    )
}


