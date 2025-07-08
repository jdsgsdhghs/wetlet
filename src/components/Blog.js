import React from "react";
import styled from "styled-components";

const SectionWrapper = styled.section`
  background-image: url("/assets/images/muffine-paysage.png");
  background-size: cover;
  background-position: center;
  text-align: center;
  padding: 21rem 1rem 6rem;
  position: relative;
   transform: translate(0px, 90px);
`;

const TitleWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const Title = styled.h1`
  font-size: 4rem;
  font-weight: 900;
  margin-bottom: 1rem;
  font-family: "Helvetica", sans-serif;
  transform: translate(220px, 10px);
`;

const StarIcon = styled.img`
  position: absolute;
  bottom: -10px;
  right: -30px;
  width: 80px;
  transform: translate(1050px, -50px);
 
`;

const Text = styled.p`
  max-width: 600px;
  margin: 0 auto 2rem;
  font-size: 0.9rem;
  line-height: 1.6;
`;

const Button = styled.button`
  background-color: #80BC3E;
  color: white;
  padding: 0.6rem 1.8rem;
  transform: translate(700px, -10px);
  border-radius: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transition: background 0.3s;
  &:hover {
    background-color: #55b752;
    
  }
`;

const TornTop = styled.img`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(2px, -110px);
`;

const TornBottom = styled.img`
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  transform: translate(-2px, -25px);
  z-index: 10; /* plus haut que les autres */
  pointer-events: none; /* pour éviter de bloquer les clics en dessous */
`;

export default function BlogSection() {
  return (
    <>
      <TitleWrapper>
        <Title>BLOG</Title>
        <StarIcon src="/assets/images/Star.png"  />
      </TitleWrapper>
      <Text>
        Bienvenue sur le blog officiel de Wet Leg. <br />
        Ici, on partage nos réflexions, nos actualités, et quelques moments volés en tournée. <br />
        C’est un espace libre, sans règles, où l’on vous donne rendez-vous entre deux refrains.
      </Text>
      <Button>LIRE</Button>

      <SectionWrapper>
        <TornTop src="/assets/images/rippedpaper.png" alt="Torn paper top" />
        <TornBottom src="/assets/images/rippedpaper.png" alt="Torn paper bottom" />
      </SectionWrapper>
    </>
  );
}