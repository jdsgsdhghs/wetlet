import React from "react";
import styled from "styled-components";

const MuffinSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding: 6rem 8rem;
  margin-top: -5rem;
  background-color: #f7f5f2;

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 2rem 1rem;
    margin-top: 0;
    align-items: center;
  }
`;

const LeftContent = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 60%;

  @media (max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

const VideoWrapper = styled.div`
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
  position: relative;
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  z-index: 1;

  @media (max-width: 768px) {
    top: 0;
    left: 0;
  }
`;

const RightContent = styled.div`
  width: 40%;
  position: relative;
  top: ${(props) => props.top || "0"};
  left: ${(props) => props.left || "0"};
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media (max-width: 768px) {
    width: 100%;
    top: 0;
    left: 0;
    align-items: center;
    margin-top: 2rem;
  }
`;

const VideoText = styled.p`
  font-size: 0.85rem;
  line-height: 1.7;
  text-align: left;
  max-width: 145px;
  font-family: "Roboto", sans-serif;
  transform: translate(-90px, -150px);

  @media (max-width: 768px) {
    transform: none;
    max-width: 90%;
    text-align: center;
    font-size: 0.95rem;
    padding: 0 1rem;
  }
`;

const VinylImage = styled.img`
  max-width: 100%;
  height: auto;
  transform: translate(-15px, -200px);

  @media (max-width: 768px) {
    transform: none;
    margin-top: 1rem;
    width: 70%;
  }
`;

const StarImage = styled.img`
  position: absolute;
  bottom: -25px;
  left: -30px;
  width: 90px;
  height: auto;
  z-index: 0;
  pointer-events: none;
  transform: translate(120px, 25px);

  @media (max-width: 768px) {
    display: none;
  }
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
          Wet Leg a récemment dévoilé le clip de leur nouveau single “CPR”. Ce clip a été réalisé
          par le groupe lui-même et se termine en un plan-séquence sur leur île natale de Wight.
        </VideoText>

        <VinylImage src="/assets/images/vinyle moz.png" alt="Vinyle" />
      </RightContent>
    </MuffinSection>
  );
}
