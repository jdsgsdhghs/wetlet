import styled from "styled-components";

const Section = styled.section`
  background-image: url("/assets/images/fond-grain.png"); /* ton image ici */
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
z-index: 0;

  padding: 3rem 2rem;
  text-align: center;
  font-family: 'Helvetica', sans-serif;
  margin-top: -60px;
  position: relative;
`;

const ContentWrapper = styled.div`
 background-image: url("/assets/images/fond-vert-transparent.png")
  backdrop-filter: blur(3px);
  padding: 3rem 2rem;
  max-width: 750px;
  margin: 0 auto;
  border-radius: 8px;
  position: relative;   /* ⬅️ Obligatoire pour que z-index fonctionne */
  z-index: 1;  
`;

const Title = styled.h2`
  font-weight: 900;
  font-size: 2.5rem;
  letter-spacing: 2px;
  margin-bottom: 0.3rem;
  color: #d24fd3; /* rose/magenta comme sur ta maquette */
`;

const Subtitle = styled.p`
  font-family: 'Dancing Script', cursive;
  font-size: 1.5rem;
  font-style: italic;
  margin-bottom: 2rem;
  color: #1a0f22;
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  max-width: 650px;
  margin: auto;
  color: #1a0f22;
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

  &:hover {
    background-color: #6a852e;
  }
`;

export default function BlogSection() {
  return (
    <Section>
      <ContentWrapper>
        <Title>Blog</Title>
        <Subtitle>Wetleg – Moisturizer</Subtitle>
        <Text>
          Le blog officiel de Wetleg offre une plongée sincère dans l’univers
          créatif du groupe, dévoilant les coulisses de leur dernier album
          Moisturizer. Entre anecdotes de studio, inspirations musicales et
          moments de vie sur leur île natale, les membres partagent leur
          processus artistique avec authenticité. Chaque article met en lumière
          leurs évolutions sonores et leurs ambitions futures.
        </Text>
        <Button href="#">DÉCOUVRIR</Button>
      </ContentWrapper>
    </Section>
  );
}
