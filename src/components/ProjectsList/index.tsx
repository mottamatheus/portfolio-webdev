import React from 'react';
import Project from '../Project';
import { Container } from './styles';

const ProjectsList: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Siberian',
      description:
        'Nesse projeto me inspirei em criar uma "versão soviética" da Amazon. Possui as funcionalidades completas de um e-commerce, como adicionar e remover produtos, processamento de pagamento e autenticação de usuário. Idealizei também o logo dessa marca fictícia.',
      technologies: ['typescript', 'nodejs'],
      repository: 'http.com.br',
      website: 'www.com.br',
      image: 'aaa',
    },
    {},
  ];
  return (
    <Container>
      <Project />
      <Project />
      <Project />
    </Container>
  );
};

export default ProjectsList;
