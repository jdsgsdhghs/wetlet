import styled from "styled-components";

const Section = styled.section`
  background-image: url("/assets/images/fond-grain.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 3rem 2rem;
  text-align: center;
  font-family: 'Helvetica', sans-serif;
  position: relative;
  z-index: 0;
  margin: 0;
  transform: translate(0px, -540px);

  @media (max-width: 768px) {
    transform: none;
    padding: 2rem 1rem;
  }
`;

const ContentWrapper = styled.div`
  background-image: url("/assets/images/fond-vert-transparent.png");
  backdrop-filter: blur(3px);
  padding: 3rem 2rem;
  max-width: 700px;
  margin: 0 auto;
  border-radius: 1px;
  position: relative;
  z-index: 1;
  transform: translate(-10px, -30px);

  @media (max-width: 768px) {
    transform: none;
    padding: 2rem 1rem;
  }
`;

const Title = styled.h2`
  font-weight: 900;
  font-size: 4.5rem;
  letter-spacing: 2px;
  margin-bottom: 0.3rem;
  color: #DD60F8;
  transform: translate(-10px, 0px);

  @media (max-width: 768px) {
    font-size: 2.8rem;
    transform: none;
  }
`;

const Subtitle = styled.p`
  font-family: 'Kiara Script', cursive;
  font-size: 4rem;
  font-style: italic;
  margin-bottom: 2rem;
  color: #000000;
  transform: translate(-10px, -90px);

  @media (max-width: 768px) {
    font-size: 2.5rem;
    transform: none;
    margin-bottom: 1.5rem;
  }
`;

const Text = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  max-width: 650px;
  margin: auto;
  color: #191919;
  transform: translate(-10px, -90px);

  @media (max-width: 768px) {
    transform: none;
    font-size: 0.95rem;
  }
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

  @media (max-width: 768px) {
    transform: none;
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
        <Button href="/album">DECOUVRIR</Button>
      </ContentWrapper>
    </Section>
  );
}
