import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import BlogSectionMobile from "./BlogSectionMobile";

const Section = styled.section`
  background-color: #f7f5f2;
  padding: 2rem 1rem;
  text-align: center;
`;

const AlbumImage = styled.img`
  width: 90%;
  height: auto;
  max-width: 600px;
  margin: 0 auto 2rem;
  display: block;
`;

const RippedPaperWrapper = styled.div`
  position: relative;
  width: 90%;
  max-width: 400px;
  margin: 0 auto 3rem;
`;

const RippedPaper = styled.img`
  width: 100%;
  height: auto;
`;

const PaperText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 1.5rem;
  font-size: 0.95rem;
  line-height: 1.6;
  font-family: "Helvetica", sans-serif;
  color: #000;
  width: 90%;
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
  margin-top: 1.5rem;

  &:hover {
    background-color: #80bc3e;
  }
`;

const StarImage = styled.img`
  width: 60px;
  margin: 1.5rem auto;
`;

const VideoWrapper = styled.div`
  width: 90%;
  max-width: 600px;
  margin: 2rem auto 0;
  aspect-ratio: 16 / 9;
`;

export default function NewAlbumSectionMobile() {
  return (
    <Section>
      <AlbumImage
        src="/assets/images/album-cover.png"
        alt="Album Moisturizer"
      />

      <RippedPaperWrapper>
        <RippedPaper
          src="/assets/images/fond-papier.png"
          alt="Papier déchiré"
        />
        <PaperText>
          L’album Moisturizer de Wet Leg marque une évolution énergique et
          affirmée, mêlant riffs incisifs et textes introspectifs avec leur
          humour caractéristique.
        </PaperText>
      </RippedPaperWrapper>

      <Button to="/album">DÉCOUVRIR</Button>

      <StarImage src="/assets/images/star.png" alt="Étoile rose" />

      <VideoWrapper>
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/HeL2M8jBEI4"
          title="CPR - Wet Leg"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </VideoWrapper>
      <BlogSectionMobile />
    </Section>
  );
}
