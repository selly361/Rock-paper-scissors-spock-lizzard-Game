import { Container, Score, ScoreText, StyledHeader } from './styles'

import { LogoIcon } from 'assets'
import React from 'react'
import { useAppSelector } from 'app/hooks'

function Header() {
    const score  = useAppSelector(state => state.score)
  return (
    <StyledHeader>
        <LogoIcon />
        <Container>
            <ScoreText>Score</ScoreText>
            <Score>{score}</Score>
        </Container>
    </StyledHeader>
  )
}

export default Header