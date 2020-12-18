import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: 80vw;
  height: 7rem;
  max-width: 120rem;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  font-size: 1.4rem;
  color: var(--text-primary);

  font-family: 'Roboto Mono', sans-serif;

  a {
    text-decoration: none;
    color: var(--text-primary);
    transition: color 0.2s ease;

    &:hover {
      color: var(--text-secondary);
    }
  }
`;
