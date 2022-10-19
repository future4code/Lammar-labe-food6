import { useState } from "react"
import axios from 'axios'
import { BASE_URL } from "../../../../Constants"
import { goToLogin } from "../../../../Routes/Coordinator"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"


export const BuscaInput =()=>{
    const navigate=useNavigate();
    const [listaDeRestaurantes, setListaDeRestaurantes]=useState([])
    const [busca, setBuscar] = useState("")

    const token = localStorage.getItem("token")

    const headers={
        headers:{
            auth: token
        }
    }

    const obterRestaurantes=()=>{
        axios.get(`${BASE_URL}/restaurants`, headers).then((response)=>{
            setListaDeRestaurantes(response.data.restaurants)
        }).catch((error)=>{
            goToLogin(navigate)
        })
    }

    useEffect(()=>{
        obterRestaurantes()
    },[])

    const restauranteFiltrado=listaDeRestaurantes.filter((item)=> item.name.toLowerCase().includes(busca.toLowerCase()))

    restauranteFiltrado.map((item, index)=>{
        return(
            <div key={index}>
                <img src={item.logoUrl} alt={item.name} />
                <p>{item.name}</p>
                <div>
                    <span>{item.deliveryTime}</span>
                    <span>{item.shipping}</span>
                </div>
            </div>
        )
    })

    return(
        <input
        label="Restaurante" 
        name="busca"
        type="text"
        value={busca}
        onChange={(ev)=> {
            ev.preventDefault()
            setBuscar(ev.target.value)}
        }
        placeholder="Restaurante"
        />
    ) 
}