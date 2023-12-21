import React from 'react'
import { FaRegFileLines } from "react-icons/fa6";
import{LuDownload } from "react-icons/lu";
import{ IoClose } from "react-icons/io5";
import {motion} from "framer-motion"
function Cards({data,refrence}) {  // we use {data} in place of props here {} is destructuring 
  return (
    <motion.div drag dragConstraints={refrence} whileDrag={{scale:1.1}} dragTransition={{
      bounceStiffness: 100, bounceDamping: 30
    }}
      className=' relative w-60 h-72 bg-zinc-900/80 rounded-[40px] text-white px-8 py-10 overflow-hidden'>
      <FaRegFileLines />
      <p className='text-sm leading-tight mt-5 font-semibold'> {data.desc}</p>
      <div className='footer absolute bottom-0 w-full  left-0'>
        <div className='flex items-center justify-between py-3 px-8 mb-3'>
          <h5>{data.filesize}</h5>
          <span className='w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center'>
            {data.close ? <IoClose /> : <LuDownload size=".7em" color='#fff' />}
          </span>
          
        </div>
        {
          data.tag.isOpen ? (
            <div className={`flex tag w-full h-10 bg-green-400 justify-center items-center`}>
            <h3 className='text-sm font-extralight'>{data.tag.tagTitle}</h3>
            </div>) : null
        }
        
      </div>
      
    </motion.div>  
  )
}

export default Cards
