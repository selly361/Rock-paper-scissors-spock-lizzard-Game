import { LizardIcon, PaperIcon, RockIcon, ScissorsIcon, SpocksIcon } from 'assets'
import React, { Fragment } from 'react'

import  { Choice } from 'types/GameState'
import { GlobalStyles } from 'global/GlobalStyles'
import { Main } from 'components'

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Main /> 
    </Fragment>
  )
}




export const icons = {
  [Choice.Lizard]: <LizardIcon />,
  [Choice.Paper]: <PaperIcon />,
  [Choice.Rock]: <RockIcon />,
  [Choice.Scissors]: <ScissorsIcon />,
  [Choice.Spock]: <SpocksIcon />
}

export default App