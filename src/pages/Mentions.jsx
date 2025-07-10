// MentionsLegales.jsx

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: 0 auto;
  font-family: Helvetica, sans-serif;
  color: #1a0f22;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1.5rem;
`;

const Paragraph = styled.p`
  line-height: 1.6;
  margin-bottom: 1rem;
`;

export default function MentionsLegales() {
  return (
    <Container>
      <Title>Mentions légales</Title>
      <Paragraph><strong>Éditeur du site :</strong> Ce site est édité par le groupe Wet Leg, dans le cadre de la promotion de l’album "Moisturizer".</Paragraph>
      <Paragraph><strong>Hébergement :</strong> Le site est hébergé par Vercel Inc, 440 N Barranca Ave #4133, Covina, CA 91723, États-Unis.</Paragraph>
      <Paragraph><strong>Responsable de publication :</strong> Wet Leg – contact@wetlegband.com</Paragraph>
      <Paragraph><strong>Crédits :</strong> Design, développement et contenu réalisés par l’équipe projet Wetleg 2025.</Paragraph>
      <Paragraph><strong>Propriété intellectuelle :</strong> Tous les contenus (textes, visuels, vidéos) sont la propriété exclusive du groupe Wet Leg. Toute reproduction est interdite sans autorisation écrite.</Paragraph>
    </Container>
  );
}
