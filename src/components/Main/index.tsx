import React from 'react';
import Image from 'next/image';
import { FaJs, FaReact, FaNodeJs } from 'react-icons/fa';
import { SiTypescript, SiNextDotJs } from 'react-icons/si';
import { BiChevronsDown } from 'react-icons/bi';
import SocialButtons from '../SocialButtons';
import {
  Container,
  TextSection,
  MeSection,
  Technologies,
  Scroll,
} from './styles';

const Main: React.FC = () => {
  const scrollDown = () => {
    window.scrollTo({
      top: 900,
      behavior: 'smooth',
    });
  };
  return (
    <>
      <Container>
        <TextSection
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, type: 'spring', stiffness: 120 }}
        >
          <h1>Matheus Motta</h1>
          <h2>Desenvolvedor FullStack</h2>
          <p>
            Olá! Sou de Porto Alegre e estou me especializando em desenvolver
            aplicações web performáticas, escaláveis e com foco na experiência
            de usuário. Crio soluções com:
          </p>
          <Technologies>
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
        <MeSection
          initial={{ x: 150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5, type: 'spring', stiffness: 50 }}
        >
          <Image src="/me.png" alt="me" width={500} height={620} />
          <SocialButtons />
        </MeSection>
      </Container>
      <Scroll
        initial={{ visibility: 'hidden' }}
        animate={{ visibility: 'visible', y: [10, -10, 10] }}
        transition={{ delay: 2.5, repeat: Infinity, duration: 1 }}
      >
        <BiChevronsDown onClick={scrollDown} />
      </Scroll>
    </>
  );
};

export default Main;
