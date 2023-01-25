import styled from "styled-components";

export const StyledModal = styled.main`
  width: 450px;
  height: 511px;
  background: #ffffff;
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
  border-radius: 8px;
  position: fixed;
  inset: 0;
  margin: auto;
  padding: 32px;
  display: grid;
  gap: 10px;
  justify-items: center;
`;

export const RulesImage = styled.img`
  object-fit: cover;
`;

export const Title = styled.h5`
  font-family: "Barlow Semi Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 32px;
  line-height: 32px;
  color: #3b4262;
`;


export const StyledSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`