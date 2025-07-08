import styled from "styled-components";

const TornPaper = styled.img`
  display: block;
  height: auto;
  position: relative;
  width: 100%;
  margin-top: ${(props) => props.marginTop || "0"};
  transform: ${(props) => props.transform || "translate(0px, -470px)"};
  z-index: ${(props) => props.zIndex || 5};

  @media (max-width: 480px) {
    transform: ${(props) => props.mobileTransform || "translateY(-60px)"};
    margin-top: ${(props) => props.mobileMarginTop || "0"};
    z-index: ${(props) => props.mobileZIndex || props.zIndex || 5};
  }
`;

export default function TornPaperSeparator({
  marginTop,
  transform,
  mobileTransform,
  mobileMarginTop,
  zIndex,
  mobileZIndex,
}) {
  return (
    <TornPaper
      src="/assets/images/rippedpaper.png"
      alt="Bord déchiré"
      marginTop={marginTop}
      transform={transform}
      mobileTransform={mobileTransform}
      mobileMarginTop={mobileMarginTop}
      zIndex={zIndex}
      mobileZIndex={mobileZIndex}
    />
  );
}
