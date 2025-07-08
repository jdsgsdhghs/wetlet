import styled from "styled-components";
import React from "react";

const TracklistSection = styled.section`
  padding: 6rem 1.5rem 2rem;
  background-color: #f7f7f7;
  position: relative;
`;

const TracklistTitle = styled.h2`
  font-family: 'Anton', sans-serif;
  font-size: 6rem;
  text-align: center;
  margin-bottom: 4rem;
  position: relative;
  z-index: 10;

  @media (max-width: 480px) {
    font-size: 2.4rem;
    margin: 2rem 0;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    padding: 0 1rem;
  }
`;

const AlbumCard = styled.div`
  background: black;
  color: white;
  padding: 1rem 1rem 3.5rem 1rem;
  border-radius: 20px;
  max-width: 250px;
  text-align: center;
  position: relative;

  @media (max-width: 480px) {
    width: 100%;
    max-width: 300px;
    margin-bottom: 1.5rem;
  }
`;

const AlbumCover = styled.img`
  width: 100%;
  border-radius: 12px;
`;

const AlbumTitle = styled.h3`
  font-family: 'Anton', sans-serif;
  margin: 1rem 0 0.2rem;
`;

const ArtistName = styled.p`
  margin: 0;
  font-size: 0.9rem;
`;

const TracklistContainer = styled.div`
  background: url('/assets/images/fond-green.png');
  background-size: cover;
  border-radius: 20px;
  padding: 1rem 1rem 5rem 2rem;
  min-width: 250px;
  max-width: 300px;
  position: relative;

  @media (max-width: 480px) {
    width: 100%;
    padding: 1rem;
  }
`;

const Track = styled.p`
  margin: 0.5rem 0;
  font-family: 'Arial', sans-serif;
  font-size: 0.95rem;
`;

const ReleaseBadge = styled.div`
  position: absolute;
  top: -25px;
  right: -25px;
  background: url('/assets/images/fond-gris.png');
  background-size: cover;
  padding: 1rem;
  border-radius: 10px;
  font-weight: bold;
  font-size: 0.9rem;
  z-index: 3;

  @media (max-width: 480px) {
    top: 10px;
    left: 10px;
    right: auto;
    font-size: 0.8rem;
  }
`;

const TopLeftAngle = styled.img`
  position: absolute;
  top: 65px;
  left: 65px;
  width: 7px;
  z-index: 1;
`;

const BottomRightAngle = styled.img`
  position: absolute;
  bottom: 65px;
  right: 65px;
  width: 60px;
  z-index: 1;
`;

const Star2 = styled.img`
  position: absolute;
  left: 10px;
  bottom: 10px;
  width: 60px;

  @media (max-width: 480px) {
    width: 35px;
  }
`;

const Star = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 90px;
  z-index: 1;

  @media (max-width: 480px) {
    width: 40px;
  }
`;

const StarBehind = styled.img`
  position: absolute;
  bottom: 40px;
  left: 30px;
  width: 80px;
  z-index: 2;
  opacity: 0.8;

  @media (max-width: 480px) {
    left: 10px;
    bottom: 10px;
    width: 50px;
    opacity: 0.6;
  }
`;

export default function TracklistBlock() {
  return (
    <TracklistSection>
      <TopLeftAngle src="/assets/images/corner-top-left.png" alt="Angle haut gauche" />
      <BottomRightAngle src="/assets/images/corner-bottom-right.png" alt="Angle bas droit" />
      <StarBehind src="/assets/images/star.png" alt="Étoile fond" />
      <TracklistTitle>Tracklist</TracklistTitle>

      <Wrapper>
        <AlbumCard>
          <AlbumCover src="/assets/images/album-cover.png" alt="Album cover" />
          <AlbumTitle>MOISTURIZER</AlbumTitle>
          <ArtistName>Wetleg</ArtistName>
          <Star2 src="/assets/images/star2.png" />
        </AlbumCard>

        <TracklistContainer>
          <ReleaseBadge>OUT 11 JUILLET 2025</ReleaseBadge>
          <Track>1. CPR</Track>
          <Track>2. Liquidize</Track>
          <Track>3. catch these fists</Track>
          <Track>4. Davina mccall</Track>
          <Track>5. Jennifer's body</Track>
          <Track>6. Mangetout</Track>
          <Track>7. Pond song</Track>
          <Track>8. Pokemon</Track>
          <Track>9. Pillow talk</Track>
          <Track>10. Don’t speak</Track>
          <Track>11. 11:21</Track>
          <Track>12. U and me at home</Track>
          <Star src="/assets/images/star.png" alt="Étoile Tracklist" />
        </TracklistContainer>
      </Wrapper>
    </TracklistSection>
  );
}
