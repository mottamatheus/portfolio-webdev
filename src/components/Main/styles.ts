import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  height: 100vh;
  width: 80vw;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
`;

export const TextSection = styled.div`
  width: 50%;
  height: 100px;
  align-items: left;
  position: relative;
  top: 40%;
  transform: translateY(-50%);

  span {
    font-family: 'Roboto Mono', sans-serif;
    font-size: 2rem;
  }

  h1 {
    font-size: 7rem;
    color: var(--text-secondary);
  }

  h2 {
    width: 90%;
    font-weight: 400;
    font-size: 2.4rem;
  }

  p {
    width: 90%;
    margin-top: 3rem;
    font-size: 2rem;
  }
`;

export const MeSection = styled.div`
  width: 50%;
  min-width: 30rem;
  height: 70vh;
  align-items: center;
  justify-content: center;
  top: 15%;
  position: relative;
`;

export const Technologies = styled(motion.div)`
  width: 100%;
  justify-content: center;
  font-family: 'Roboto Mono', monospace;

  div {
    display: inline-block;
    text-align: center;
    margin-right: 2rem;
    margin-top: 4rem;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
    color: var(--text-secondary);

    &:hover {
      color: var(--text-primary);
    }

    p {
      font-size: 1.6rem;
      margin-top: 0.7rem;
      color: var(--text-primary);
    }
  }
`;
