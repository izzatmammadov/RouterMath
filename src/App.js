import React from 'react'
import { Home } from './componenets/Home'
import { ROUTER } from './constants/Routers'
import { Addiction } from './componenets/Addiction'
import { Subtract } from './componenets/Subtract'
import { Multiply } from './componenets/Multiply'
import { Division } from './componenets/Division'
import { Route, Routes } from 'react-router-dom'

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path={ROUTER.Home} element={<Home/>}/>
        <Route path={ROUTER.Addition + "/:num1/:num2"} element={<Addiction/>}/>
        <Route path={ROUTER.Subtraction + "/:num1/:num2"} element={<Subtract/>}/>
        <Route path={ROUTER.Multiplication + "/:num1/:num2"} element={<Multiply/>}/>
        <Route path={ROUTER.Division + "/:num1/:num2"} element={<Division/>}/>
      </Routes>
    </div>
  )
}
