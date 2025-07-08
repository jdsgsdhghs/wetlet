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
  background-color: #f7f5f2;
  position: relative;

  /* Mobile styles */
  @media (max-width: 768px) {
    flex-direction: column; /* Arrange elements vertically */
    padding: 2rem 1rem;
    gap: 2rem;
  }
`;

const PhotoWrapper = styled.div`
  position: relative;
  max-width: 400px;
  border: 30px solid white;
  box-shadow: 70px 65px 60px rgba(252, 246, 246, 0.97);

  /* Mobile styles */
  @media (max-width: 768px) {
    max-width: 100%;
    margin-bottom: 1rem;
  }
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

  /* Mobile styles */
  @media (max-width: 768px) {
    width: 200px;
    transform: translate(50px, 80px);
  }
`;

const Content = styled.div`
  max-width: 500px;
  text-align: center;

  /* Mobile styles */
  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  /* Mobile styles */
  @media (max-width: 768px) {
    justify-content: center;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: 4rem;
  color: black;
  margin: 0;
  z-index: 1;

  /* Mobile styles */
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Star = styled.img`
  position: absolute;
  width: 100px;
  top: -20px;
  right: -40px;
  transform: ${({ rotate, translateX = 0, translateY = 0 }) =>
    `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`};

  /* Mobile styles */
  @media (max-width: 768px) {
    width: 80px;
    top: -10px;
    right: -30px;
  }
`;

const Subtitle = styled.h3`
  margin-top: 1rem;
  font-weight: bold;

  /* Mobile styles */
  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const Paragraph = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  margin-top: 1rem;

  /* Mobile styles */
  @media (max-width: 768px) {
    font-size: 0.95rem;
    text-align: center;
  }
`;

const Wetleg = () => {
  return (
    <div>
      {/* HeroImageBlock should be hidden on mobile */}
      <BottomNav />
      <Section>
        <PhotoWrapper>
          <Image src="/assets/images/wetleg-photo.png" alt="Wetleg" />
          <Tape src="/assets/images/tape-left.png" alt="Tape" />
        </PhotoWrapper>

        <Content>
          <TitleWrapper>
            <Star src="/assets/images/Star.png" alt="Star" rotate={25} translateX={-250} translateY={-40} />
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
