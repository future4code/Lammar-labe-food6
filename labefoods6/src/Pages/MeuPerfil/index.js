import React from "react"
import { FooterComponents } from "../../Components/Footer/Footer.js"
import { NavbarComponents } from "../../Components/Navbar/Navbar.js"
import { MeuPerfilContainer } from '../MeuPerfil/styled'

export const MeuPerfilPage=()=>{
    return(
        <MeuPerfilContainer>
            <NavbarComponents />
                <div>Meu Perfil DASH</div>
            <FooterComponents />
        </MeuPerfilContainer>
    )
}

