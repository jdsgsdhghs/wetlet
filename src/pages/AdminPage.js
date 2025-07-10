import React, { useEffect, useState } from "react";
import { db } from "../config/firebase";
import { collection, deleteDoc, doc, onSnapshot, query } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { FaEdit, FaTrash } from "react-icons/fa";
import styled from "styled-components";
import { Link } from "react-router-dom";

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

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 1rem;
    align-items: center;
  }
`;

const ReturnLink = styled(Link)`
  background-color: #22c55e;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: bold;
  text-decoration: none;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

// Modal styles
const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 999;
`;

const ModalContent = styled.div`
  background: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 400px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
`;

const ModalButtons = styled.div`
  margin-top: 1.5rem;
  display: flex;
  justify-content: space-around;
`;

const CancelButton = styled(Button)`
  background-color: #64748b;
  &:hover {
    background-color: #475569;
  }
`;

export default function AdminPage() {
  const [tourDates, setTourDates] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
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

  const confirmDelete = id => {
    setSelectedId(id);
    setIsModalOpen(true);
  };

  const handleConfirmDelete = async () => {
    if (selectedId) {
      await deleteDoc(doc(db, "tourDates", selectedId));
      setIsModalOpen(false);
      setSelectedId(null);
    }
  };

  return (
    <Container>
      <ButtonWrapper>
        <ReturnLink to="/">← Retour à l’accueil</ReturnLink>
        <Button onClick={() => navigate("/admin/new")}>➕ Nouveau</Button>
      </ButtonWrapper>

      <Title>Dates de tournée du groupe wetleg</Title>

      <List>
        {tourDates.map(t => (
          <ListItem key={t.id}>
            <span>
              {new Date(t.date.seconds ? t.date.seconds * 1000 : t.date).toLocaleDateString("fr-FR", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })} – {t.city}, {t.country} @ {t.venue}
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
                style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}
              >
                <FaTrash />
                Supprimer
              </DeleteButton>
            </div>
          </ListItem>
        ))}
      </List>

      {isModalOpen && (
        <ModalOverlay>
          <ModalContent>
            <p>Es-tu sûr(e) de vouloir supprimer cette date de tournée ?</p>
            <ModalButtons>
              <CancelButton onClick={() => setIsModalOpen(false)}>Annuler</CancelButton>
              <DeleteButton onClick={handleConfirmDelete}>Oui, supprimer</DeleteButton>
            </ModalButtons>
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
}
