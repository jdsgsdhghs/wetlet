import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


// === STYLED COMPONENTS ===

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
  background-color: #f7f5f2;
`;

const TitleWrapper = styled.div`
  position: relative;
  width: 777px;
  height: 124px;
  transform: translate(-210px, 25px);
  z-index: 2;
  font-family: "OPTIVenus", sans-serif;
`;

const Title = styled.h2`
  font-size: 3.5rem;
  font-weight: 800;
  font-family: "Anton", sans-serif;
  position: absolute;
  top: -40px;
  left: 10%;
  transform: translateX(85%);
  z-index: 2;
`;

const Text = styled.div`
  max-width: 450px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;
  position: relative;
`;

const TextPaperWrapper = styled.div`
  position: relative;
  width: 550px;
  height: auto;
  transform: translate(-90px, -100px);
  z-index: 2;
`;

const RippedPaper = styled.img`
  width: 800px;
  max-height: 500px;
  max-width: 1150px;
  height: auto;
  display: block;
  position: relative;
`;

const PaperText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-100px, -114px);
  color: #000;
  font-family: "Helvetica", sans-serif;
  font-size: 1.05rem;
  width: 82%;
  line-height: 1.6;
  z-index: 2;
`;

const Button = styled(Link)`
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
  transform: translate(200px, -140px);
  margin-top: 1rem;

  &:hover {
    background-color: #80bc3e;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 560px;
  height: auto;
  transform: translate(450px, -50px);
`;

const AlbumImage = styled.img`
  width: 90%;
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

// === COMPONENT ===

export default function NewAlbumSection() {
  return (
    <Section>
      <Container>
        <TitleWrapper>
          <Title>NEW ALBUM</Title>
        </TitleWrapper>

        <Text>
          <TextPaperWrapper>
            <RippedPaper
              src="assets/images/fond-papier.png"
              alt="Fond déchiré"
            />
            <PaperText>
              L’album Moisturizer de Wet Leg, sorti le 11 juillet 2025, marque
              une évolution notable dans leur son. Enregistré à Southwold,
              Norfolk, avec le producteur Dan Carey, il dévoile une approche
              plus énergique et affirmée, tout en conservant leur humour décalé
              et leur style unique. Des titres comme "Catch These Fists",
              "Davina McCall" et "CPR" illustrent cette nouvelle direction,
              mêlant des riffs incisifs à des paroles introspectives.
            </PaperText>
          </TextPaperWrapper>

          <Button to="/album">DÉCOUVRIR</Button>
        </Text>

        <ImageContainer>
          <AlbumImage
            src="assets/images/album-cover.png"
            alt="Album Moisturizer"
          />
          <TapeRight
            src="assets/images/tape-right.png"
            alt="Tape Right"
          />
        </ImageContainer>
      </Container>
      
    </Section>
  );
}
