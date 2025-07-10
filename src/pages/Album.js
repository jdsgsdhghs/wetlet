import React, { useState, useEffect } from "react";
import HeroImageBlock from "../components/HeroImageBlock";
import BottomNav from "../components/BottomNav";
import MobileMenu from "../components/MobileMenu"; // import nav mobile
import TornPaperSeparator from "../components/TornPaperSeparator"; 
import styled from "styled-components";
import TracklistBlock from "../components/TracklistSection";
import Footer from "../components/Footer";

const TopWrapper = styled.div`
  text-align: center;
  background-color: #f7f5f2;
  padding: 2rem 1rem 0 1rem;
  width: 100vw;  
  left: 50%;
  transform: translateX(-50%);
  position: relative;
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize(); // vérifie au chargement
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      <HeroImageBlock
        imageSrc="/assets/images/hero-home.png"
        titleImageSrc="/assets/images/title-moz.png"
      />
      
      {/* Affichage nav selon la taille écran */}
      {isMobile ? <MobileMenu /> : <BottomNav />}

      <TopWrapper>
        <Quote>Is your muffin buttered?</Quote>
        <Quote>Would you like us to assign someone to butter your muffin?</Quote>
        
        <LandscapeImage src="/assets/images/muffine-paysage.png" alt="Paysage Muffin" />
        
        <TornPaperSeparator marginTop="355px" />

        <TracklistBlock />
      </TopWrapper>

      <Footer />
    </div>
  );
};

export default Album;
