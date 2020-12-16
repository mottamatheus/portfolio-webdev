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

  img {
    width: 100%;
    z-index: -1;
  }

  svg {
    opacity: 0;
    color: var(--text-secondary);
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    transition: opacity 0.2s ease;
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
    backdrop-filter: blur(4px);
    background-color: rgba(42, 46, 46, 0.7);
    box-shadow: 5px 6px 8px -4px rgba(0, 0, 0, 0.37);
  }

  ul {
    list-style: none;
    font-family: 'Roboto Mono', monospace;
    margin-bottom: 2rem;
    font-size: 1.4rem;

    li {
      display: inline-block;
      margin-right: 2rem;
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

  &:hover {
    opacity: 1;
  }
`;
