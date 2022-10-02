import styled from "styled-components";

export const MeuPerfilContainer=styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const MeuPerfilDashContainer = styled.div `
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MeuPerfilDetailsLContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`;

export const MeuPerfilAddressRightContainer = styled.div `
`;

export const MeuPerfilDetailsList = styled.ul `
    list-style: none;
    padding-left: 20px;
`;

export const EditIcon = styled.div `
    padding-right: 16px;
`;

export const MeuHistoricoList = styled.ul `
    list-style: none;
`;

export const MeuPerfilAddressContainer = styled.div `
    width: 100%;
    display: flex;
    justify-content: space-around;
    background-color: #eee;
    padding-top: 10px;
    padding-bottom: 10px;

        p {
            margin-bottom: 8px;
            color: gray;
        }
`;

export const OrderHistoryContainer = styled.div `
    margin-top: 10px;
    width: 90%;
    display: flex;
    flex-direction: column;

    h4 {
        margin-bottom: 10px;
        border-bottom: 1px solid black;
        width: 100%;
        font-size: 16px;
        font-weight: 500;
        padding-bottom: 6px;
    }
`;

export const NomeRestaurante = styled.div `
    color: #e86e5a;
    font-size: 16px;
    font-weight: 500;
`;

export const PedidoDetailsContainer = styled.div `
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    border-radius: 10px;
    height: 110px;
    justify-content: space-evenly;
    padding-left: 16px;
    margin-top: 8px;
`;

export const DataPedido = styled.div `
    font-size: 12px;
`;

export const ValorPedido = styled.div `
    font-size: 16px;
    font-weight: 600;
`;