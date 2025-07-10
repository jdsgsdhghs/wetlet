import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";
import HeroImageBlock from "../components/HeroImageBlock";
import BottomNav from "../components/BottomNav";
import Footer from "../components/Footer";

const PageWrapper = styled.div`
  color: white;
  min-height: 100vh;
`;

const TitleWrapper = styled.div`
  position: relative;
  text-align: center;
  margin: 3rem auto 1rem;
`;

const MainTitle = styled.h2`
  font-size: 4.5rem;
  font-weight: 900;
  color: black;
  font-family: "Helvetica", sans-serif;
  transform: translate(-275px, -25px);
`;

const Star = styled.img`
  position: absolute;
  top: -15px;
  left: 30%;
  width: 50px;
  transform: translate(-200px, -15px) rotate(-20deg);
`;

const TourBlock = styled.div`
  background-image: url("/assets/images/fond-green.png");
  background-size: cover;
  background-position: center;
  padding: 2rem;
  border-radius: 15px;
  max-width: 700px;
  margin: 3rem auto;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0.8rem 0;
  font-size: 1rem;
  color: black;
  font-weight: 600;
`;

const ColLeft = styled.div`
  text-transform: lowercase;
  font-weight: 500;
  width: 30%;
`;

const ColRight = styled.div`
  width: 70%;
`;

const Venue = styled.span`
  font-weight: 400;
  font-style: italic;
  margin-left: 0.3rem;
`;

const SoldOut = styled.span`
  color: #dc2626;
  font-weight: bold;
  margin-left: 0.5rem;
`;

const PromoWrapper = styled.div`
  position: relative;
  margin: 4rem auto 2rem;
  max-width: 800px;
  height: 250px;
`;

const TagContainer = styled.div`
  position: absolute;
  top: 30px;
  left: 170px;
  z-index: 2;
`;

const TagImage = styled.img`
  width: 170px;
  display: block;
  transform: translate(500px, -500px);
`;

const TagText = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Helvetica", sans-serif;
  font-size: 0.75rem;
  font-weight: 700;
  color: black;
  text-transform: uppercase;
  text-align: center;
  white-space: nowrap;
   transform: translate(425px, -520px);
`;

const GirlImage = styled.img`
  height: 250px;
  position: absolute;
  bottom: 0;
  right: 0;
  z-index: 3;
     transform: translate(200px, -200px);
`;
const DividerImage = styled.img`
  width: 100%;
  margin-top: -4px;
  display: block;
  transform: translate(125px, -170px);
   z-index: 5;
   width: 100vw; /* 🟣 force à remplir tout l'écran */
`;

const ExtraDatesWrapper = styled.div`
  background-image: url("/assets/images/fond-grain.png"); // 🔁 mets ton image ici
background-size: cover;
background-position: center;
background-repeat: no-repeat;
  padding: 4rem 4rem;
  display: flex;
  justify-content: center;
  gap: 6rem;
  position: relative;
  margin-top: -235px; /* ← ça fait remonter */
   z-index: 1;
   
   
  
`;

const PhotoWrapper = styled.div`
  position: relative;
`;

const GirlsPhoto = styled.img`
  width: 350px;
  border-radius: 1px;
  z-index: 3;
  transform: translate(400px, -165px); 
`;

const Tape = styled.img`
  position: absolute;
  width: 200px;
  top: ${({ top }) => top || "0px"};
  left: ${({ left }) => left || "auto"};
  right: ${({ right }) => right || "auto"};
  z-index: 2;
`;


const DatesColumn = styled.div`
 
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: 'Helvetica', sans-serif;
  color: #000;
  max-width: 700px;
  transform: translate(-780px, -95px);
`;


const StarIcon = styled.img`
  position: absolute;
  right: 5%;
  bottom: 15%;
  width: 100px;
  transform: translate(-100px, -305px);
`;

const ReservationSection = styled.div`
  margin: 2rem auto;
  text-align: center;
`;

const ReserveLabel = styled.p`
  font-family: 'Helvetica', sans-serif;
  font-weight: 600;
  font-size: 1rem;
  margin-bottom: 0.5rem;
  color: black;
