import { BackDrop, Main, RulesModal } from "components";
import {
  LizardIcon,
  PaperIcon,
  RockIcon,
  ScissorsIcon,
  SpocksIcon,
} from "assets";
import React, { Fragment } from "react";

import { Choice } from "types/GameState";
import { GlobalStyles } from "global/GlobalStyles";
import { useAppSelector } from "app/hooks";

function App() {
  const displayRulesModal = useAppSelector((state) => state.displayRulesModal);


  if(displayRulesModal) document.body.style.overflow = "hidden"

  else document.body.style.overflow = ""

  return (
    <Fragment>
      <GlobalStyles />
      <Main />
      {displayRulesModal && (
        <>
          <BackDrop />
          <RulesModal />
        </>
      )}
    </Fragment>
  );
}

export const icons = {
  [Choice.Lizard]: <LizardIcon />,
  [Choice.Paper]: <PaperIcon />,
  [Choice.Rock]: <RockIcon />,
  [Choice.Scissors]: <ScissorsIcon />,
  [Choice.Spock]: <SpocksIcon />,
};

export default App;
