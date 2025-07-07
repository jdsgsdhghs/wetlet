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


// Styled Components
const Container = styled.div`
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  font-family: 'Segoe UI', sans-serif;
  color: #1e293b;
  
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 800;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const Description = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 2rem;
  text-align: center;
  color: #475569;
`;

const Subtitle = styled.h2`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #334155;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.li`
  background-color: #f8fafc;
  border: 1px solid #e2e8f0;
  padding: 1rem 1.5rem;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0,0,0,0.05);
  font-size: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-2px);
  }
`;

const DateAndPlace = styled.span`
  font-weight: 500;
`;


const SoldOut = styled.span`
  color: #dc2626;
  font-weight: 600;
  background-color: #fee2e2;
  padding: 0.25rem 0.5rem;
  border-radius: 6px;
  font-size: 0.875rem;
`;

export default function HomePage() {
  const [tourDates, setTourDates] = useState([]);
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

        <BottomNav />
        
        <NewAlbumSection />
        <MuffinSectionComponent />
        
         <TornPaperSeparator />

      <BlogSection />
       
<Footer />
      
    </>
  );
}