`;

const Select = styled.select`
  padding: 0.5rem 1rem;
  font-size: 1rem;
  border-radius: 10px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  font-family: 'Helvetica', sans-serif;
`;

const ReserveButton = styled.button`
  background-color: #80BC3E;
  color: white;
  font-weight: bold;
  font-size: 0.75rem;
  border: none;
  border-radius: 15px;
  padding: 0.5rem 1.2rem;
  cursor: pointer;
  margin: 0 auto;
  display: block;
  text-transform: uppercase;
  font-family: 'Helvetica', sans-serif;
  box-shadow: 0px 2px 5px rgba(0,0,0,0.2);
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #80BC3E;
  }
`;


export default function TourPage() {
  const [tourDates, setTourDates] = useState([]);
  const [availableDates, setAvailableDates] = useState([]);
const [selectedDate, setSelectedDate] = useState("");


  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "tourDates"));
      const items = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTourDates(items);
      const available = items.filter((item) => !item.soldOut);
setAvailableDates(available);

    };

    fetchData();
  }, []);

  return (
    <PageWrapper>
      <HeroImageBlock
        imageSrc="/assets/images/hero-home.png"
        titleImageSrc="/assets/images/title-moz.png"
      />
      <BottomNav />
      <TitleWrapper>
        <MainTitle>MOZ TOUR</MainTitle>
        <Star src="/assets/images/star2.png" alt="Star" />
      </TitleWrapper>

      <TourBlock>
  {tourDates.slice(0, 5).map((t) => (

          <Row key={t.id}>
            <ColLeft>{t.date}</ColLeft>
            <ColRight>
              {t.city}, {t.country}
              <Venue> – {t.venue}</Venue>
              {t.soldOut && <SoldOut>(Sold Out)</SoldOut>}
            </ColRight>
          </Row>
        ))}
      </TourBlock>
      {availableDates.length > 0 && (
  <ReservationSection>
    <ReserveLabel>Réserver une date disponible :</ReserveLabel>
    <Select onChange={(e) => setSelectedDate(e.target.value)} value={selectedDate}>
      <option value="">-- Choisir une date --</option>
      {availableDates.map((t) => (
        <option key={t.id} value={t.id}>
          {t.date} — {t.city}, {t.country}
        </option>
      ))}
    </Select>
    <ReserveButton
      onClick={() =>
        selectedDate
          ? alert("Réservation enregistrée pour la date : " + selectedDate)
          : alert("Choisis une date d'abord !")
      }
    >
      RÉSERVER
    </ReserveButton>
  </ReservationSection>
)}

      <PromoWrapper>
  <TagContainer>
    <TagImage src="/assets/images/fond-gris.png" alt="Tag fond gris" />
    <TagText>NOUVEL ALBUM EN LIVE</TagText>
  </TagContainer>
  <GirlImage src="/assets/images/fille.png" alt="Fille bras levés" />
</PromoWrapper>
{tourDates.length > 5 && (
  <>
    

    <ExtraDatesWrapper>
      <PhotoWrapper>
        <DividerImage src="/assets/images/rippedpaper.png" alt="Papier déchiré" />

       <Tape src="/assets/images/tape-left.png" top="243px" left="615px" />


        <GirlsPhoto src="/assets/images/girls.png" alt="Filles qui mangent" />
       <Tape src="/assets/images/tape-right.png" top="-90px" right="1015px" />
      </PhotoWrapper>

      <DatesColumn>
  {tourDates.slice(5).map((t, index) => (
    <Row key={index}>
      <ColLeft>{t.date}</ColLeft>
      <ColRight>
        {t.city}, {t.country}
        <Venue> – {t.venue}</Venue>
        {t.soldOut && <SoldOut>(Sold Out)</SoldOut>}
      </ColRight>
    </Row>
  ))}
</DatesColumn>


      <StarIcon src="/assets/images/star.png" alt="Étoile" />
    </ExtraDatesWrapper>
  </>
)}

<Footer></Footer>
    </PageWrapper>
    
  );
}
