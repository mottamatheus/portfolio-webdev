import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  height: 100vh;
  width: 80vw;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  @media (max-width: 500px) {
    width: 90vw;
    justify-content: center;
  }
`;

export const TextSection = styled(motion.div)`
  width: 50%;
  height: 10rem;
  align-items: left;
  position: relative;
  top: 38%;
  transform: translateY(-50%);

  @media (max-width: 500px) {
    width: 100vw;
    justify-content: center;
  }

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
    font-size: 1.8rem;
  }

  @media (max-width: 1150px) {
    top: 40%;
    width: 100%;

    h1 {
      font-size: 5rem;
    }

    h2 {
      font-size: 2rem;
    }

    p {
      width: 100%;
    }

    @media (max-width: 500px) {
      top: 40%;
      width: 90%;

      h1 {
        font-size: 3rem;
      }

      h2 {
        font-size: 1.4rem;
      }

      p {
        font-size: 1.3rem;
        width: 70%;
        line-height: 1.7rem;
      }
    }
  }
`;

export const MeSection = styled.div`
  width: 50%;
  min-width: 30rem;
  height: 70vh;
  text-align: center;
  align-items: center;
  justify-content: center;
  top: 15%;
  position: relative;
  transition: all 0.2s ease;

  @media (max-width: 1150px) {
    position: absolute;
    opacity: 1;

    svg {
      width: 60%;
      height: 50%;
      transform: translate(40%, 50%);
    }

    img {
      opacity: 0.1;
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
