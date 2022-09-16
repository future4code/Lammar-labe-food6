import styled from "styled-components";

export const DivFundoResultado=styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: start;
    width: 100vw;
    height: 80vh;
    margin: auto;
`

export const CardItens=styled.div`
    display: flex;
    max-width: 328px;
    max-height: 112px;
    margin: 7px 0 0;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
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
        margin: 18px 49px 0 8px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #e86e5a;
    }

    span{
        font-family: 'Roboto', sans-serif;
        width: 198px;
        height: 30px;
        margin: 6px 17px 6px 8px;
        font-family: Roboto;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.34px;
        color: #b8b8b8;
    }

`

export const Preco=styled.div`
    display: flex;
    max-width: 97%;

    span{
        width: 108px;
        height: 19px;
        margin: 6px 17px 15px 8px;
        font-family: 'Roboto', sans-serif;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: #000;
    }

    button{
        width: 90px;
        height: 31px;
        margin: 9px 0 0 17px;
        padding: 8px 20.5px 9px 21.5px;
        border-top-left-radius: 8px;
        border-bottom-right-radius: 8px;
        border: solid 1px #000;
        font-family: 'Roboto', sans-serif;
        font-size: 12px;
        letter-spacing: -0.29px;
        text-align: center;
        color: #000;
        cursor: pointer;



    }

`