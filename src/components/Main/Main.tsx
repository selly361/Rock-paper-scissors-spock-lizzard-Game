import { ComputersOption, Footer, Header, Option, PlayersOption } from "components";
import { ResultsContainer, StyledMain, StyledOptions } from "./styles";

import { Choice } from "types/GameState";
import React from "react";
import { icons } from "App";
import { optionColors } from "global/optionColors";
import { useAppSelector } from "app/hooks";

function Main() {
  const options = Object.values(Choice);

  const { started } = useAppSelector((state) => state);
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
        <ResultsContainer>
          <PlayersOption />
          <ComputersOption />
        </ResultsContainer>
      )}

      <Footer />
    </StyledMain>
  );
}

export default Main;
