import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Container, ImageDiv, About, ExternalLink } from './styles';

const ProjectLeft: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Siberian',
      description:
        'Nesse projeto me inspirei em criar uma "versão soviética" da Amazon. Possui as funcionalidades completas de um e-commerce, como adicionar e remover produtos, processamento de pagamento e autenticação de usuário. Idealizei também o logo dessa marca fictícia.',
      technologies: ['Typescript', 'Node.js'],
      repository: 'http.com.br',
      website: 'www.com.br',
      image: 'aaa',
    },
    {
      id: 2,
      title: 'SkillDev',
      description:
        'Nesse projeto me inspirei em criar uma "versão soviética" da Amazon. Possui as funcionalidades completas de um e-commerce, como adicionar e remover produtos, processamento de pagamento e autenticação de usuário. Idealizei também o logo dessa marca fictícia.',
      technologies: ['typescript', 'nodejs'],
      repository: 'http.com.br',
      website: 'www.com.br',
      image: 'aaa',
    },
  ];
  return (
    <>
      {projects.map(project => (
        <Container>
          <About key={project.id}>
            <h4>{project.title}</h4>
            <p>{project.description}</p>
            <ul>
              {project.technologies.map(tech => (
                <li>{tech}</li>
              ))}
            </ul>
            <div>
              <a href={project.repository}>
                <FiGithub size={35} />
              </a>
              <a href={project.website}>
                <FiExternalLink size={35} />
              </a>
            </div>
          </About>
          <ImageDiv
            href={project.website}
            target="_blank"
            rel="noreferrer"
            whileHover={{ scale: 1.05 }}
          >
            <ExternalLink>
              <FiExternalLink size={75} />
            </ExternalLink>
          </ImageDiv>
        </Container>
      ))}
    </>
  );
};

export default ProjectLeft;
