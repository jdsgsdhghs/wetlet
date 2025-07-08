import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";

const CarouselWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 2rem;
  background-color: #f8f8f8;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
    flex-direction: column;
  }
`;

const Arrow = styled.button`
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  z-index: 10;
  color: #000;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin: 0.5rem;
  }
`;

const SlidesContainer = styled.div`
  display: flex;
  gap: 2rem;
  transition: transform 0.5s ease;

  @media (max-width: 768px) {
    gap: 0;
  }
`;

const Slide = styled.div`
  flex-shrink: 0;
  width: 280px;
  height: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: ${props =>
    props.active
      ? "0 8px 20px rgba(0,0,0,0.25)"
      : "0 0 10px rgba(0,0,0,0.2)"};
  text-align: center;
  transform: scale(${props => (props.active ? 1.1 : 0.95)});
  opacity: ${props => (props.active ? 1 : 0.6)};
  transition: all 0.4s ease;

  @media (max-width: 768px) {
    width: 90vw;
    height: 420px;
    transform: scale(1);
    opacity: 1;
    box-shadow: none;
  }
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

  @media (max-width: 768px) {
    font-size: 1rem;
  }
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
    background-color: #55b752;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    padding: 0.5rem 1.2rem;
  }
`;

const data = [
  {
    image: "/assets/images/interview-grammys.png",
    title: "GRAMMY'S 2023",
    link: "https://www.youtube.com/watch?v=Iz1_NSW4NNs",
  },
  {
    image: "/assets/images/interview-soundspace.png",
    title: "SOUND SPACE INTERVIEW",
    link: "https://www.youtube.com/watch?v=jI8HwHwpSHM",
  },
  {
    image: "/assets/images/interview-coachella.png",
    title: "COACHELLA 2023",
    link: "https://www.youtube.com/watch?v=OMCo3RBMG-M",
  },
];

export default function InterviewCarousel() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [slideWidth, setSlideWidth] = useState(
    isMobile ? window.innerWidth * 0.9 : 280
  );
  const gap = isMobile ? 0 : 32; // 2rem ~ 32px

  // refs pour swipe tactile
  const startX = useRef(0);
  const currentX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setSlideWidth(mobile ? window.innerWidth * 0.9 : 280);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + data.length) % data.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % data.length);
  };

  const onTouchStart = (e) => {
    isDragging.current = true;
    startX.current = e.touches[0].clientX;
  };

  const onTouchMove = (e) => {
    if (!isDragging.current) return;
    currentX.current = e.touches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!isDragging.current) return;
    const diff = startX.current - currentX.current;
    const swipeThreshold = 50;

    if (diff > swipeThreshold) {
      handleNext();
    } else if (diff < -swipeThreshold) {
      handlePrev();
    }

    isDragging.current = false;
    startX.current = 0;
    currentX.current = 0;
  };

  const translateX = -(slideWidth + gap) * current;

  return (
    <CarouselWrapper>
      <Arrow onClick={handlePrev} aria-label="Previous">
        &#8249;
      </Arrow>
      <SlidesContainer
        style={{ transform: `translateX(${translateX}px)` }}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        {data.map((item, index) => (
          <Slide key={index} active={index === current}>
            <Image src={item.image} alt={item.title} />
            <Title>{item.title}</Title>
            <Button href={item.link} target="_blank" rel="noopener noreferrer">
              REGARDER
            </Button>
          </Slide>
        ))}
      </SlidesContainer>
      <Arrow onClick={handleNext} aria-label="Next">
        &#8250;
      </Arrow>
    </CarouselWrapper>
  );
}
