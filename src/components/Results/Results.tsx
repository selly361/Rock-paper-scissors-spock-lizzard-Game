import { useAppDispatch, useAppSelector } from 'app/hooks'
import React from 'react'

function Results() {
    const result = useAppSelector(state => state.result)
    const dispatch = useAppDispatch()
  return (
    <div>Results</div>
  )
}

export default Results