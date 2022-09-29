import styled from "styled-components";

export const CardItens=styled.div`
    display: flex;
    max-width: 328px;
    max-height: 112px;
    border-radius: 8px;
    border: solid 1px var(--greyish);
    margin: 5px 20px;
    img{
        width: 97px;
        height: 112px;
        object-fit: cover;
    }
`

export const InformacaoProduto=styled.div`
    display: flex;
    flex-direction: column;

    p{
        width: 166px;
        height: 18px;
        margin-left: 16px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--dark-peach)    
    }

    span{
        font-family: 'Roboto', sans-serif;
        width: 198px;
        height: 30px;
        margin: 6px 0 0 16px;
        font-family: Roboto;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.34px;
        color: var(--greyish);
    }

`

export const Preco=styled.div`
    display: flex;
    max-width: 97%;

    span{
        width: 108px;
        height: 19px;
        margin: 6px 16px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--black);
    }

    button{
        width: 90px;
        height: 31px;
        margin: 9px 0 0 10px;
        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;
        border: solid 1px var(--black);
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        letter-spacing: -0.29px;
        text-align: center;
        color: var(--black);
        cursor: pointer;
    }
`

export const DivFundoResultado=styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    max-width: 100vw;
    min-height: 100vh;
    padding-bottom: 10vh;

    h6{
        width: 328px;
        height: 18px;
        border-bottom: solid 1px #000;
        font-family: 'Roboto', sans-serif;
        margin: 16px 16px 8px;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000;
        padding-bottom: 8px;
    }
`

export const DivCarregando=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CardRestaurante=styled.div`
    display: flex;
    flex-direction: column;
    img{
        width: 328px;
        height: 120px;
        margin: 17px 16px 12px;
        object-fit: contain;
        border: 1px solid #b8b8b8;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
    }

    p{
        color: var(--dark-peach);
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        width: 328px;
        height: 18px;
        margin: 12px 16px 8px;
    }

    span{
        color: #b8b8b8;
        height: 18px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
    }

    .categoria{
        margin: 8px 8px 8px 16px;
    }

    .tempo{
        margin: 8px 8px 10px 16px;
    }

    .delivery{
       margin: 8px 128px 10px 8px;
    }

    .endereco{
        margin: 10px 16px 16px;

    }

`