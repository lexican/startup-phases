import styled from 'styled-components';

export const PhaseStyles = styled.div`
  display: flex;
  align-items: center;
  margin-top: 2rem;
  margin-bottom: 1.5rem;
  .title {
    display: flex;
    align-items: center;
    gap: 1rem;
    .phase-number {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: #000;
      color: #fff;
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      font-size: 15px;
      font-weight: 400;
    }
    h3 {
      margin: 0;
      margin-right: 30px;
      font-size: 1.5rem;
      line-height: 1;
      font-weight: 700;
    }
  }
`;
