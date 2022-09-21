import styled from "styled-components";

export const Footer=styled.footer`
    width: 360px;
    height: 10vh;
    display: flex;

    button{
        background-color: transparent;
        color: #b8b8b8;
        border: none;
        cursor: pointer;
        padding: 11px 46px 11px 47px;
        :hover{
            color: var(--dark-peach);
        }
    }
`

export const DivFundoPaginaFooter=styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-items: center;
    max-width: 100vw;
    min-height: 90vh;
    margin: auto;

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