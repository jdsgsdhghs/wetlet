import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Section = styled.section`
  padding: 4rem 0;
  background-color: #f7f5f2;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    background-color: white;
    position: relative;
  }
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

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 0;
    gap: 2rem;
    text-align: center;
  }
`;

const TitleWrapper = styled.div`
  position: relative;
  width: 777px;
  height: 124px;
  transform: translate(-210px, 25px);
  z-index: 2;
  font-family: "OPTIVenus", sans-serif;

  @media (max-width: 768px) {
    width: auto;
    transform: none;
    margin-bottom: 1rem;
  }
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

  @media (max-width: 768px) {
    position: static;
    transform: none;
    font-size: 2rem;
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

  @media (max-width: 768px) {
    align-items: center;
  }
`;

const TextPaperWrapper = styled.div`
  position: relative;
  width: 550px;
  height: auto;
  transform: translate(20px, -100px);
  z-index: 2;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 350px;
    transform: none;
    margin: 0 auto;
  }
`;

const RippedPaper = styled.img`
  width: 100%;
  height: auto;
  display: block;
  position: relative;
  z-index: 1;
`;

const PaperText = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 3rem 2rem;
  color: #000;
  font-family: "Helvetica", sans-serif;
  font-size: 1.05rem;
  line-height: 1.6;
  overflow: hidden;
  z-index: 2;
  pointer-events: none;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    padding: 2rem 1.5rem;
  }
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

  @media (max-width: 768px) {
    transform: none;
  }
`;

const ImageContainer = styled.div`
  position: absolute;
  width: 560px;
  height: auto;
  transform: translate(450px, -50px);

  @media (max-width: 768px) {
    position: static;
    transform: none;
    width: 100%;
  }
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

  @media (max-width: 768px) {
    display: none;
  }
`;

const StarChar = styled.span`
  position: absolute;
  font-size: 1.5rem;
  color: #87CEEB;
  z-index: 3;

  @media (min-width: 769px) {
    display: none;
  }
`;

const StarTop = styled(StarChar)`
  top: 10px;
  left: 10px;
`;

const StarMiddle = styled(StarChar)`
  bottom: 80px;
  right: 20px;
`;

const StarBottom = styled(StarChar)`
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
`;

export default function NewAlbumSection() {
  return (
    <Section>
      <StarTop>★</StarTop>
      <StarMiddle>★</StarMiddle>
      <StarBottom>★</StarBottom>

      <Container>
        <TitleWrapper>
          <Title>NEW ALBUM</Title>
        </TitleWrapper>

        <Text>
          <TextPaperWrapper>
            <RippedPaper src="assets/images/fond-papier.png" alt="Fond déchiré" />
            <PaperText>
              L’album Moisturizer de Wet Leg, sorti le 11 juillet 2025, marque une évolution
              notable dans leur son. Enregistré à Southwold, Norfolk, avec le producteur Dan Carey,
              il dévoile une approche plus énergique et affirmée, tout en conservant leur humour
              décalé et leur style unique. Des titres comme "Catch These Fists", "Davina McCall" et
              "CPR" illustrent cette nouvelle direction, mêlant des riffs incisifs à des paroles
              introspectives.
            </PaperText>
          </TextPaperWrapper>

          <Button to="/album">DÉCOUVRIR</Button>
        </Text>

        <ImageContainer>
          <AlbumImage src="assets/images/album-cover.png" alt="Album Moisturizer" />
          <TapeRight src="assets/images/tape-right.png" alt="Tape Right" />
        </ImageContainer>
      </Container>
    </Section>
  );
}
