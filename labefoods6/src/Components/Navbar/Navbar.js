import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BsCart3} from 'react-icons/bs'
import { useNavigate } from 'react-router-dom'
import { goToFeed, goToMeuCarrinho, goToMeuPerfil, } from '../../Routes/Coordinator'
import { Navbar } from './Styled'

export const NavbarComponents = () =>{
    const navigate=useNavigate()

    return(
    <Navbar>
        Meu Perfil
    </Navbar>
    )
}