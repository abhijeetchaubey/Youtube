import React from 'react'
import Button from './Button'
// import { useState } from 'react'
// import { FaAngleRight } from "react-icons/fa";

const lists =["All","Live", "Development","Live","Gaming","AI","Cricket","Comedy","DSA","Music","Engineering","News","Recurssion","Watched"]

function ButtonList() {
    // const[nextButton,setNextButton]=useState(null)
    // const handleRightClick=()=>{}
    return (
        <div className='flex border-b-2 text-xl border-black'>
            {lists.map((list,index)=>(<Button key={index}  name={list}/>))
            }
            {/* {<FaAngleRight size={28} className='bg-[#282828] text text-white cursor-pointer' 
            onClick={()=>handleRightClick()}
            />
            } */}
        </div>
    )
}

export default ButtonList
