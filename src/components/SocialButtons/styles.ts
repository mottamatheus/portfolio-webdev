import styled from 'styled-components';

export const Container = styled.div`
  position: absolute;
  transition: all 0.2s ease;
  right: 0;
  z-index: 5;

  a {
    color: var(--text-primary);
    transition: all 0.2s ease;

    svg {
      margin-bottom: 1rem;
    }
  }
`;
