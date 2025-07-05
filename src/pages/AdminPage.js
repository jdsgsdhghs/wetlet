import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

// Animations
const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;
const scaleIn = keyframes`
  from { transform: scale(0.95); opacity: 0; }
  to { transform: scale(1); opacity: 1; }
`;

// Styled Components
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

// Modal styles with animation
const ModalOverlay = styled.div`
  position: fixed; top: 0; left: 0;
  width: 100vw; height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex; justify-content: center; align-items: center;
  z-index: 1000;
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 400px;
  animation: ${scaleIn} 0.3s ease-out;
`;

const ModalActions = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

export default function AdminPage() {
  const [tourDates, setTourDates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [selectedId, setSelectedId] = useState(null);
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

  const confirmDelete = (id) => {
    setSelectedId(id);
    setShowModal(true);
  };

  const handleDelete = async () => {
    if (selectedId) {
      await deleteDoc(doc(db, "tourDates", selectedId));
      setShowModal(false);
      setSelectedId(null);
    }
  };

  const cancelDelete = () => {
    setShowModal(false);
    setSelectedId(null);
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
              <Button
                onClick={() => navigate(`/admin/edit/${t.id}`)}
                style={{ backgroundColor: "#0284c7", display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <FaEdit />
                Modifier
              </Button>
              <DeleteButton
                onClick={() => confirmDelete(t.id)}
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <FaTrash />
                Supprimer
              </DeleteButton>
            </div>
          </ListItem>
        ))}
      </List>

      {showModal && (
        <ModalOverlay>
          <ModalContent>
            <p>Es-tu sûr(e) de vouloir supprimer cette date de tournée ?</p>
            <ModalActions>
              <Button onClick={handleDelete} style={{ backgroundColor: "#dc2626" }}>Oui, Supprimer</Button>
              <Button onClick={cancelDelete} style={{ backgroundColor: "#94a3b8" }}>Annuler</Button>
            </ModalActions>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}

