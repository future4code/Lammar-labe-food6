import React, { useState, useEffect} from "react"
import { useNavigate } from 'react-router-dom'
import { useProtectPage } from "../../Hook/useProtectPage";
import { useForm } from '../../Hook/useForm'
import { BASE_URL } from "../../Constants/index.js";
import { Link } from 'react-router-dom';
import { FeedCard } from "./styled";
import axios from 'axios'
import {
    goToResultadoPage
} from '../../Routes/Coordinator'
export const FeedPage=()=>{
    useProtectPage()
    const navigate = useNavigate()

    const token = localStorage.getItem('token')

    window.onbeforeunload = () => {
        localStorage.removeItem('token');
      }

      const [feed, setFeed] = useState([])
      const [categoria, setCategoria] = useState('')

    
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

    return(

        <div>
            {feed.map((feed, i) => 
            <FeedCard onClick={() => onClickCard() }>
                <img src={feed.image}></img>
                <h3>{feed.name}</h3>
                <span>{feed.category}</span>
                <div>
                <span>{feed.deliveryTime} min.</span>
                <p>Entrega: R$ {feed.shipping.toFixed(2)}</p>
                </div>
                <span>{feed.address}</span>
            </FeedCard>
            )}
            
        </div>

        
        // <>
        //     <h1>Feed</h1>
            
        //     {feed.map((i) => {
        //   return (<div key={i.id}
            
        //     onClick={() => navigate(`/feed/${i.id}`)}
        //     storeName={i.name}
        //     deliveryTime={i.deliveryTime}
        //     fee={i.shipping}
        //     img={i.logoUrl}
          
            
        //   />)
        // })}
        // </>
    )
}

