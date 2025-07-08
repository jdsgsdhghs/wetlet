import React from "react";
import HeroImageBlock from "../components/HeroImageBlock";
import BottomNav from "../components/BottomNav";
import TornPaperSeparator from "../components/TornPaperSeparator"; 
import styled from "styled-components";
import TracklistBlock from "../components/TracklistSection";
import Footer from "../components/Footer";

// 📦 Wrapper général
const TopWrapper = styled.div`
  text-align: center;
  background-color: #f7f5f2;
  padding: 2rem 1rem 0;
  width: 100%;
  position: relative;

  @media (max-width: 768px) {
    padding: 1rem 1rem 0;
  }
`;

// 🧾 Citations
const Quote = styled.p`
  font-family: 'Anton', sans-serif;
  font-size: 1.1rem;
  margin: 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    margin: 0.25rem 0;
  }
`;

// 🖼️ Image paysage
const LandscapeImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-top: 8px solid white;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    border-top: 4px solid white;
  }
`;

// 📦 Pour gérer la marge du bloc tracklist
const TracklistWrapper = styled.div`
  margin-top: -30px;

  @media (max-width: 768px) {
    margin-top: -15px;
  }
`;

// 💿 Page album
const Album = () => {
  return (
    <div>
      {/* Hero image uniquement visible sur desktop */}
      <HeroImageBlock
        imageSrc="/assets/images/hero-home.png"
        titleImageSrc="/assets/images/title-moz.png"
      />

      <BottomNav />

      <TopWrapper>
        <Quote>Is your muffin buttered?</Quote>
        <Quote>Would you like us to assign someone to butter your muffin?</Quote>

        <LandscapeImage src="/assets/images/muffine-paysage.png" alt="Paysage Muffin" />
        <TornPaperSeparator />

        <TracklistWrapper>
          <TracklistBlock />
        </TracklistWrapper>
      </TopWrapper>

      <Footer />
    </div>
  );
};

export default Album;
