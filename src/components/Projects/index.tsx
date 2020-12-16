import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Container, ImageDiv, About, ExternalLink } from './styles';
import teste2 from '../../assets/siberian.png';
import teste from '../../assets/skilldev.png';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Siberian',
      description:
        'Nesse projeto me inspirei em criar uma "versão soviética" da Amazon. Possui as funcionalidades completas de um e-commerce, como adicionar e remover produtos, processamento de pagamento e autenticação de usuário. Idealizei também o logo dessa marca fictícia.',
      technologies: ['Typescript', 'Node.js', 'CSS'],
      repository: 'http.com.br',
      website: 'www.com.br',
      image: `${teste2}`,
    },
    {
      id: 2,
      title: 'SkillDev',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quod quis repellendus ullam numquam et. Soluta consequuntur cupiditate vitae nemo aliquam assumenda ducimus magni quas eius! Error omnis voluptatum a ipsa. Inventore ',
      technologies: ['Next.js', 'nodejs'],
      repository: 'http.com.br',
      website: 'www.com.br',
      image: `${teste}`,
    },
    {
      id: 3,
      title: 'Spotifyer',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quod quis repellendus ullam numquam et. Soluta consequuntur cupiditate vitae nemo aliquam assumenda ducimus magni quas eius! Error omnis voluptatum a ipsa. Inventore ',
      technologies: ['Next.js', 'nodejs'],
      repository: 'http.com.br',
      website: 'www.com.br',
      image: `${teste}`,
    },
    {
      id: 4,
      title: 'Siberian',
      description:
        'Nesse projeto me inspirei em criar uma "versão soviética" da Amazon. Possui as funcionalidades completas de um e-commerce, como adicionar e remover produtos, processamento de pagamento e autenticação de usuário. Idealizei também o logo dessa marca fictícia.',
      technologies: ['Typescript', 'Node.js', 'CSS'],
      repository: 'http.com.br',
      website: 'www.com.br',
      image: `${teste2}`,
    },
  ];
  return (
    <>
      {projects.map((project, index) =>
        index % 2 === 0 ? (
          <Container
            style={{
              justifyContent: 'flex-end',
            }}
          >
            <About
              style={{
                textAlign: 'right',
                alignItems: 'flex-end',
              }}
              key={project.id}
            >
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
              style={{
                left: 0,
                backgroundImage: `var(--image-shade), url(${project.image})`,
              }}
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
        ) : (
          <Container
            style={{
              justifyContent: 'flex-start',
            }}
          >
            <About
              style={{
                textAlign: 'left',
                alignItems: 'flex-start',
              }}
              key={project.id}
            >
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
              style={{
                right: 0,
                backgroundImage: `var(--image-shade), url(${project.image})`,
              }}
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
        ),
      )}
    </>
  );
};

export default Projects;
