import styled from "styled-components"; 

export const SignupContainer = styled.main`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 0 1.625rem;
 

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
      border-radius: 2px;
      background-color: var(--dark-peach);

  }
`;