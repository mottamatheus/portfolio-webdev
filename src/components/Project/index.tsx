import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Container, ImageDiv, About } from './styles';

const Project: React.FC = () => {
  return (
    <>
      <Container>
        <ImageDiv href="http://www.uber.com" target="_blank" rel="noreferrer">
          <div />
        </ImageDiv>
        <About>
          <h4>Siberian</h4>
          <p>
            Nesse projeto me inspirei em criar uma &quot;versão soviética&quot;
            da Amazon. Possui as funcionalidades completas de um e-commerce,
            como adicionar e remover produtos, processamento de pagamento e
            autenticação de usuário. Idealizei também o logo dessa marca
            fictícia.
          </p>
          <span>Typescript</span>
          <div>
            <a href="a">
              <FiGithub size={35} />
            </a>
            <a href="a">
              <FiExternalLink size={35} />
            </a>
          </div>
        </About>
      </Container>
    </>
  );
};

export default Project;
