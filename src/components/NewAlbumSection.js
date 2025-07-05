import React from "react";
import styled from "styled-components";

const TitleWrapper = styled.div`
  position: relative;
  width: 100%; /* ou une largeur adaptée */
  height: 100px; /* ajuste selon besoin */
  transform: translate(-400px, 10px); /* ↔ gauche (X), ↕ haut (Y) */
   z-index: 2; /* 🔼 met au-dessus */
`;

const TornBlock = styled.div`
  position: relative;
  max-width: 600px; /* tu peux augmenter/diminuer */
  margin-left: auto; /* ⬅️ le pousse vers la droite */
  margin-right: 0;
`;
const TornImage = styled.img`
  width: 100%;
  display: block;
`;
const TornText = styled.div`
  position: absolute;
  top: 50%; /* ajuste verticalement */
  left: 50%; /* ajuste horizontalement */
  transform: translate(-50%, -50%);
  text-align: center;
  color: #000;
  padding: 1rem;
  width: 80%;
  font-family: "Helvetica", sans-serif;
`;


const Section = styled.section`
  padding: 4rem 0;
`;

const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-inline: 17rem;
  gap: 4rem;
  flex-wrap: wrap;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding-inline: 2rem;
    text-align: center;
  }
`;

const Text = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  font-family: "Anton", sans-serif;
  position: relative;
  z-index: 2;
  position: absolute;
  top: -40px; 
  left: 5; /* Commence à gauche */
  transition: left 0.3s ease;
  left: 10px; // un peu vers la droite
left: 200px; // encore plus à droite
left: 10%; transform: translateX(85%); // centré

  
  
`;



const Description = styled.p`
  font-size: 0.95rem;
  line-height: 1.5;
  margin-bottom: 2rem;
  position: relative;
  z-index: 2;
`;

const Button = styled.a`
  display: inline-block;
  background-color: #7e9d38;
  color: white;
  padding: 0.6rem 1.4rem;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  font-size: 0.85rem;
  letter-spacing: 1px;
  transition: background-color 0.3s;
  margin-top: 1rem;
  transform: translate(20px, -200px); /* ↔ gauche (X), ↕ haut (Y) */

  &:hover {
    background-color: #6a852e;
  }
`;


const ImageContainer = styled.div`
  position: relative;
  width: 660px;
  height: auto;
 transform: translate(-60px, -200px); /* ↔ gauche (X), ↕ haut (Y) */
  @media (max-width: 768px) {
    margin: auto;
  }
`;

  const TextPaperWrapper = styled.div`
  position: relative;
  width: 250px;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translate(90px, -150px); /* pour le positionner comme tu veux */
  z-index: 2; /* 🔼 met au-dessus */
`;



const RippedPaper = styled.img`
  width: 800px;
   max-height: 500px; // facul
  max-width: 1150px;
  height: auto;
  position: relative;
  display: block;
`;const PaperText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #000;
  font-family: "Helvetica", sans-serif;
  font-size: 1.05rem;
  width: 82%;             /* ✅ s'adapte à l’intérieur du papier sans le déformer */
  line-height: 1.6;
  padding: 0.5rem;
  text-align: justify;
  z-index: 2;
`;





const AlbumImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 6px;
`;

const Tape = styled.img`
  position: absolute;
  width: 120px;
`;

const TapeRight = styled(Tape)`
  bottom: -200px;
  right: -180px;
  transform: rotate(5deg);
  width: 450px;
`;

export default function NewAlbumSection() {
  return (
    <Section>
      <Container>
        <TitleWrapper>
  <Title>NEW ALBUM</Title>
</TitleWrapper>
        <Text>
          <TextPaperWrapper>
  <RippedPaper src="assets/images/fond-papier.png" alt="Fond déchiré" />
  <PaperText>
  L’album *Moisturizer* de Wet Leg, sorti le 11 juillet 2025, marque une évolution notable dans leur son. Enregistré à Southwold, l’album dévoile une approche plus affirmée et introspective.
</PaperText>

</TextPaperWrapper>


         
          <Button href="#">DÉCOUVRIR</Button>
        </Text>
        <ImageContainer>
          <AlbumImage src="assets/images/album-cover.png" alt="Album Moisturizer" />
          <TapeRight src="assets/images/tape-right.png" alt="Tape Right" />
        </ImageContainer>
      </Container>
    </Section>
  );
}
