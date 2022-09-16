import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'


import Splash from '../Pages/Splash'
import Login from '../Pages/Login'
import SignUp from '../Pages/SignUp'
import Busca from '../Pages/Busca'
import Cadastro from '../Pages/Cadastro'
import Editar from '../Pages/Editar'
import Feed from '../Pages/Feed'
import MeuCarrinho from '../Pages/MeuCarrinho'
import MeuPerfil from '../Pages/MeuCarrinho'
import Resultado from '../Pages/Resultado'

 
const Router =()=>{

    return(
        <BrowserRouter>
        <Routes>
            <Route path='/'  element={<Splash/>}/>
            <Route path='/login'  element={<Login/>}/>
            <Route path='/signup' element={<SignUp/>}/>
            <Route path='/buscar' element={<Busca/>}/>
            <Route path='/cadastar' element={<Cadastro/>}/>
            <Route path='/editar' element={<Editar/>}/>
            <Route path='/feed' element={<Feed/>}/>
            <Route path='/meucarrinho' element={<MeuCarrinho/>}/>
            <Route path='/meuperfil' element={<MeuPerfil/>}/>
            <Route path='/resultado' element={<Resultado/>}/>

        </Routes>
        </BrowserRouter>
    )
}
export default Router