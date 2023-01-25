import styled from "styled-components";

export const Wrapper = styled.div`
  width: 220px;
  height: 131px;
  display: grid;
  gap: 16px;
  justify-items: center;
`;

export const StyledResult = styled.h2`
  font-family: "Barlow Semi Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 56px;
  line-height: 67px;
  text-align: center;
  color: #ffffff;
  text-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
`;

export const ResetButton = styled.button`
  width: 220px;
  height: 48px;
  background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
  border-radius: 8px;
  font-family: "Barlow Semi Condensed";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.5px;
  color: #3b4262;
  display: grid;
  place-items: center;
`;
