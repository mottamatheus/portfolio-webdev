import React from 'react';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <span>
        Desenvolvido por{' '}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/motta-matheus/"
        >
          Matheus Motta
        </a>
        .
      </span>
    </Container>
  );
};

export default Footer;
