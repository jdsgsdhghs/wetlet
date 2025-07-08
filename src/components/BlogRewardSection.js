import React from "react";
import styled from "styled-components";

const Section = styled.section`
  background-image: url("/assets/images/fond-grain.png");
  background-size: cover;
  background-position: center;
  padding: 4rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 3rem 1rem;
  }
`;

const TextContainer = styled.div`
  max-width: 600px;
  color: black;

  @media (max-width: 768px) {
    transform: none !important;
  }
`;

const Title = styled.h2`
  font-family: "Anton", sans-serif;
  font-size: 4.5rem;
  color: #d86aff;
  margin: 0;
  transform: translate(300px, -10px);

  @media (max-width: 768px) {
    font-size: 2.5rem;
    transform: none;
  }
`;

const Subtitle = styled.h3`
  font-family: "Kiara Script", cursive;
  font-size: 3.8rem;
  margin: 0.2rem 0 1rem;
  transform: translate(300px, -30px);
  color: #000000;

  @media (max-width: 768px) {
    font-size: 2rem;
    transform: none;
  }
`;

const Paragraph = styled.p`
  font-size: 0.9rem;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  transform: translate(300px, -30px);

  @media (max-width: 768px) {
    transform: none;
    font-size: 0.95rem;
  }
`;

const Button = styled.button`
  background-color: #69cf66;
  color: white;
  padding: 0.5rem 1.6rem;
  border-radius: 20px;
  font-weight: bold;
  border: none;
  cursor: pointer;
  transform: translate(300px, -30px);

  &:hover {
    background-color: #80BC3E;
  }

  @media (max-width: 768px) {
    transform: none;
    margin-top: 1rem;
  }
`;

const DiskImage = styled.img`
  width: 200px;
  transform: rotate(-15deg) translate(40px, -200px);

  @media (max-width: 768px) {
    transform: none;
    margin-top: 2rem;
  }
`;

export default function BlogRewardSection() {
  return (
    <Section>
      <TextContainer>
        <Title>REWARD</Title>
        <Subtitle>Wetleg – Moisturizer</Subtitle>
        <Paragraph>
          Participez, partagez, collectionnez… notre programme de récompense vous permet
          de bénéficier davantage d'exclusifs et de surprises en lien avec notre musique.<br />
          Recevez des contenus inédits, des invitations spéciales, ou encore des objets collectors
          pensés pour nos fans les plus engagés.<br />
          Un petit geste de notre part, pour dire merci à celles et ceux qui nous accompagnent dans
          cette belle aventure sonore.
        </Paragraph>
        <Button>LIRE</Button>
      </TextContainer>

      <DiskImage src="/assets/images/vinyle moz.png" alt="Disque vinyle MOZ" />
    </Section>
  );
}
