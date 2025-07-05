// src/components/Header.js
import { Link } from "react-router-dom";
import styled from "styled-components";

const HeaderWrapper = styled.header`
  background-color: #1f2937; /* gray-900 */
  color: white;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
`;

const Title = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
`;

const Nav = styled.nav`
  a {
    margin-left: 1rem;
    color: white;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;


export default function Header() {
  return (
    <HeaderWrapper>
      <Title>Wet Leg Manager</Title>
      <Nav>
        <Link to="/">Accueil</Link>
        {/* <Link to="/admin">Admin</Link> */}
      </Nav>
    </HeaderWrapper>
  );
}

