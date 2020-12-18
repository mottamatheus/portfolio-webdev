import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  height: 100vh;
  width: 80vw;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (max-width: 500px) {
    width: 90vw;
    justify-content: center;
  }
`;

export const TextSection = styled(motion.div)`
  width: 50%;
  align-items: left;
  position: relative;

  span {
    font-family: 'Roboto Mono', sans-serif;
    font-size: 2rem;
  }

  h1 {
    font-size: 6.4rem;
    color: var(--text-secondary);

    font-family: 'Inter', sans-serif;
  }

  h2 {
    width: 90%;
    font-weight: 400;
    font-size: 3rem;
    font-family: 'Roboto Mono', sans-serif;
  }

  p {
    font-family: 'Inter', sans-serif;
    line-height: 2.7rem;
    font-weight: 300;
    width: 90%;
    margin-top: 5rem;
  }

  @media (max-width: 1150px) {
    h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      width: 100%;
    }

    @media (max-width: 1000px) {
      top: 10%;
      width: 90%;

      h1 {
        font-size: 3rem;
      }

      h2 {
        font-size: 1.4rem;
      }

      p {
        font-size: 1.2rem;
        width: 75%;
        line-height: 1.7rem;
      }
    }
  }
`;

export const MeSection = styled(motion.div)`
  width: 50%;
  height: 70vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.2s ease;

  @media (max-width: 1000px) {
    position: absolute;
    opacity: 1;
    width: 70%;

    img {
      opacity: 0.1;
      width: 100%;
    }

    svg {
      width: 6.5rem;
      height: 6.5rem;

      @media (max-width: 500px) {
        width: 4.2rem;
        height: 4.2rem;
      }
    }
  }
`;

export const Technologies = styled(motion.div)`
  width: 100%;
  justify-content: center;

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

    @media (max-width: 500px) {
      margin-right: 0.7rem;
      svg {
        display: inline-block;
        width: 70%;
      }
    }

    p {
      font-size: 1.4rem;
      margin-top: 0.7rem;
      font-family: 'Roboto Mono', sans-serif;
      color: var(--text-primary);

      @media (max-width: 1150px) {
        font-size: 1.2rem;
      }

      @media (max-width: 500px) {
        font-size: 1rem;
      }
    }
  }
`;

export const Scroll = styled(motion.div)`
  display: flex;
  position: absolute;
  color: var(--text-secondary);
  margin: 0 auto;
  z-index: 7;
  text-align: center;
  align-items: center;
  justify-content: center;
  bottom: 5%;
  width: 80vw;

  svg {
    display: flex;
    width: 10rem;
    height: 10rem;
  }
`;
