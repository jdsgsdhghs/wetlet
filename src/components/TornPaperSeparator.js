import styled from "styled-components";

const TornPaper = styled.img`
  display: block;
  height: auto;
  position: relative;
  z-index: 5;
  width: 100%;
  margin-top: -100px; 
  margin-top: ${(props) => props.marginTop || "0"};
  transform: ${(props) => props.transform || "none"};
`;

export default function TornPaperSeparator({ marginTop, transform }) {
  return (
   <TornPaper src="/assets/images/rippedpaper.png" alt="Bord déchiré"
    marginTop={marginTop}
      transform={transform} />


  );
}
