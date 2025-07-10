import styled from "styled-components";
import React from "react";

const TracklistSection = styled.section`
  padding: 4rem 1.5rem;
  background-color: #f7f7f7;
  position: relative;
  margin-top: -460px;
`;
const TracklistTitle = styled.h2`
  font-family: 'Anton', sans-serif;
  font-size: 6rem;
  text-align: center;
  margin-bottom: 2rem;
  position: relative;
  z-index: 10;
   transform: translate(120px, -50px);
`;


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: flex-start;
  gap: 3rem;
  flex-wrap: wrap;
   transform: translateY(-230px); 
`;

const AlbumCard = styled.div`
  background: black;
  color: white;
  padding: 1rem;
  border-radius: 20px;
  max-width: 250px;
  text-align: center;
  padding: 1rem 1rem 3.5rem 1rem;
  transform: translate(-80px, 30px);
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
  padding: 2rem;
  min-width: 250px;
  position: relative;
  padding: 1rem 1rem 5.5rem 2rem;
  transform: translate(-80px, 150px);
   z-index: 3; /* Devant */
`;

const Track = styled.p`
  margin: 0.5rem 0;
  font-family: 'Arial', sans-serif;
  font-size: 0.95rem;
`;

const ReleaseBadge = styled.div`
  position: absolute;
  top: -20px;
  right: -20px;
  background: url('/assets/images/fond-gris.png');
  background-size: cover;
  padding: 1rem 2rem;
  border-radius: 10px;
  font-weight: bold;
  font-size: 0.9rem;
  transform: translate(110px, 50px);
   padding: 1.5rem 1rem 1.5rem 1rem;
    z-index: 3; /* Devant */
`;
const TopLeftAngle = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 7px; /* ajuste la taille si besoin */
  z-index: 1;
  transform: translate(65px, 65px);
`;

const BottomRightAngle = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 60px; /* ajuste la taille si besoin */
  z-index: 1;
  transform: translate(-65px, -65px);
`;

const Star2 = styled.img`
  position: absolute;
  left: -10px;
  bottom: -10px;
  width: 60px;
  transform: translate(-15px, 15px);
`;
const Star = styled.img`
  position: absolute;
  top: 5px;
  right: -20px;
  width: 90px;
   z-index: 1;
   transform: translate(35px, 190px);
`;
const StarBehind = styled.img`
  position: absolute;
  bottom: 40px; /* ajuste selon le visuel */
  left: 30px;
  width: 80px;
  z-index: 0; /* bien derrière tout */
  opacity: 0.8;
  transform: translate(930px, -380px);
`;

export default function TracklistBlock() {
  return (
    <TracklistSection>
      <TopLeftAngle src="/assets/images/corner-top-left.png" alt="Angle haut gauche" />
  <BottomRightAngle src="/assets/images/corner-bottom-right.png" alt="Angle bas droit" />
  <StarBehind src="/assets/images/star.png" alt="Star" />
    <TracklistTitle>Tracklist</TracklistTitle>

      <Wrapper>
        <AlbumCard>
          <AlbumCover src="/assets/images/album-cover.png" alt="Album cover" />
          <AlbumTitle>MOISTURIZER</AlbumTitle>
          <ArtistName>Wetleg</ArtistName>
          <Star2 src="/assets/images/star2.png" />
        </AlbumCard>
 
        <TracklistContainer>
       

          <ReleaseBadge>OUT 11 JUILLET 2025
             
          </ReleaseBadge>
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
        </TracklistContainer>
      </Wrapper>
    </TracklistSection>
  );
}
