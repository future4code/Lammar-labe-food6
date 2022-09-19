import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import { SignupPage } from '../Pages/SignUp'
import  { BuscarPage } from '../Pages/Busca'
import { CadastroPage } from '../Pages/Cadastro'
import { EditarPage } from '../Pages/Editar'
import { FeedPage } from '../Pages/Feed'
import { MeuCarrinhoPage } from '../Pages/MeuCarrinho'
import { ResultadoPage } from '../Pages/Resultado'
import LoginPage from '../Pages/Login'
import { MeuPerfilPage } from '../Pages/MeuPerfil'

 
const Router =()=>{

    return(
        <BrowserRouter>
            <Routes>
                <Route path='/login'  element={<LoginPage />}/>
                <Route path='/signup' element={<SignupPage />}/>
                <Route path='/buscar' element={<BuscarPage />}/>
                <Route path='/cadastrar' element={<CadastroPage />}/>
                <Route path='/editar' element={<EditarPage />}/>
                <Route path='/feed' element={<FeedPage />}/>
                <Route path='/meucarrinho' element={<MeuCarrinhoPage />}/>
                <Route path='/meuperfil' element={<MeuPerfilPage />}/>
                <Route path='/resultado/:id' element={<ResultadoPage />}/>
            </Routes>
        </BrowserRouter>
    )
}
export default Router