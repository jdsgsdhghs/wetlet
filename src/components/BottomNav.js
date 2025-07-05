import styled from "styled-components";
import { Link } from "react-router-dom";

const NavContainer = styled.nav`

  position: relative;
  z-index: 1000; /* Très haut pour forcer la priorité */


  background-color: #111;
  padding: 1.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15rem; /* espace régulier entre chaque bouton */
  color: white;
  font-family: 'Helvetica', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  border-top: 1px solid #444;
  
`;

const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  position: relative;

  &::after {
    content: "/";
    position: absolute;
    right: -7.5rem; /* ajuste la distance du slash */
    color: #666;
  }

  &:last-child::after {
    content: "";
  }

  &:hover {
    text-decoration: underline;
  }
`;

export default function BottomNav() {
  return (
    <NavContainer>
      <NavItem to="/wetleg">WETLEG</NavItem>

      <NavItem to="/album">ALBUM</NavItem>
     <NavItem to="/tour">TOURNÉE</NavItem>

      <NavItem to="/blog">BLOG</NavItem>
    </NavContainer>
  );
}
