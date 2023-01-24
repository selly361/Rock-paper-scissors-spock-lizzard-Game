import styled from "styled-components";

export const Container = styled.div`
  width: 145px;
  height: 148px;
  border-radius: 50%;
  position: absolute;
`;

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
`;

export const ShadeCircle = styled.div`
  background: #babfd4;
  width: 111.31px;
  height: 104.99px;
  border-radius: 50%;
  position: relative;
`;
