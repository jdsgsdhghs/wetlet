import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuContainer = styled.nav`
  background-color: #222;
  color: white;
  position: relative;
  padding: 1rem 1.5rem;
  font-family: 'Helvetica', sans-serif;

  @media(min-width: 769px) {
    display: none; /* Caché en desktop */
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.img`
  width: 100px;
`;

const Hamburger = styled.div`
  font-size: 2rem;
  cursor: pointer;
  user-select: none;
`;

const MenuLinks = styled.ul`
  list-style: none;
  padding: 0;
  margin: 1rem 0 0 0;
  background-color: #50543f;
  border-radius: 4px;
  overflow: hidden;
`;

const MenuItem = styled.li`
  border-bottom: 1px solid #444;
  &:last-child {
    border-bottom: none;
  }
`;

const MenuLink = styled(Link)`
  display: block;
  padding: 1rem 1.5rem;
  color: white;
  font-weight: 700;
  text-decoration: none;
  letter-spacing: 1.2px;
  text-align: center;

  &:hover {
    background-color: #3a3b2d;
  }
`;

export default function MobileMenu() {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => setOpen(!open);

  return (
    <MenuContainer>
      <Header>
        <Logo src="/assets/images/title-moz.png" alt="Logo MOZ" />
        <Hamburger onClick={toggleMenu} aria-label="Toggle menu">
          {open ? "×" : "☰"}
        </Hamburger>
      </Header>

      {open && (
        <MenuLinks>
          <MenuItem><MenuLink to="/wetleg" onClick={() => setOpen(false)}>WETLEG</MenuLink></MenuItem>
          <MenuItem><MenuLink to="/album" onClick={() => setOpen(false)}>ALBUM</MenuLink></MenuItem>
          <MenuItem><MenuLink to="/tour" onClick={() => setOpen(false)}>TOURNÉE</MenuLink></MenuItem>
          <MenuItem><MenuLink to="/blog" onClick={() => setOpen(false)}>BLOG</MenuLink></MenuItem>
        </MenuLinks>
      )}
    </MenuContainer>
  );
}
