import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsCart3} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { goToFeed, goToMeuCarrinho, goToMeuPerfil, } from '../../Routes/Coordinator'
import { Footer } from './Styled'

export const FooterComponents = () =>{
    const navigate=useNavigate()

    return(
    <Footer>
        <button onClick={()=> goToFeed(navigate)}> <AiOutlineHome size="27px"/> </button>
        <button onClick={()=> goToMeuCarrinho(navigate)} > <BsCart3 size="27px"/> </button>
        <button onClick={()=> goToMeuPerfil(navigate)} > <AiOutlineUser size="27px"/> </button>
    </Footer>
    )
}