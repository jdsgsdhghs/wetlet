import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-image: url("/assets/images/fond-grain.png");
  background-size: cover;
  
  background-repeat: no-repeat;
  padding: 3rem 3rem;
  text-align: center;
  font-family: 'Helvetica', sans-serif;
  
  z-index: 0;
  margin: 0;
  transform: translate(0px, -140px)ajuste selon mobile */
`;



const Title = styled.h2`
  font-weight: 900;
  font-size: 4.5rem;
  letter-spacing: 2px;
  margin-bottom: 0.3rem;
  color: #DD60F8;
  transform: translate(-10px, 0px);
`;

const Subtitle = styled.p`
  font-family: 'Kiara Script', cursive;
  font-size: 4rem;
  font-style: italic;
  margin-bottom: 2rem;
  color: #000000;
  transform: translate(-10px, -90px);
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  max-width: 650px;
  margin: auto;
  color: #191919;
  transform: translate(-10px, -90px);
`;

const Button = styled.a`
  margin-top: 2rem;
  display: inline-block;
  background-color: #7e9d38;
  color: white;
  padding: 0.8rem 1.8rem;
  border-radius: 50px;
  font-weight: bold;
  text-decoration: none;
  font-size: 0.9rem;
  letter-spacing: 1px;
  transition: background-color 0.3s;
  transform: translate(-10px, -70px);

  &:hover {
    background-color: #80BC3E;
  }
`;

export default function BlogSectionMobile() {
  return (
    <Section>
      
        <Title>Blog</Title>
        <Subtitle>Wetleg – Moisturizer</Subtitle>
        <Text>
         Le blog officiel de Wet Leg révèle les coulisses et inspirations de Moisturizer, offrant aux fans un accès exclusif à leur univers musical.
        </Text>
        <Button href="/album">DECOUVRIR</Button>
      
    </Section>
  );
}
