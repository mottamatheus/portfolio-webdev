import React from 'react';
import Image from 'next/image';
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNextDotJs } from 'react-icons/si';

import { Container, TextSection, MeSection, Technologies } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <TextSection>
        <h1>Matheus Motta</h1>
        <h2>Desenvolvedor Web & Internacionalista</h2>
        <p>
          Olá! Sou de Porto Alegre e estou me especializando em desenvolver
          aplicações web performáticas, escaláveis e com foco na experiência de
          usuário. Crio soluções com:
        </p>
        <Technologies
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, type: 'spring', stiffness: 120 }}
        >
          <div>
            <FaReact size={55} />
            <p>ReactJS</p>
          </div>
          <div>
            <SiTypescript size={47} />
            <p>TypeScript</p>
          </div>
          <div>
            <SiNextDotJs size={47} />
            <p>Next.js</p>
          </div>
          <div>
            <FaJs size={50} />
            <p>JavaScript</p>
          </div>
          <div>
            <FaNodeJs size={47} />
            <p>Node.js</p>
          </div>
        </Technologies>
      </TextSection>
      <MeSection>
        <Image src="/me.png" alt="me" width={500} height={620} />
      </MeSection>
    </Container>
  );
};

export default Main;
