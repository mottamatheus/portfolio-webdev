import styled from 'styled-components';

export const Container = styled.div`
  width: 80vw;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 5rem;
  justify-content: flex-end;
`;

export const Project = styled.div`
  width: 60%;
  border-radius: 0.3rem;
  position: absolute;
  left: 0;
  z-index: -1;
  height: 35rem;
  background-color: var(--text-secondary);
  box-shadow: 5px 6px 8px -4px rgba(0, 0, 0, 0.37);
`;

export const About = styled.div`
  width: 50%;
  display: flex;
  flex-direction: column;
  text-align: right;
  align-items: flex-end;
  padding: 2rem;
  justify-content: center;
  height: 35rem;

  h4 {
    color: var(--text-secondary);
    font-size: 3.6rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.7rem;
    color: var(--text-primary);
    border-radius: 0.3rem;
    margin-bottom: 2rem;
    padding: 3rem;
    background-color: var(--bg-card);
    box-shadow: 5px 6px 8px -4px rgba(0, 0, 0, 0.37);
  }

  span {
    font-family: 'Roboto Mono', monospace;
    margin-bottom: 2rem;
    font-size: 1.4rem;
  }

  a {
    color: var(--text-primary);
    margin-right: 0.6rem;
    text-decoration: none;
    overflow: hidden;
    transition: all 0.3s ease;

    &:hover {
      color: var(--text-secondary);
    }
  }
`;
