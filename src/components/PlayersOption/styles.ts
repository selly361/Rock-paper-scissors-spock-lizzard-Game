import styled from "styled-components";

export const Container = styled.div`
    height: 100%;
    width: 50%;
    display: grid;
    gap: 50px;
    justify-items: center;
`

export const StyledOption = styled.button<{ lightShade: string }>`
  position: absolute;
  width: 145px;
  height: 148px;
  background: ${(props) => props.lightShade};
  border-radius: 50%;
  display: grid;
  place-items: center;
  bottom: 7px;
`;

export const InnerCircle = styled.div`
  background: linear-gradient(0deg, #f3f3f3 0%, #dadada 98.34%);
  width: 111.31px;
  height: 104.99px;
  border-radius: 50%;
  display: grid;
  place-items: center;
  position: absolute;
  top: 5.8px;
`;

export const OuterCircle = styled.div<{ darkShade: string }>`
  position: relative;
  width: 145px;
  height: 148px;
  background: ${(props) => props.darkShade};
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
  z-index: 0;
  border-radius: 50%;
  transform: scale(1.5);
`;

export const ShadeCircle = styled.div`
  background: #babfd4;
  width: 111.31px;
  height: 104.99px;
  border-radius: 50%;
  position: relative;
`;

export const Title = styled.h4`
  font-family: "Barlow Semi Condensed";
  font-weight: 700;
  font-size: 24px;
  line-height: 32px;
  letter-spacing: 3px;
  color: #ffffff;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
  min-width: 100%;
  text-align: center;
`;
