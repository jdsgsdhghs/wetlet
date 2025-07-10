import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

import BottomNav from "../components/BottomNav";
import MobileMenu from "../components/MobileMenu";
import NewAlbumSection from "../components/NewAlbumSection";
import NewAlbumSectionMobile from "../components/NewAlbumSectionMobile";
import MuffinSectionComponent from "../components/MuffinSectionComponent";
import TornPaperSeparator from "../components/TornPaperSeparator";
import BlogSection from "../components/BlogSection";
import HeroImageBlock from "../components/HeroImageBlock";
import Footer from "../components/Footer";

// === STYLED COMPONENTS ===
const Wrapper = styled.div`
  position: relative;
`;

const FooterWrapper = styled.div`
  margin-top: -540px; /* adapte cette valeur */
`;

// === PAGE COMPONENT ===
export default function HomePage() {
  const [tourDates, setTourDates] = useState([]);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const tourDateRef = collection(db, "tourDates");

  useEffect(() => {
    const getTourDates = async () => {
      try {
        const data = await getDocs(tourDateRef);
        const tourDates_ = data.docs.map(doc => ({
          ...doc.data(),
          id: doc.id,
        }));
        setTourDates(tourDates_);
      } catch (error) {
        console.error(error);
      }
    };
    getTourDates();
  }, [tourDateRef]);

  return (
  <>
    <HeroImageBlock
      imageSrc="/assets/images/hero-home.png"
      titleImageSrc="/assets/images/title-moz.png"
    />

    {/* Menu */}
    {isMobile && <MobileMenu />}
    {!isMobile && <BottomNav />}

    {/* Sections */}
    {isMobile ? <NewAlbumSectionMobile /> : <NewAlbumSection />}
    {!isMobile && <MuffinSectionComponent />}
    {!isMobile && <TornPaperSeparator />}

    {!isMobile && (
      <Wrapper>
        <BlogSection />
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Wrapper>
    )}

    
      {/* Footer seul pour mobile */}
      {isMobile && <Footer />}
    </>
  );
}
