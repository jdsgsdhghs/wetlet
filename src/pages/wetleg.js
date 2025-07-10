import React, { useState, useEffect } from "react";
import styled from "styled-components";
import HeroImageBlock from "../components/HeroImageBlock";
import BottomNav from "../components/BottomNav";
import MobileMenu from "../components/MobileMenu";
import GaleriePhoto from "../components/GaleriePhoto";
import Footer from "../components/Footer";

// Styled components
const Section = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 2rem;
  gap: 4rem;
  background-color: #f7f5f2;
  position: relative;
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
  transform: translate(100px, 150px) rotate(-15deg);

  @media (max-width: 768px) {
    width: 150px;
    transform: translate(40px, 80px) rotate(-10deg);
  }
`;

const Content = styled.div`
  max-width: 500px;

  @media (max-width: 768px) {
    text-align: center;
    margin: 0 auto;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-family: 'Anton', sans-serif;
  font-size: 4rem;
  color: black;
  margin: 0;
  z-index: 1;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const Star = styled.img`
  position: absolute;
  width: 100px;
  top: -20px;
  right: -40px;
  transform: ${({ rotate = 0, translateX = 0, translateY = 0 }) =>
    `translate(${translateX}px, ${translateY}px) rotate(${rotate}deg)`};

  @media (max-width: 768px) {
    width: 60px;
    right: -20px;
    top: -10px;
    transform: translate(-40px, -20px) rotate(15deg);
  }
`;

const Subtitle = styled.h3`
  margin-top: 1rem;
  font-weight: bold;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const Paragraph = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

export default function Wetleg() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <HeroImageBlock
        imageSrc="/assets/images/hero-home.png"
        titleImageSrc="/assets/images/title-moz.png"
      />

      {isMobile ? <MobileMenu /> : <BottomNav />}

      <Section>
        <PhotoWrapper>
          <Image src="/assets/images/wetleg-photo.png" alt="Wetleg" />
          <Tape src="/assets/images/tape-left.png" alt="Tape" />
        </PhotoWrapper>

        <Content>
          <TitleWrapper>
            <Star
              src="/assets/images/Star.png"
              alt="Star"
              rotate={25}
              translateX={-250}
              translateY={-40}
            />
            <Title>WETLEG</Title>
          </TitleWrapper>

          <Subtitle>Ironie, guitare, liberté.</Subtitle>

          <Paragraph>
            Wet Leg est un duo britannique formé sur l'île de Wight, connu pour
            ses morceaux à la fois percutants et désinvoltes. Avec une énergie
            brute et un goût prononcé pour l’absurde, elles bousculent les codes
            de l’indie rock avec humour et fraîcheur. Leur musique, portée par
            des guitares nerveuses et des refrains accrocheurs, évoque autant la
            spontanéité de la jeunesse que le besoin d’évasion.
          </Paragraph>
        </Content>
      </Section>

      <GaleriePhoto />
      <Footer />
    </>
  );
}
