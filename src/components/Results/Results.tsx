import { useAppDispatch, useAppSelector } from 'app/hooks'
import { restartGame } from 'features/appSlice'
import React from 'react'
import { ResetButton, StyledResult, Wrapper } from './styles'

function Results() {
    const result = useAppSelector(state => state.result)
    const dispatch = useAppDispatch()


  return (
    <Wrapper>
      <StyledResult>{result}</StyledResult>
      <ResetButton onClick={() => dispatch(restartGame())}>PLAY AGAIN</ResetButton>
    </Wrapper>
  )
}

export default Results