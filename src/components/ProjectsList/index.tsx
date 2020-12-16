import React from 'react';
import Projects from '../Projects';
import { Container, Title } from './styles';

const ProjectsList: React.FC = () => {
  return (
    <Container>
      <Title>Meus projetos</Title>
      <Projects />
    </Container>
  );
};

export default ProjectsList;
