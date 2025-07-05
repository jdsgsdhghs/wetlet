import React from "react";
import styled from "styled-components";
import HeroImageBlock from "../components/HeroImageBlock";
import BottomNav from "../components/BottomNav";
import GaleriePhoto from "../components/GaleriePhoto";
import Footer from "../components/Footer";

const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 4rem;
  background-color: white;
  position: relative;
  background-color: #f7f5f2;
`;

const PhotoWrapper = styled.div`
  position: relative;
  max-width: 400px;
  border: 30px solid white;
  box-shadow: 70px 65px 60px rgba(252, 246, 246, 0.97);
`;

const Image = styled.img`
  width: 100%;
  display: block;
`;

const Tape = styled.img`
  position: absolute;
  bottom: -20px;
  right: -20px;
  width: 300px;
  transform: rotate(-15deg);
  transform: translate(100px, 150px);
`;

const Content = styled.div`
  max-width: 500px;
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

const Title = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: 4rem;
  color: black;
  margin: 0;
  z-index: 1; /* ← devant l’étoile */
`;

const Star = styled.img`
  position: absolute;
  width: 100px;
  top: -20px;
  right: -40px; 
  transform: ${({ rotate, translateX = 0, translateY = 0 }) =>
    `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`};
`;

const Subtitle = styled.h3`
  margin-top: 1rem;
  font-weight: bold;
`;

const Paragraph = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
`;

const Wetleg = () => {
  return (
    <div>
      <HeroImageBlock
        imageSrc="/assets/images/hero-home.png" // ou une autre image si tu veux changer
        titleImageSrc="/assets/images/title-moz.png"
      />
      <BottomNav />
       <Section>
      <PhotoWrapper>
        <Image src="/assets/images/wetleg-photo.png" alt="Wetleg" />
        <Tape src="/assets/images/tape-left.png" alt="Tape" />
      </PhotoWrapper>

      <Content>
        <TitleWrapper>
           <Star src="/assets/images/Star.png" alt="Star" rotate={25}  translateX={-250}
  translateY={-40} />
          <Title>WETLEG</Title>
          
        </TitleWrapper>
        <Subtitle>Ironie, guitare, liberté.</Subtitle>
        <Paragraph>
          Wet Leg est un duo britannique formé sur l'île de Wight, connu pour ses morceaux à la fois percutants et désinvoltes. Avec une énergie brute et un goût prononcé pour l’absurde, elles bousculent les codes de l’indie rock avec humour et fraîcheur. Leur musique, portée par des guitares nerveuses et des refrains accrocheurs, évoque autant la spontanéité de la jeunesse que le besoin d’évasion.
        </Paragraph>
      </Content>
    </Section>
    <GaleriePhoto />
    <Footer />
    </div>
  );
};

export default Wetleg;
