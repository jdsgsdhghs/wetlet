import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import styled from "styled-components";

const Container = styled.div`padding: 2rem; max-width: 720px; margin: auto;`;
const Title = styled.h1`font-size: 1.75rem; font-weight: 700; margin-bottom: 2rem; color: #1e293b;`;
const Button = styled.button`
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover { background-color: #1d4ed8; }
`;
const List = styled.ul`margin-top: 2rem; display: flex; flex-direction: column; gap: 1rem;`;
const ListItem = styled.li`
  display: flex; justify-content: space-between;
  padding: 1rem; background-color: #ffffff;
  border: 1px solid #e2e8f0; border-radius: 10px;
`;
const DeleteButton = styled.button`
  color: #dc2626; font-weight: 500; background: none;
  border: none; cursor: pointer;
  &:hover { text-decoration: underline; }
`;
const SoldOut = styled.span`
  color: #dc2626; font-weight: 600; margin-left: 0.5rem;
`;

export default function AdminPage() {
  const [tourDates, setTourDates] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const tourRef = collection(db, "tourDates");
    const q = query(tourRef);
    const unsubscribe = onSnapshot(q, snapshot => {
      const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setTourDates(items);
    });
    return () => unsubscribe();
  }, []);

  const handleDelete = async id => {
  const confirmDelete = window.confirm("Es-tu sûr(e) de vouloir supprimer cette date de tournée ?");
  if (confirmDelete) {
    await deleteDoc(doc(db, "tourDates", id));
  }
};


  return (
    <Container>
      <Title>Dates de tournée du groupe wetleg</Title>
      <Button onClick={() => navigate("/admin/new")}>➕ Nouveau</Button>

      <List>
        {tourDates.map(t => (
          <ListItem key={t.id}>
            <span>
              {t.date} – {t.city}, {t.country} @ {t.venue}
              {t.soldOut && <SoldOut>(Sold Out)</SoldOut>}
            </span>
            <div style={{ display: "flex", gap: "0.5rem" }}>
                <Button onClick={() => navigate(`/admin/edit/${t.id}`)} style={{ backgroundColor: "#0284c7", display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <FaEdit />
                  Modifier
                </Button>
                <DeleteButton onClick={() => handleDelete(t.id)} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                  <FaTrash />
                  Supprimer
                </DeleteButton>
            </div>

          </ListItem>
        ))}
      </List>
    </Container>
  );
}
