import React from 'react'
import Background from './component/background'
import Foreground from './component/foreground'
import "../src/index.css"
function App() {
  return (
    <div className=' relative w-full h-screen  bg-zinc-800'>
      <Background/>
      <Foreground/>
    </div>
  )
}

export default App

