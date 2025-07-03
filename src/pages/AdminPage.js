import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import styled from "styled-components";

// Styled Components
const Container = styled.div`
  position: relative;
  padding: 2rem;
  max-width: 800px;
  margin: auto;
  font-family: 'Segoe UI', sans-serif;
  color: #1e293b;
  background-image: url('/textures/paper-fibers.png');
  background-repeat: repeat;
  background-size: cover;
  background-position: center;
  border-radius: 16px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.1);
  z-index: 0;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: rgba(255, 255, 255, 0.6);
    z-index: -1;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: center;
`;

const Button = styled.button`
  background-color: ${props => props.color || "#2563eb"};
  color: white;
  font-weight: 600;
  padding: 0.6rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &:hover {
    background-color: ${props => props.hoverColor || "#1d4ed8"};
  }
`;

const List = styled.ul`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 12px;
  align-items: center;
`;

const SoldOut = styled.span`
  color: #dc2626;
  font-weight: 600;
  margin-left: 0.5rem;
`;

const ModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0,0,0,0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 100;
`;

const ModalBox = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 4px 14px rgba(0,0,0,0.15);
`;

const ModalTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

const ModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1.5rem;
`;

const ModalBtn = styled.button`
  padding: 0.5rem 1.25rem;
  border-radius: 8px;
  border: none;
  background: ${props => props.danger ? "#dc2626" : "#10b981"};
  color: white;
  font-weight: bold;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    opacity: 0.9;
  }
`;

export default function AdminPage() {
  const [tourDates, setTourDates] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
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

  const openModal = (id) => {
    setSelectedId(id);
    setModalOpen(true);
  };

  const handleDelete = async () => {
    if (!selectedId) return;
    try {
      await deleteDoc(doc(db, "tourDates", selectedId));
      setTourDates(prev => prev.filter(item => item.id !== selectedId));
    } catch (error) {
      console.error("Erreur de suppression :", error);
    } finally {
      setModalOpen(false);
      setSelectedId(null);
    }
  };

  return (
    <Container>
      <Title>Admin – Tournée</Title>
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
                color="#0284c7"
                hoverColor="#0369a1"
              >
                <FaEdit />
                Modifier
              </Button>
              <Button
                onClick={() => openModal(t.id)}
                color="#dc2626"
                hoverColor="#b91c1c"
              >
                <FaTrash />
                Supprimer
              </Button>
            </div>
          </ListItem>
        ))}
      </List>

      {modalOpen && (
        <ModalOverlay>
          <ModalBox>
            <ModalTitle>Confirmer la suppression</ModalTitle>
            <p>Voulez-vous vraiment supprimer cette date ?</p>
            <ModalButtons>
              <ModalBtn danger onClick={handleDelete}>Oui</ModalBtn>
              <ModalBtn onClick={() => setModalOpen(false)}>Annuler</ModalBtn>
            </ModalButtons>
          </ModalBox>
        </ModalOverlay>
      )}
    </Container>
  );
}
