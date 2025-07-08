import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

import BottomNav from "../components/BottomNav";
import NewAlbumSection from "../components/NewAlbumSection";
import MuffinSectionComponent from "../components/MuffinSectionComponent";
import TornPaperSeparator from "../components/TornPaperSeparator";
import BlogSection from "../components/BlogSection";
import HeroImageBlock from "../components/HeroImageBlock";
import Footer from "../components/Footer";

// Wrapper spécifique pour version mobile
const MobileWrapper = styled.div`
  background-color: white;

  @media (min-width: 769px) {
    background-color: transparent;
  }
`;

const Wrapper = styled.div`
  position: relative;
`;

const FooterWrapper = styled.div`
  margin-top: -540px;

  @media (max-width: 768px) {
    margin-top: 0;
  }
`;

export default function HomePage() {
  const [tourDates, setTourDates] = useState([]);
  const tourDateRef = collection(db, "tourDates");

  useEffect(() => {
    const getTourDates = async () => {
      try {
        const data = await getDocs(tourDateRef);
        const tourDates_ = data.docs.map((doc) => ({
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
    <MobileWrapper>
      <HeroImageBlock
        imageSrc="/assets/images/hero-home.png"
        titleImageSrc="/assets/images/title-moz.png"
      />

      <BottomNav />
      <NewAlbumSection />
      <MuffinSectionComponent />
      <TornPaperSeparator />

      <Wrapper>
        <BlogSection />
        <FooterWrapper>
          <Footer />
        </FooterWrapper>
      </Wrapper>
    </MobileWrapper>
  );
}
