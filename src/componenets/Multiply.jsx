import React from 'react'
import { useParams } from 'react-router-dom'

export const Multiply = () => {
    const {num1, num2}= useParams()
    const result = +num1 * +num2
  return (
    <div>
        <h1>Answer {num1} * {num2} = {result % 1 == 0 ? result:result.toFixed(2)}</h1>
    </div>
  )
}
