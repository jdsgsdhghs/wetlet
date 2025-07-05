import React from "react";
import styled from "styled-components";
import { FaApple, FaInstagram, FaYoutube } from "react-icons/fa";

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

const Footer = () => {
  return (
    <FooterWrapper>
      <LogoImage src="/assets/images/title-moz.png" alt="MOZ Logo" />

      <SocialIcons>
        <FaApple />
        <FaInstagram />
        <FaYoutube />
      </SocialIcons>

      <Separator />

      <BottomInfo>
        <span>Mentions légales</span>
        <span>|</span>
        <span>Wetleg 2025</span>
      </BottomInfo>
    </FooterWrapper>
  );
};

export default Footer;
