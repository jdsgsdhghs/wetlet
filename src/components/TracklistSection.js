import styled from "styled-components";
import React from "react";

const TracklistSection = styled.section`
  padding: 4rem 1.5rem;
  background-color: #f7f7f7;
  position: relative;
  margin-top: -160px;
`;

const TracklistTitle = styled.h2`
  font-family: 'Anton', sans-serif;
  font-size: 6rem;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;
  transform: translate(120px, -50px);

  @media (max-width: 480px) {
    font-size: 2.4rem;
    transform: none;
    margin-top: 1rem;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  flex-wrap: wrap;
  transform: translateY(-230px); 

  @media (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    transform: none;
  }
`;

const AlbumCard = styled.div`
  background: black;
  color: white;
  padding: 1rem 1rem 3.5rem 1rem;
  border-radius: 20px;
  max-width: 250px;
  text-align: center;
  transform: translate(-80px, 30px);
  position: relative;

  @media (max-width: 480px) {
    transform: none;
    margin-bottom: 1rem;
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
  padding: 1rem 1rem 5.5rem 2rem;
  min-width: 250px;
  position: relative;
  transform: translate(-80px, 150px);
  z-index: 3;

  @media (max-width: 480px) {
    transform: none;
    width: 100%;
    max-width: 300px;
  }
`;

const Track = styled.p`
  margin: 0.5rem 0;
  font-family: 'Arial', sans-serif;
  font-size: 0.95rem;
`;

const ReleaseBadge = styled.div`
  position: absolute;
  top: -30px;
  right: -40px;
  background: url('/assets/images/fond-gris.png');
  background-size: cover;
  padding: 1.5rem 1rem;
  border-radius: 10px;
  font-weight: bold;
  font-size: 0.9rem;
  transform: translate(110px, 50px);
  z-index: 3;

  @media (max-width: 480px) {
    top: 10px;
    left: 10px;
    right: auto;
    transform: none;
    font-size: 0.8rem;
  }
`;

const TopLeftAngle = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 7px;
  z-index: 1;
  transform: translate(65px, 65px);
`;

const BottomRightAngle = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px;
  z-index: 1;
  transform: translate(-65px, -65px);
`;

const Star2 = styled.img`
  position: absolute;
  left: -10px;
  bottom: -10px;
  width: 60px;
  transform: translate(-15px, 15px);

  @media (max-width: 480px) {
    width: 35px;
    left: 10px;
    bottom: 10px;
    transform: none;
  }
`;

const Star = styled.img`
  position: absolute;
  top: 5px;
  right: -20px;
  width: 90px;
  z-index: 1;
  transform: translate(35px, 190px);

  @media (max-width: 480px) {
    width: 40px;
    top: 10px;
    right: 10px;
    transform: none;
  }
`;

const StarBehind = styled.img`
  position: absolute;
  bottom: 40px;
  left: 30px;
  width: 80px;
  z-index: 0;
  opacity: 0.8;
  transform: translate(930px, -380px);

  @media (max-width: 480px) {
    left: 10px;
    bottom: 10px;
    transform: none;
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
