// Wetleg2025.jsx

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: Helvetica, sans-serif;
  color: #1a0f22;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
`;

export default function Wetleg2025() {
  return (
    <Container>
      <Title>Wetleg 2025</Title>
      <Paragraph>
        En 2025, Wet Leg revient sur le devant de la scène avec l’album <strong>Moisturizer</strong> :
        un projet audacieux mêlant énergie live, textures pop et inspirations insulaires.
        Le site Wetleg 2025 célèbre cette sortie à travers une expérience interactive
        pensée pour les fans : dates de tournée, extraits vidéo, blog exclusif, galerie visuelle…
        Ce site est un hommage à l’univers de Wet Leg et à l’esprit DIY du groupe.
      </Paragraph>
    </Container>
  );
}
