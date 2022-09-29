import styled from "styled-components";

export const TituloQuantidadeStyled=styled.div`
    display: flex;
    width: 231px;
    flex-direction: row-reverse;

    .quantidadeAdicionada{
        width: 33px;
        max-height: 33px;
        border-top-right-radius: 8px;
        border-bottom-left-radius: 8px;
        border: solid 1px var(--dark-peach);
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: var(--dark-peach);
        padding: 5px 0;
    }

    .nomeProduto{
        width: 198px;
        height: 18px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--dark-peach);  
        margin-top: 18px;
    }
`

export const TextoCarrinho=styled.p`
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
    margin: 8px 0 33px;
    padding: 12px 32px;
`
export const DivValorTotal=styled.div`
    display: flex;

    .subtotal{
        width: 164px;
        height: 18px;
        margin: 15px 0 25px 16px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000000;
    }

    .valor{
        width: 164px;
        height: 21px;
        margin: 13px 16px 24px 0;
        font-family: Roboto;
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.43px;
        text-align: right;
        color: var(--dark-peach);
    }
`

export const DadosRestaurante=styled.div`
    display: flex;
    flex-direction: column;
    width: 360px;

    img{
        width: 328px;
        height: 120px;
        margin: 17px 16px 12px;
        object-fit: contain;
    }

    .estabelecimento{
        width: 328px;
        height: 18px;
        margin: 16px 16px 8px 16px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--dark-peach);
    }

    .endereco{
        width: 328px;
        height: 18px;
        margin: 8px 0 0 16px ;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--greyish);
    }

    .entrega{
        width: 328px;
        height: 18px;
        margin: 8px 0 16px 16px ;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--greyish);
    }
`

export const Frete=styled.div`
    display: flex;

    .valorFrete{
        width: 104px;
        height: 18px;
        margin: 16px 16px 13px 240px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: right;
        color: #000;
            }
`

export const MetodoDePagamentoStyled=styled.div`
    display: flex;
    flex-direction: column;
    padding-bottom: 5vh;
`
export const PagamentoStyled=styled.div`
    display: flex;
    width: 360px;

    input{
        width: 24px;
        height: 24px;
        margin: 8px 8px 8px 16px;
        object-fit: contain;
    }

    label{
        width: 296px;
        height: 18px;
        margin: 11px 16px 11px 8px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000;
    }

`

