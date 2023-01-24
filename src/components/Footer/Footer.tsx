import { RulesButton, StyledFooter } from './styles'

import React from 'react'
import { showRulesModal } from 'features/appSlice'
import { useAppDispatch } from 'app/hooks'

function Footer() {
    const dispatch = useAppDispatch()
  return (
    <StyledFooter>
        <RulesButton onClick={() => dispatch(showRulesModal())}>RULES</RulesButton>
    </StyledFooter>
  )
}

export default Footer