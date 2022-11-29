import styled from 'styled-components';

export const HomeStyles = styled.div`
  position: relative;
  max-height: 100vh;
  min-height: 100vh;
  background-color: #ffffff;
  padding-top: 5rem;
  padding-bottom: 1rem;
  color: #000000;
  .container {
    margin: auto;
    width: 500px;
    background-color: #f2f2f2;
    height: 73vh;
    padding: 3rem;
    .inner-container {
      background-color: #ffffff;
      width: 100%;
      height: 100%;
      padding: 2rem;
      overflow-y: auto;
    }

    h1 {
      margin: 0;
      margin-bottom: 1rem;
      font-weight: 600;
    }
    @media (max-width: 768px) {
      padding: 1.4rem;
      width: 100%;
    }
  }
  .footer {
    height: 100%;
    width: 100%;
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    @media (max-width: 768px) {
      padding: 1.4rem;
      width: 100%;
    }
    h2 {
      font-weight: 700;
    }
    @media (max-width: 768px) {
      padding: 1.4rem;
      margin-top: 2rem;
      h2 {
        font-size: 1.1em;
      }
    }
  }
`;
