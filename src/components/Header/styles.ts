import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 700px;
  height: 150px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 3px solid rgba(255, 255, 255, 0.289199);
  border-radius: 15px;
  padding: 18px 24px;
`;

export const Container = styled.div`
  width: 150px;
  height: 114px;
  background: linear-gradient(0deg, #f3f3f3 0%, #ffffff 100%);
  box-shadow: 0px 3px 3px rgba(0, 0, 0, 0.196706);
  border-radius: 8px;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 16px 48px;
`;

export const ScoreText = styled.p`
  font-family: "Barlow Semi Condensed";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 2.5px;
  color: #2a45c2;
`;

export const Score = styled.h4`
  font-family: "Barlow Semi Condensed";
  font-style: normal;
  font-weight: 700;
  font-size: 64px;
  line-height: 64px;
  text-align: center;
  color: #565468;
`;
