import React, { useRef } from 'react'
import Cards from './cards'


function Foreground() {
  const ref=useRef(null) //div ki nishani lene ke liye ref use kiya
  const data=[
      {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
        filesize: ".9mb" ,
        close: true, 
        tag: { 
          isOpen: true, 
          tagTitle: "Download Now", 
          tagColor: "green"
        },
        
      },
      {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
        filesize: ".9mb" ,
        close: true, 
        tag: { 
          isOpen: false, 
          tagTitle: "Download Now", 
          tagColor: "green"
        },
        
      },
      {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
        filesize: ".9mb" ,
        close: true, 
        tag: { 
          isOpen: true, 
          tagTitle: "Download Now", 
          tagColor: "green"
        },
        
      },
      {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.", 
        filesize: ".9mb" ,
        close: false, 
        tag: { 
          isOpen: true, 
          tagTitle: "Download Now", 
          tagColor: "green"
        },
        
      },
  ]
  return (
    <div>
        <div ref={ref} className='fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-5'> 
        {data.map((item,index)=>(
          <Cards data={item} refrence={ref} />
        ))}
        </div>
    </div>
  )
}

export default Foreground
