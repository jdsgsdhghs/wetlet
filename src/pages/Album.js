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

  @media (max-width: 480px) {
    padding: 1rem 0.5rem 0 0.5rem;     // ✅ Mobile padding
    width: 100%;                      // ✅ Avoid horizontal overflow
    transform: none;                  // ✅ Keep centered
  }
`;

const Quote = styled.p`
  font-family: 'Anton', sans-serif;
  font-size: 1.1rem;
  margin: 0.5rem 0;

  @media (max-width: 480px) {
    font-size: 0.95rem;               // ✅ Mobile font-size
    line-height: 1.3;                 // ✅ Better readability
  }
`;

const HeroWrapperDesktop = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const LandscapeImage = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-top: 8px solid white;

  @media (max-width: 480px) {
    border-top: 4px solid white;     // ✅ Thinner border for mobile
    margin-bottom: -100px;           // ✅ Avoid spacing conflict with separator
  }
`;

const Album = () => {
  return (
    <div>
      <HeroWrapperDesktop>
        <HeroImageBlock
          imageSrc="/assets/images/hero-home.png"
          titleImageSrc="/assets/images/title-moz.png"
        />
      </HeroWrapperDesktop>

      <BottomNav />

      <TopWrapper>
        <Quote>Is your muffin buttered?</Quote>
        <Quote>Would you like us to assign someone to butter your muffin?</Quote>

        <LandscapeImage
          src="/assets/images/muffine-paysage.png"
          alt="Paysage Muffin"
        />

        <TornPaperSeparator
            transform="translateY(-112px)"
            mobileTransform="translateY(-60px)"
            zIndex={3}
            mobileZIndex={1}
        />


        <TracklistBlock />
      </TopWrapper>

      <Footer />
    </div>
  );
};

export default Album;
