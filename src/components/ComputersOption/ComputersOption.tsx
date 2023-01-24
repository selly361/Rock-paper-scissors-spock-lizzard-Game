import {
  Container,
  InnerCircle,
  OuterCircle,
  ShadeCircle,
  StyledOption,
  Title,
} from "components/PlayersOption/styles";

import { Loading } from "./styles";
import { Option } from "components";
import React from "react";
import { icons } from "App";
import { optionColors } from "global/optionColors";
import { useAppSelector } from "app/hooks";

function ComputersOption() {
  const computerChoice = useAppSelector((state) => state.computerChoice);

  return (
    <Container>
      <Title>THE HOUSE PICKED</Title>
      {computerChoice ? (
        <OuterCircle darkShade={optionColors[computerChoice].darkShade}>
          <StyledOption lightShade={optionColors[computerChoice].lightShade}>
            <ShadeCircle>
              <InnerCircle>{icons[computerChoice]}</InnerCircle>
            </ShadeCircle>
          </StyledOption>
        </OuterCircle>
      ) : (
        <Loading />
      )}
    </Container>
  );
}

export default ComputersOption;
