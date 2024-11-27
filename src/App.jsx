import { useState } from 'react'
import Hero from './Component/Main/Hero'
import SideBar from './Component/SideBar/SideBar'
import WashFold from './Component/Main/WashFold'
import DryClean from './Component/Main/DryClean'


function App() {
  

  return (
    <>
    <SideBar />
    <Hero />
    <WashFold />
    <DryClean />
    </>
  )
}

export default App
