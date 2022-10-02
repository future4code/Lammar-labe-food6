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
  font-size: 26px;
}

h1 {
  font-size:16px;
  padding: 20px;
}
  form {
    display: flex;
    flex-direction: column;
    input {
      width: 260px;
      height: 16px;
      margin: 1rem 0 0;
      padding: 19px 48px 19px 16px;
      border-radius: 2px;
      border: solid 1px var(--greyish);

    }


    button {
        width: 328px;
        height: 42px;
        padding: 12px 16px;
        border-radius: 2px;
        background-color: var(--dark-peach);
      }
    }
  }
`;

