import { ComputersOption, Footer, Header, Option, PlayersOption } from "components";
import { ResultsContainer, StyledMain, StyledOptions } from "./styles";

import { Choice } from "types/GameState";
import React from "react";
import { icons } from "App";
import { optionColors } from "global/optionColors";
import { useAppSelector } from "app/hooks";
import Results from "components/Results/Results";

function Main() {
  const options = Object.values(Choice);

  const { started, computerChoice } = useAppSelector((state) => state);
  return (
    <StyledMain>
      <Header />

      {!started && (
        <StyledOptions>
          {options.map((option) => (
            <Option
              option={option}
              darkShade={optionColors[option].darkShade}
              lightShade={optionColors[option].lightShade}
            />
          ))}
        </StyledOptions>
      )}

      {started && (
        <ResultsContainer className={computerChoice ? "active" : ''}>
          <PlayersOption />
          {computerChoice && <Results />}
          <ComputersOption />
        </ResultsContainer>
      )}

      <Footer />
    </StyledMain>
  );
}

export default Main;
