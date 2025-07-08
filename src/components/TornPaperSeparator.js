import styled from "styled-components";

const TornPaper = styled.img`
  display: block;
  width: 100%;
  height: auto;
  position: relative;
  z-index: 5;
  margin: 0;
  transform: translateY(-60px);

  @media (max-width: 768px) {
    transform: translateY(-30px);
  }
`;

export default function TornPaperSeparator() {
  return (
    <TornPaper
      src="/assets/images/rippedpaper.png"
      alt="Bord déchiré"
    />
  );
}
