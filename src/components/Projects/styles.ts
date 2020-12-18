import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled.div`
  width: 80vw;
  max-width: 120rem;
  margin: 0 auto;
  display: flex;
  flex-direction: row;
  position: relative;
  margin-bottom: 7rem;
`;

export const ImageDiv = styled(motion.a)`
  width: 60%;
  position: absolute;
  border-radius: 0.3rem;
  z-index: 1;
  height: 35rem;
  box-shadow: 5px 6px 8px -4px rgba(0, 0, 0, 0.37);
  min-height: 100%;
  background-size: cover;
  background-size: contain auto;
  background-repeat: no-repeat;
  transition: all 0.3s ease;

  @media (max-width: 1150px) {
    width: 100%;
  }

  img {
    width: 100%;
    z-index: -1;
  }

  &:hover {
    svg {
      opacity: 1;
    }
  }
`;

export const About = styled.div`
  width: 50%;
  display: flex;
  z-index: 5;
  flex-direction: column;
  padding: 2rem;
  justify-content: center;
  height: 35rem;
  transition: all 0.2s ease;

  @media (max-width: 1150px) {
    width: 100%;
    background-color: rgba(15, 15, 15, 0.8);
    color: var(--text-primary);
    transition: all 0.2s ease;

    svg {
      color: var(--text-secondary);
    }
  }

  h4 {
    color: var(--text-secondary);
    font-size: 3.6rem;
    margin-bottom: 2rem;

    @media (max-width: 500px) {
      font-size: 3rem;
    }
  }

  p {
    font-size: 1.7rem;
    font-weight: 300;
    color: var(--text-primary);
    border-radius: 0.3rem;
    margin-bottom: 2rem;
    padding: 3rem;
    backdrop-filter: blur(4px);
    background-color: rgba(42, 46, 46, 0.7);
    box-shadow: 5px 6px 8px -4px rgba(0, 0, 0, 0.37);

    @media (max-width: 1150px) {
      color: var(--text-primary);
      font-size: 1.5rem;
      background: none;
      padding: 0;
      box-shadow: none;
    }
  }

  ul {
    list-style: none;
    font-family: 'Roboto Mono', monospace;
    margin-bottom: 2rem;
    font-size: 1.4rem;

    @media (max-width: 500px) {
      font-size: 1.2rem;
      align-items: center;
      justify-content: center;
    }

    li {
      display: inline-block;
      margin-right: 2rem;

      &:last-of-type {
        margin-right: 0;
      }
    }
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

export const ExternalLink = styled.div`
  opacity: 0;
  height: 35rem;
  background: linear-gradient(
    0deg,
    rgba(240, 240, 240, 0.75),
    rgba(240, 240, 240, 0.75)
  );
  width: 100%;
  transition: all 0.2s ease;
  backdrop-filter: blur(2px);
  border-radius: 0.3rem;
  display: flex;

  svg {
    opacity: 0;
    display: flex;
    margin: auto;
    color: var(--text-secondary);
    transition: opacity 0.2s ease;
  }

  &:hover {
    opacity: 1;
  }
`;

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
