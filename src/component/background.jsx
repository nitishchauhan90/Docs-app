import React from 'react'
import "../index.css"
export default function Background() {
  return (
    <div className=' fixed z-[2] w-full h-screen'>  
        <div className=' absolute  top-[5%] w-full py-10  flex justify-center font-black text-zinc-500 text-xl'>Documents.</div>
        <h1 className='absolute left-1/2 top-1/2 -translate-x-[50%] -translate-y-[50%]  text-[10vw] leading-none tracking-tighter font-black text-zinc-500'>DOCS.</h1>
      
    </div>
  )
}
