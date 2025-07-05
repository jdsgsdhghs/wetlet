import React from "react";
import styled from "styled-components";

const HeroContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  object-fit: cover;
  top: 0;
  left: 0;
  z-index: 0;
`;

const HeroTitle = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 5rem;
  font-weight: 900;
  color: #DD60F8;
  z-index: 1;
`;

export default function HeroSection() {
  return (
    <HeroContainer>
      <BackgroundImage src="/assets/images/image-herosection.png" alt="Hero" />
      <HeroTitle>MOISTURIZER</HeroTitle>
    </HeroContainer>
  );
}
