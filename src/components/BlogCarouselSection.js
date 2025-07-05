import React from "react";
import styled from "styled-components";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Section = styled.section`
  padding: 4rem 1rem;
  background-color: white;
  position: relative;
`;

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  flex-wrap: nowrap;
`;

const Card = styled.div`
  background: white;
  border-radius: 10px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.1);
  width: 220px;
  text-align: center;
  padding: 1rem;
`;

const Image = styled.img`
  width: 100%;
  border-radius: 5px;
`;

const Title = styled.h3`
  font-family: "Anton", sans-serif;
  margin-top: 0.5rem;
`;

const Button = styled.button`
  background-color: #69cf66;
  color: white;
  padding: 0.4rem 1.4rem;
  border-radius: 20px;
  font-weight: bold;
  border: none;
  margin-top: 0.5rem;
  cursor: pointer;
`;

const Arrow = styled.button`
  background: transparent;
  border: none;
  font-size: 1.8rem;
  cursor: pointer;
  color: black;
`;

export default function BlogCarouselSection() {
  return (
    <Section>
      <CarouselWrapper>
        <Arrow><FaChevronLeft /></Arrow>

        <Card>
          <Image src="/assets/images/interview-left.png" alt="Interview gauche" />
          <Title>INTERVIEW 2025</Title>
          <Button>REGARDER</Button>
        </Card>

        <Card>
          <Image src="/assets/images/interview-center.png" alt="Interview centre" />
          <Title>INTERVIEW 2025</Title>
          <Button>REGARDER</Button>
        </Card>

        <Card>
          <Image src="/assets/images/interview-right.png" alt="Interview droite" />
          <Title>INTERVIEW 2025</Title>
          <Button>REGARDER</Button>
        </Card>

        <Arrow><FaChevronRight /></Arrow>
      </CarouselWrapper>
    </Section>
  );
}
