import {
  Container,
  InnerCircle,
  OuterCircle,
  ShadeCircle,
  StyledOption,
  Title,
} from "./styles";

import { Option } from "components";
import React from "react";
import { icons } from "App";
import { optionColors } from "global/optionColors";
import { useAppSelector } from "app/hooks";

function PlayersOption() {
  const playerChoice = useAppSelector((state) => state.playerChoice);

  return playerChoice ? (
    <Container>
      <Title>YOU PICKED</Title>

      <OuterCircle darkShade={optionColors[playerChoice].darkShade}>
        <StyledOption lightShade={optionColors[playerChoice].lightShade}>
          <ShadeCircle>
            <InnerCircle>{icons[playerChoice]}</InnerCircle>
          </ShadeCircle>
        </StyledOption>
      </OuterCircle>
    </Container>
  ) : (
    <></>
  );
}

export default PlayersOption;
