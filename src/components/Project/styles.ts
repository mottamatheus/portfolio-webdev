import styled from 'styled-components';
import teste from '../../assets/siberian.png';

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

export const ImageDiv = styled.a`
  width: 60%;
  position: absolute;
  border-radius: 0.3rem;
  left: 0;
  z-index: 1;
  height: 35rem;
  box-shadow: 5px 6px 8px -4px rgba(0, 0, 0, 0.37);
  transition: all 0.2s ease;

  &:hover {
    height: 36rem;
  }

  div {
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 0.3rem;
    background: url(${teste});
  }
`;

export const About = styled.div`
  width: 50%;
  display: flex;
  z-index: 5;
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
