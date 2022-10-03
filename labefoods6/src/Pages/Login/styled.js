import styled from "styled-components"; 

export const LoginPageStyle = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 0 184px;
    justify-content: center;
    align-items: center;
    img {
        width: 104px;
        height: 58px;
        margin: 68px 0 16px;
        object-fit: contain;
    }
    form > p {
        margin: 0 32px;
        letter-spacing: -0.29px;
        font-size: 12px;
        color: #e02020;
    }
`

export const TextContainer = styled.div`
    
    width: 360px;
    height: 42px;
    padding: 12px 32px;
  p, a {
    width: 296px;
    height: 18px;
    text-align: center;
    color: var(--black);
    text-decoration: none;
  }
`

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 360px;
  max-height: 640px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  margin: 0 auto;

  img {
    width: 10rem;
    margin-top: 40px;
    padding: 2px;
  }

  p {
    width: 296px;
    height: 28px;
    text-align: center;
    color: var(--black);
    text-decoration: none;
    font-size: 16px;
    font-family: Roboto;

  }

  h1 {
    width: 296px;
    height: 18px;
    font-family: Roboto;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: center;
    color: #000;
    margin-top: 28px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      width: 260px;
      height: 16px;
      margin: 8px 0 ;
      padding: 19px 48px 19px 16px;
      border-radius: 2px;
      border: solid 1px var(--greyish);
    }
    button {
        width: 328px;
        height: 42px;
        padding: 12px 16px;
        border-radius: 2px;
        border: 2px solid var(--dark-peach);
        background-color: var(--dark-peach);
        font-family: Roboto;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -0.39px;
        text-align: center;
        color: #000;
      }
    }
`;

export const VisualizarSenhaStyled=styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  .show{
    border: none;
    background-color: transparent;
    width: 24px;
    position: fixed;
    right: 35vw;
  }
`
