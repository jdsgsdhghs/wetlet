import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  height: calc(100vh - 57px);
  width: 100%;
  padding: 2rem 1.5rem;
  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    display: none;
  }
`;

const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border: 8px solid white;
`;

const TitleImage = styled.img`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 40%;
  max-width: 400px;
  z-index: 1;
`;

export default function HeroImageBlock({ imageSrc, titleImageSrc }) {
  return (
    <HeroSection>
      <BackgroundImage src={imageSrc} alt="Hero background" />
      <TitleImage src={titleImageSrc} alt="Hero title" />
    </HeroSection>
  );
}
