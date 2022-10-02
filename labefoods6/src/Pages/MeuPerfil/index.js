import React, { useEffect, useState } from "react"
import { FooterComponents } from "../../Components/Footer/Footer.js"
import { NavbarComponents } from "../../Components/Navbar/Navbar.js"
import { MeuPerfilContainer, MeuPerfilDetailsList, MeuPerfilDashContainer, MeuPerfilDetailsLContainer, MeuPerfilAddressContainer, OrderHistoryContainer, MeuPerfilAddressRightContainer, EditIcon, NomeRestaurante, PedidoDetailsContainer, DataPedido, ValorPedido } from '../MeuPerfil/styled';
import axios from 'axios';
import { MdOutlineModeEditOutline } from "react-icons/md";

export const MeuPerfilPage = () => {
    let [perfilDetails, setPerfilDetails] = useState(null);
    let [orderHistory, setOrderHistory] = useState(null);

    useEffect(() => {
        getPerfilDetails();
        getOrderHistory();
    }, [])

    let getPerfilDetails = () => {
        var config = {
            method: 'get',
            url: 'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/profile',
            headers: {
                'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImpiUGxTQ3daUmo5d0M1R0JvOXpuIiwibmFtZSI6IkxpbmNvbG4gVGVzdGUiLCJlbWFpbCI6ImxpbmNvbG5AaG90bWFpbC5jb20iLCJjcGYiOiI0NTguNTU1Ljc4OS0xMSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NjQwMzEzNjF9.56sEBUspeMaUHFlslxovtXv1DZYImZJR9f3pWSn1KAM'
            }
        };

        axios(config)
            .then(function (response) {
                setPerfilDetails(response.data.user)
                console.log(response.data.user);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    let getOrderHistory = () => {
        var config = {
            method: 'get',
            url: 'https://us-central1-missao-newton.cloudfunctions.net/fourFoodB/orders/history',
            headers: {
                'auth': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImpiUGxTQ3daUmo5d0M1R0JvOXpuIiwibmFtZSI6IkxpbmNvbG4gVGVzdGUiLCJlbWFpbCI6ImxpbmNvbG5AaG90bWFpbC5jb20iLCJjcGYiOiI0NTguNTU1Ljc4OS0xMSIsImhhc0FkZHJlc3MiOnRydWUsImFkZHJlc3MiOiJSLiBBZm9uc28gQnJheiwgMTc3LCA3MSAtIFZpbGEgTi4gQ29uY2Vpw6fDo28iLCJpYXQiOjE2NjQwMzAwNTh9.urpPDl3L4arZyHgxuSgTIN6clYIwmFRICEyu9oR7ZMc'
            }
        };

        axios(config)
            .then(function (response) {
                setOrderHistory(response.data.orders)
                console.log(response.data.orders);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <MeuPerfilContainer>
            <NavbarComponents />
            <MeuPerfilDashContainer>
                <MeuPerfilDetailsLContainer>
                    <MeuPerfilDetailsList>
                        <li>{perfilDetails?.name}</li>
                        <li>{perfilDetails?.email}</li>
                        <li>{perfilDetails?.cpf}</li>
                    </MeuPerfilDetailsList>
                    <EditIcon><MdOutlineModeEditOutline/></EditIcon>
                </MeuPerfilDetailsLContainer>
                <MeuPerfilAddressContainer>
                    <MeuPerfilAddressRightContainer>
                        <p>Endereço Cadastrado</p>
                        <div>
                            {perfilDetails?.address}
                        </div>
                    </MeuPerfilAddressRightContainer>
                    <div><MdOutlineModeEditOutline/></div>
                </MeuPerfilAddressContainer>
                <OrderHistoryContainer>
                    <h4>Histórico de pedidos</h4>
                    <div>
                        {orderHistory?.map((element) => {
                            let date =  new Date(element?.createdAt);
                            let finalDate = date.toLocaleString('pt-BR');
                            return <PedidoDetailsContainer>
                                    <NomeRestaurante className="nomeRestaurante">{element?.restaurantName}</NomeRestaurante>
                                    <DataPedido>{finalDate}</DataPedido>
                                    <ValorPedido>SUBTOTAL: R$ { element?.totalPrice}</ValorPedido>                                    
                                </PedidoDetailsContainer>
                        })}
                    </div>
                </OrderHistoryContainer>
            </MeuPerfilDashContainer>
            <FooterComponents />
        </MeuPerfilContainer>
    )
}

