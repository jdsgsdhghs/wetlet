import React, { useState } from "react";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  background-color: #f8f8f8;
  overflow: hidden;
`;

const Arrow = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  color: #000;
`;

const SlidesContainer = styled.div`
  display: flex;
  gap: 2rem;
  transition: transform 0.5s ease;
`;

const Slide = styled.div`
  flex-shrink: 0;
  width: 280px;
  height: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0,0,0,0.2);
  text-align: center;
  transform: scale(${props => props.active ? 1.1 : 0.95});
  opacity: ${props => props.active ? 1 : 0.6};
  transition: all 0.4s ease;
`;

const Image = styled.img`
  width: 100%;
  height: 65%;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  object-fit: cover;
`;

const Title = styled.h4`
  margin: 0.8rem 0 0.3rem;
  font-size: 1rem;
`;

const Button = styled.a`
  display: inline-block;
  margin-top: 0.5rem;
  background-color: #80BC3E;
  color: white;
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-weight: bold;
  text-decoration: none;
  font-size: 0.8rem;
  letter-spacing: 1px;
  transition: background-color 0.3s;

  &:hover {
    background-color: #80BC3E;
  }
`;

const data = [
  {
    image: "/assets/images/interview-grammys.png",
    title: "GRAMMY'S 2023",
    link: "https://www.youtube.com/watch?v=Iz1_NSW4NNs"
  },
  {
    image: "/assets/images/interview-soundspace.png",
    title: "SOUND SPACE INTERVIEW",
    link: "https://www.youtube.com/watch?v=jI8HwHwpSHM"
  },
  {
    image: "/assets/images/interview-coachella.png",
    title: "COACHELLA 2023",
    link: "https://www.youtube.com/watch?v=OMCo3RBMG-M"
  }
];

export default function InterviewCarousel() {
  const [current, setCurrent] = useState(0);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % data.length);
  };

  return (
    <CarouselWrapper>
      <Arrow onClick={handlePrev}>&lt;</Arrow>
      <SlidesContainer>
        {data.map((item, index) => {
          const relativeIndex = (index - current + data.length) % data.length;
          return (
            <Slide key={index} active={relativeIndex === 0}>
              <Image src={item.image} alt={item.title} />
              <Title>{item.title}</Title>
              <Button href={item.link} target="_blank" rel="noopener noreferrer">
                REGARDER
              </Button>
            </Slide>
          );
        })}
      </SlidesContainer>
      <Arrow onClick={handleNext}>&gt;</Arrow>
    </CarouselWrapper>
  );
}
