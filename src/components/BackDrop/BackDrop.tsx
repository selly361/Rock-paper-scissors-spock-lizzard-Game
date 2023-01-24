import React from "react";
import { StyledOverlay } from "./styles";
import { closeRulesModal } from "features/appSlice";
import { useAppDispatch } from "app/hooks";

function BackDrop() {
    const dispatch = useAppDispatch()
  return <StyledOverlay onClick={() => dispatch(closeRulesModal())} />;
}

export default BackDrop;
