import React from "react";
import styled from "styled-components";

const GalerieSection = styled.section`
  background-image: url("/assets/images/fond-grain.png");
  background-size: cover;
  background-position: center;
  padding: 5rem 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GalerieImage = styled.img`
  max-width: 100%;
  height: auto;
 
`;

export default function GaleriePhoto() {
  return (
    <GalerieSection>
      <GalerieImage src="/assets/images/galerie photo.png" alt="Galerie Wetleg" />
    </GalerieSection>
  );
}
