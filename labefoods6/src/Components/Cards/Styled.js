import styled from "styled-components"

export const CardItens=styled.div`
  width: 328px;
  height: 112px;
  margin-bottom: 8px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  display: flex;

    img{
        width: 97px;
        height: 112.6px;
        object-fit: cover;
    }
`

export const InformacaoProduto=styled.div`
    display: flex;
    flex-direction: column;

    p{
        width: 166px;
        height: 18px;
        margin-left: 6px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--dark-peach);  
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

    .nome{
        width: 166px;
        height: 18px;
        margin-left: 6px;
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        color: var(--dark-peach);   
    }

    .descricao{
        font-family: 'Roboto', sans-serif;
        width: 240px;
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

    .quantidade{
        width: 33px;
        max-height: 33px;
        margin-left: 197px;
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
        margin: 5px 0 0 9px;
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
export const DivFundoResultado=styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    max-width: 100vw;
    min-height: 100vh;
    margin: auto;
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

export const DivCarregando=styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`