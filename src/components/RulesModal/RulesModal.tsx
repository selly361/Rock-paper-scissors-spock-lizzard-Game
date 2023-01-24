import { RulesImage, StyledModal, StyledSection, Title } from "./styles";

import { CloseIcon } from "assets";
import React from "react";
import { closeRulesModal } from "features/appSlice";
import { useAppDispatch } from "app/hooks";

function RulesModal() {
  const dispatch = useAppDispatch()
  return (
    <StyledModal>
      <StyledSection>
        <Title>RULES</Title>
        <CloseIcon onClick={() => dispatch(closeRulesModal())} />
      </StyledSection>
      <RulesImage src="image-rules.svg" />
    </StyledModal>
  );
}

export default RulesModal;
