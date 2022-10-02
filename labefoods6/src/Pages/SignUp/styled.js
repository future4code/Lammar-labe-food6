import styled from "styled-components"; 

export const SignupContainer = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0 1.625rem;
  .go-back-button {
    
    margin: 1.44rem 20.06rem 1rem 1rem;
  }
  .go-back-button svg {
    width: 1.44rem;
    height: 1.5rem;
  }
  img {
    width: 6.5rem;
    height: 3.625rem;
    margin: 1.5rem 8rem 1rem;
    object-fit: contain;
  }
  h2 {
    font-family: "Roboto", sans-serif;
    font-size: 1rem;
    letter-spacing: -0.39px;
    text-align: center;
    padding: 0.75rem 2rem;
  }
  form {
    width: 22.5rem;
    button {
      width: 100%;
    }
    input {
      width: 260px;
      height: 16px;
      margin: 1rem 0 0;
      padding: 19px 48px 19px 16px;
      border-radius: 2px;
      border: solid 1px var(--greyish);

    }

    p {
      margin: 1% 0;
    }

    button {
      width: 328px;
      height: 42px;
      padding: 12px 16px;
      border-radius: 2px;
      background-color: var(--dark-peach);
  }
`;