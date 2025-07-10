import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../config/firebase";
import MobileMenu from "../components/MobileMenu";
import Footer from "../components/Footer";

const MobileOnly = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const MobileBackground = styled.div`
  background-color: white;
  padding: 1.5rem;
`;

const MobileRow = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1rem;
  background-color: #fff;
  color: black;
  font-weight: 600;
  font-size: 0.95rem;
`;

const Arrow = styled.span`
  margin-right: 0.7rem;
  color: #7DD3FC;
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

function formatDateFR(dateStr) {
  const date = new Date(dateStr);
  const options = { weekday: "long", day: "numeric", month: "long", year: "numeric" };
  const formatted = date.toLocaleDateString("fr-FR", options);
  return formatted.charAt(0).toUpperCase() + formatted.slice(1);
}

export default function TourPageMobile() {
  const [tourDates, setTourDates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "tourDates"));
      const items = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTourDates(items);
    };
    fetchData();
  }, []);

  return (
    <MobileOnly>
      <MobileMenu />
      <MobileBackground>
        {tourDates.map((t) => (
          <MobileRow key={t.id}>
            <Arrow>➜</Arrow>
            <ColLeft>{formatDateFR(t.date)}</ColLeft>
            <ColRight>
              {t.city}, {t.country}
              <Venue> – {t.venue}</Venue>
              {t.soldOut && <SoldOut>(Complet)</SoldOut>}
            </ColRight>
          </MobileRow>
        ))}
      </MobileBackground>
      <Footer />
    </MobileOnly>
  );
}
