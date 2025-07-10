import React from "react";
import styled from "styled-components";
import { FaApple, FaInstagram, FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const FooterWrapper = styled.footer`
  background-color: #111;
  color: white;
  text-align: center;
  padding: 2.5rem 1rem 1.5rem 1rem;
  
`;

const LogoImage = styled.img`
  width: 120px;
  margin: 0 auto 1.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  font-size: 1.5rem;
  margin-bottom: 1.5rem;
`;

const Separator = styled.hr`
  border: none;
  height: 1px;
  background-color: #333;
  margin: 1.5rem 0;
`;

const BottomInfo = styled.div`
  font-size: 0.85rem;
  color: #bbb;
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const FooterLinks = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: center;
  gap: 1rem;
  font-size: 0.9rem;
`;
const Socials = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 1rem;
`;

const IconLink = styled.a`
  color: white;
  font-size: 24px;

  &:hover {
    opacity: 0.7;
  }
`;

const FooterLink = styled(Link)`
  color: white;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;
const Footer = () => {
  return (
    <FooterWrapper>
      <LogoImage src="/assets/images/title-moz.png" alt="MOZ Logo" />

    <Socials>
  <IconLink href="https://music.apple.com/us/artist/wet-leg/1569685293" target="_blank" rel="noopener noreferrer">
    <FaApple />
  </IconLink>
  <IconLink href="https://www.instagram.com/wetlegband" target="_blank" rel="noopener noreferrer">
    <FaInstagram />
  </IconLink>
  <IconLink href="https://www.youtube.com/@WetLegBand" target="_blank" rel="noopener noreferrer">
    <FaYoutube />
  </IconLink>
</Socials>


      <Separator />

       <FooterLinks>
        <FooterLink to="/mentions-legales">Mentions légales</FooterLink>
        <span>|</span>
        <FooterLink to="/wetleg-2025">Wetleg 2025</FooterLink>
      </FooterLinks>
    </FooterWrapper>
  );
};

export default Footer;
