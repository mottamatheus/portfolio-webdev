import React from 'react';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { Container, ImageDiv, About, ExternalLink } from './styles';
import teste2 from '../../assets/siberian.png';
import teste from '../../assets/skilldev.png';
import goPets from '../../assets/gopets.png';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'GoPets',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quod quis repellendus ullam numquam et. Soluta consequuntur cupiditate vitae nemo aliquam assumenda ducimus magni quas eius! Error omnis voluptatum a ipsa. Inventore ',
      technologies: ['React.js', 'Typescript', 'Node.js', 'styled-components'],
      repository: 'http.com.br',
      website: 'www.com.br',
      image: `${goPets}`,
    },
    {
      id: 2,
      title: 'Siberian',
      description:
        'Nesse projeto me inspirei em criar uma "versão soviética" da Amazon. Possui as funcionalidades completas de um e-commerce, como adicionar e remover produtos, processamento de pagamento e autenticação de usuário. Idealizei também o logo dessa marca fictícia.',
      technologies: ['Typescript', 'Node.js', 'CSS', 'HTML'],
      repository: 'https://github.com/mottamatheus/siberian',
      website: 'https://challenge-5f5c1.web.app/',
      image: `${teste2}`,
    },
    {
      id: 3,
      title: 'SkillDev',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus, quod quis repellendus ullam numquam et. Soluta consequuntur cupiditate vitae nemo aliquam assumenda ducimus magni quas eius! Error omnis voluptatum a ipsa. Inventore ',
      technologies: ['Next.js', 'nodejs'],
      repository: 'https://github.com/mottamatheus/skilldev',
      website: 'https://mottaskilldev.firebaseapp.com/',
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
            key={project.id}
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
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div>
                <a target="_blank" rel="noreferrer" href={project.repository}>
                  <FiGithub size={35} />
                </a>
                <a target="_blank" rel="noreferrer" href={project.website}>
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
            key={project.id}
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
                  <li key={tech}>{tech}</li>
                ))}
              </ul>
              <div>
                <a target="_blank" rel="noreferrer" href={project.repository}>
                  <FiGithub size={35} />
                </a>
                <a target="_blank" rel="noreferrer" href={project.website}>
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
