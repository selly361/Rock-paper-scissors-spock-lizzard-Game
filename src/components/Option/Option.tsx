import { Container, InnerCircle, OuterCircle, ShadeCircle, StyledOption } from "./styles";
import { computerMove, playerMove } from "features/appSlice";

import { Choice } from "types/GameState";
import React from "react";
import { generateComputerMove } from "utils/generateComputerMove";
import { icons } from "App";
import { useAppDispatch } from "app/hooks";

interface Props {
  option: Choice;
  lightShade: string;
  darkShade: string;
  size?: string;
}

function Option({ option, lightShade, darkShade }: Props) {
  const dispatch = useAppDispatch()


  function handleClick(){
    dispatch(playerMove(option))

    setTimeout(() => {
      dispatch(computerMove(generateComputerMove()))
    }, 1000)
  }

  return (
    <Container onClick={handleClick} className={option}>
      <OuterCircle darkShade={darkShade}>
      <StyledOption lightShade={lightShade}>
        <ShadeCircle>
          <InnerCircle>{icons[option]}</InnerCircle>
        </ShadeCircle>
      </StyledOption>
    </OuterCircle>
    </Container>
  );
}

export default Option;
