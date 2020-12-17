import styled from 'styled-components';

export const Container = styled.div``;

export const Title = styled.h2`
  font-size: 6rem;
  text-align: center;
  padding-bottom: 6rem;
  max-width: 120rem;
  margin: 0 auto;
  color: var(--text-secondary);

  @media (max-width: 500px) {
    font-size: 3rem;
  }
`;
