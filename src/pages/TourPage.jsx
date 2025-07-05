import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { db } from "../config/firebase";
import { collection, getDocs } from "firebase/firestore";

const Container = styled.div`
  padding: 2rem;
  max-width: 720px;
  margin: auto;
  font-family: 'Segoe UI', sans-serif;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
`;

const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.li`
  background-color: #f9fafb;
  border: 1px solid #e5e7eb;
  padding: 1rem;
  border-radius: 8px;
`;

const SoldOut = styled.span`
  color: #dc2626;
  font-weight: bold;
  margin-left: 0.5rem;
`;

export default function TourPage() {
  const [tourDates, setTourDates] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "tourDates"));
      const items = querySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTourDates(items);
    };

    fetchData();
  }, []);

  return (
    <Container>
      <Title>Tournée 2025</Title>
      <List>
        {tourDates.map((t) => (
          <ListItem key={t.id}>
            {t.date} – {t.city}, {t.country} @ {t.venue}
            {t.soldOut && <SoldOut>(Sold Out)</SoldOut>}
          </ListItem>
        ))}
      </List>
    </Container>
  );
}
