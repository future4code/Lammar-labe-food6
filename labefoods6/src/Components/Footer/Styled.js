import styled from "styled-components";

export const Footer=styled.footer`
    width: 100vw;
    height: 5vh;
    display: flex;
    position: fixed;
    justify-content: center;
    align-items: center;
    bottom: 0;
    border-top: 1px solid lightgray;
    background-color: white;

    button{
        background-color: white;
        color: #b8b8b8;
        border: none;
        height: 90%;
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