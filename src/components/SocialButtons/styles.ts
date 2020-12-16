import styled from 'styled-components';
import { motion } from 'framer-motion';

export const Container = styled(motion.div)`
  position: absolute;
  transition: all 0.2s ease;
  right: 0;
  top: 20%;
  z-index: 5;

  a {
    color: var(--text-primary);
    transition: all 0.2s ease;
  }

  textarea {
    opacity: 0;
    visibility: hidden;
    text-decoration: none;
    position: absolute;
  }
`;
