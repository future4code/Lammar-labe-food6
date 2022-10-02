import styled from 'styled-components'

export const FeedCard = styled.div`
width: 20wv;
border: 1px solid black;

`
export const PedidoEmAndamentoStyled=styled.div`
    display: flex;
    flex-direction: row;
    width: 360px;
    height: 118px;
    background-color: var(--dark-peach);
    position: fixed;
    bottom: 65px;
`

export const RelogioStyled=styled.div`
    width: 80px;

    p{
        margin: 44px 24px;
    }

`

export const InfoPedidoStyled=styled.div`
    width: 280px;

    .status{
        width: 256px;
        height: 18px;
        margin-top: 24px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #fff;
    }

    .restaurante{
        width: 256px;
        height: 18px;
        margin-top: 8px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000;
    }

    .pagamento{
        width: 256px;
        height: 18px;
        margin-top: 8px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000;
    }

`