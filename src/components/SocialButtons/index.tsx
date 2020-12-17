import { motion } from 'framer-motion';
import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { Container } from './styles';

const SocialButtons: React.FC = () => {
  return (
    <Container>
      <motion.div
        whileHover={{
          scale: 1.15,
          transition: {
            yoyo: Infinity,
          },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          href="https://github.com/mottamatheus/"
          rel="noreferrer"
          target="_blank"
        >
          <FaGithub size={80} />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.15,
          transition: {
            yoyo: Infinity,
          },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <a
          href="https://www.linkedin.com/in/motta-matheus/"
          rel="noreferrer"
          target="_blank"
        >
          <FaLinkedin size={80} />
        </a>
      </motion.div>
      <motion.div
        whileHover={{
          scale: 1.15,
          transition: {
            yoyo: Infinity,
          },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <a href="mailto:matheusmottaq@gmail.com">
          <MdMail size={80} />
        </a>
      </motion.div>
    </Container>
  );
};

export default SocialButtons;
