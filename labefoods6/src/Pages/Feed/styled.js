import styled from 'styled-components'

export const DivRenderizacao=styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    align-items: center;

    .semResultado{
        width: 296px;
        height: 18px;
        opacity: 0.89;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: #000;
        margin-top: 1vh;
    }

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

export const Input = styled.input`
    width: 300px;
    height: 36px;
    padding: 16px 8px 16px 17px;
    border-radius: 2px;
    border: solid 1px var(--greyish);
`

