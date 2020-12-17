import React from 'react';
import Image from 'next/image';
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNextDotJs } from 'react-icons/si';
import SocialButtons from '../SocialButtons';
import { Container, TextSection, MeSection, Technologies } from './styles';

const Main: React.FC = () => {
  return (
    <Container>
      <TextSection
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, type: 'spring', stiffness: 120 }}
      >
        <h1>Matheus Motta</h1>
        <h2>Desenvolvedor FullStack</h2>
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
            <FaReact size={40} />
            <p>ReactJS</p>
          </div>
          <div>
            <SiTypescript size={40} />
            <p>TypeScript</p>
          </div>
          <div>
            <SiNextDotJs size={40} />
            <p>Next.js</p>
          </div>
          <div>
            <FaJs size={40} />
            <p>JavaScript</p>
          </div>
          <div>
            <FaNodeJs size={40} />
            <p>Node.js</p>
          </div>
        </Technologies>
      </TextSection>
      <MeSection>
        <SocialButtons />
        <Image src="/me.png" alt="me" width={500} height={620} />
      </MeSection>
    </Container>
  );
};

export default Main;
