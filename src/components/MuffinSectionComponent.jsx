import React from "react";
import styled from "styled-components";
const MuffinSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6rem 8rem 6rem 8rem; /* top right bottom left */
   margin-top: -5rem; /* 🔼 fait vraiment remonter la section */
   background-color: #f7f5f2;

`;


const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 60%;
`;

const VideoWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  position: relative;
  top: ${props => props.top || "0"};
  left: ${props => props.left || "0"};
  z-index: 1;
`;

const RightContent = styled.div`
  width: 40%;
  position: relative;
  top: ${props => props.top || "0"};
  left: ${props => props.left || "0"};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const VideoText = styled.p`
  font-size: 0.85rem;
  line-height: 1.7;
  text-align: left;
  max-width: 145px;
  transform: translate(-15px, -150px); 
  font-family: "Helvetica", sans-serif;
  padding: 0.2rem 0;
  transform: translate(-90px, -150px);
`;


const VinylImage = styled.img`
  max-width: 100%;
  height: auto;
  transform: translate(-15px, -200px); 
`;
const StarImage = styled.img`
  position: absolute;
  bottom: -25px;
  left: -30px;
  width: 90px;            /* ✅ plus grande */
  height: auto;
  z-index: 0;             /* ✅ passe derrière la vidéo */
  pointer-events: none;   /* empêche les clics dessus */
  transform: translate(120px, 25px); 
`;



export default function MuffinSectionComponent() {
  return (
    <MuffinSection>
      <LeftContent>
        <StarImage src="/assets/images/star.png" alt="Étoile rose" />
        <VideoWrapper top="1rem" left="8rem">
          
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
      </LeftContent>

      <RightContent top="10rem" left="15rem">
        <VideoText>
          Wet Leg a récemment dévoilé le clip de leur nouveau single “CPR”. Ce clip a été réalisé par le groupe lui-même et se termine en un plan-séquence sur leur île natale de Wight.
        </VideoText>

        <VinylImage src="/assets/images/vinyle moz.png" alt="Vinyle" />
      </RightContent>
    </MuffinSection>
  );
}
