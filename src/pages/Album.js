import React from "react";
import HeroImageBlock from "../components/HeroImageBlock";
import BottomNav from "../components/BottomNav";
import TornPaperSeparator from "../components/TornPaperSeparator"; 
import styled from "styled-components";
import TracklistBlock from "../components/TracklistSection";
import Footer from "../components/Footer";

const TopWrapper = styled.div`
  text-align: center;
  background-color: white;
  padding: 2rem 1rem 0 1rem;
  width: 100vw;  
  left: 50%;
  transform: translateX(-50%);
  position: relative;
`;

const TornPaper = styled.img`
  display: block;
  height: auto;
  width: 100%;
  position: relative;
  z-index: 5;
  margin-top: -10px; /* ou 0 si déjà collé */
  transform: translate(30px, 10px);
`;



const Quote = styled.p`
  font-family: 'Anton', sans-serif;
  font-size: 1.1rem;
  margin: 0.5rem 0;
`;

const LandscapeImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-top: 8px solid white;
`;
const Album = () => {
  return (
    <div><HeroImageBlock
        imageSrc="/assets/images/hero-home.png"
        titleImageSrc="/assets/images/title-moz.png"
      />
      <BottomNav />
      {/* Bloc avec texte + image paysage */}
      <TopWrapper>
        <Quote>Is your muffin buttered?</Quote>
        <Quote>Would you like us to assign someone to butter your muffin?</Quote>
        <LandscapeImage src="/assets/images/muffine-paysage.png" alt="Paysage Muffin" />
        <TornPaperSeparator transform="translateY(-112px)" />
        <TracklistBlock />



      </TopWrapper>
<Footer />
      
    </div>
  );
};

export default Album;
