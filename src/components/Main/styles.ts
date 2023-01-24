import styled from "styled-components";

export const StyledMain = styled.main`
  min-height: 800px;
  width: 100vw;
  background: radial-gradient(
    134.34% 134.34% at 50% 0%,
    #1f3757 0%,
    #131537 100%
  );
  display: grid;
  gap: 100px;
  padding-top: 30px;
`;

export const StyledOptions = styled.fieldset`
  width: 472px;
  height: 450px;
  background: url("bg-pentagon.svg") no-repeat;
  background-size: contain;
  margin: auto;
  position: relative;
`;

export const ResultsContainer = styled.fieldset`
  width: 650px;
  height: 450px;
  margin: auto;
  display: flex;
  gap: 20px;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;
