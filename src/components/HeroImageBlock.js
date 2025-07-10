import React from "react";
import styled from "styled-components";

const HeroSection = styled.section`
  height: calc(100vh - 57px);  /* ✅ pour libérer l’espace de la nav */
  width: 100%;
 padding: 2rem 1.5rem 2rem 1.5rem; /* haut droite bas gauche */

  background-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  position: relative;
  overflow: hidden;
`;

const BackgroundImage = styled.img`
  width: 100%;          /* ✅ prend toute la largeur dispo */
  height: 100%;         /* ✅ prend toute la hauteur dispo */
  object-fit: cover;    /* ✅ couvre sans déformation */
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