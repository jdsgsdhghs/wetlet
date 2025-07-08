import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { X, Menu } from "lucide-react";

// Container global
const NavContainer = styled.nav`
  position: relative;
  z-index: 1000;
  font-family: 'Helvetica', sans-serif;
`;

// Navigation desktop (visible seulement au-dessus de 768px)
const DesktopNav = styled.div`
  background-color: #111;
  padding: 1.2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15rem;
  color: white;
  font-size: 0.9rem;
  font-weight: 600;
  border-top: 1px solid #444;

  @media (max-width: 768px) {
    display: none;
  }
`;

// Item de navigation
const NavItem = styled(Link)`
  color: white;
  text-decoration: none;
  letter-spacing: 1px;
  position: relative;

  &::after {
    content: "/";
    position: absolute;
    right: -7.5rem;
    color: #666;
  }

  &:last-child::after {
    content: "";
  }

  &:hover {
    text-decoration: underline;
  }
`;

// Nav mobile en haut (logo + menu)
const MobileNavBar = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    background-color: white;
    padding: 1rem 1.5rem;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #ddd;
  }
`;

const LogoImage = styled.img`
  height: ${(props) => props.size || "35px"};
  object-fit: contain;
`;


const IconWrapper = styled.div`
  cursor: pointer;
  color: black;
  z-index: 1100;
`;

// Overlay noir semi-transparent
const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1040;
`;

// Menu mobile latéral
const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  background-image: url("/assets/images/fond-vert.png");
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  z-index: 1050;
`;

const MenuHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 1.5rem 0;
`;

const MenuLinks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 4rem;
  gap: 1.2rem;

  a {
    color: black;
    font-size: 1.4rem;
    font-weight: bold;
    text-decoration: none;
    letter-spacing: 1px;

    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function BottomNav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <NavContainer>
      {/* Nav Desktop */}
      <DesktopNav>
        <NavItem to="/wetleg">WETLEG</NavItem>
        <NavItem to="/album">ALBUM</NavItem>
        <NavItem to="/tour">TOURNÉE</NavItem>
        <NavItem to="/blog">BLOG</NavItem>
      </DesktopNav>

      {/* Nav Mobile Top */}
      <MobileNavBar>
        <LogoImage src="/assets/images/logo-moz.png" alt="MOZ logo" />
        <IconWrapper onClick={() => setMenuOpen(true)}>
          <Menu size={28} />
        </IconWrapper>
      </MobileNavBar>

      {/* Overlay + Menu Mobile */}
      {menuOpen && (
        <>
          <Overlay onClick={() => setMenuOpen(false)} />
          <MobileMenu>
            <MenuHeader>
              <LogoImage src="/assets/images/logo-moz.png" alt="MOZ logo" />
              <IconWrapper onClick={() => setMenuOpen(false)}>
                <X size={32} />
              </IconWrapper>
            </MenuHeader>

            <MenuLinks>
              <Link to="/wetleg" onClick={() => setMenuOpen(false)}>WETLEG</Link>
              <Link to="/album" onClick={() => setMenuOpen(false)}>ALBUM</Link>
              <Link to="/tour" onClick={() => setMenuOpen(false)}>TOURNÉE</Link>
              <Link to="/blog" onClick={() => setMenuOpen(false)}>BLOG</Link>
            </MenuLinks>
          </MobileMenu>
        </>
      )}
    </NavContainer>
  );
}
