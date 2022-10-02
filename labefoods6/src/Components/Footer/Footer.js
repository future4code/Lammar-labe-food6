import { useContext } from 'react'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsCart3} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { GlobalStateContext } from '../../Global/GlobalStateContext'
import { goToFeed, goToMeuCarrinho, goToMeuPerfil, } from '../../Routes/Coordinator'
import { Footer } from './Styled'

export const FooterComponents = () =>{
    const {addProduto, setAddProduto, infoRestaurante }=useContext(GlobalStateContext)

    const navigate=useNavigate()

    const onClickCarrinho=(id) =>{
        goToMeuCarrinho(navigate, id)
    }

    return(
    <Footer>
        <button onClick={()=> goToFeed(navigate)}> <AiOutlineHome size="27px"/> </button>
        <button onClick={()=> onClickCarrinho(infoRestaurante?.id)} > <BsCart3 size="27px"/> </button>
        <button onClick={()=> goToMeuPerfil(navigate)} > <AiOutlineUser size="27px"/> </button>
    </Footer>
    )
}