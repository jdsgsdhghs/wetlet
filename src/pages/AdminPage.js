import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import styled, { keyframes } from "styled-components";

// Animation keyframes
const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

// Styled components
const Container = styled.div`
  padding: 2rem;
  max-width: 720px;
  margin: auto;
`;

const Title = styled.h1`
  font-size: 1.75rem;
  font-weight: 700;
  margin-bottom: 2rem;
  color: #1e293b;
`;

const ButtonWrapper = styled.div`
  margin-bottom: 2rem;
  @media (max-width: 640px) {
    display: flex;
    justify-content: center;
  }
`;

const Button = styled.button`
  background-color: #2563eb;
  color: white;
  font-weight: 600;
  padding: 0.75rem 1rem;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background-color: #1d4ed8;
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
  padding: 1rem;
  background-color: #ffffff;
  border: 1px solid #e2e8f0;
  border-radius: 10px;
`;

const DeleteButton = styled.button`
  color: #dc2626;
  font-weight: 500;
  background: none;
  border: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const SoldOut = styled.span`
  color: #dc2626;
  font-weight: 600;
  margin-left: 0.5rem;
`;

// Modal
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(15, 23, 42, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 50;
  animation: ${fadeIn} 0.2s ease-out;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 12px;
  text-align: center;
  max-width: 90%;
  min-width: 280px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  animation: ${fadeIn} 0.3s ease-out;
`;

const ModalTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 1rem;
`;

const ModalActions = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;

const CancelButton = styled(Button)`
  background-color: #64748b;
  &:hover {
    background-color: #475569;
  }
`;

export default function AdminPage() {
  const [tourDates, setTourDates] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [dateToDelete, setDateToDelete] = useState(null);
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

  const confirmDelete = id => {
    setDateToDelete(id);
    setShowModal(true);
  };

  const handleDelete = async () => {
    if (dateToDelete) {
      await deleteDoc(doc(db, "tourDates", dateToDelete));
      setDateToDelete(null);
      setShowModal(false);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    setDateToDelete(null);
  };

  return (
    <Container>
      <Title>Dates de tournée du groupe wetleg</Title>

      <ButtonWrapper>
        <Button onClick={() => navigate("/admin/new")}>➕ Nouveau</Button>
      </ButtonWrapper>

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
                style={{
                  backgroundColor: "#0284c7",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <FaEdit />
                Modifier
              </Button>
              <DeleteButton
                onClick={() => confirmDelete(t.id)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <FaTrash />
                Supprimer
              </DeleteButton>
            </div>
          </ListItem>
        ))}
      </List>

      {showModal && (
        <ModalOverlay onClick={handleCloseModal}>
          <ModalContent onClick={e => e.stopPropagation()}>
            <ModalTitle>Confirmer la suppression</ModalTitle>
            <p>Es-tu sûr(e) de vouloir supprimer cette date de tournée ?</p>
            <ModalActions>
              <CancelButton onClick={handleCloseModal}>Annuler</CancelButton>
              <DeleteButton onClick={handleDelete}>Supprimer</DeleteButton>
            </ModalActions>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}
