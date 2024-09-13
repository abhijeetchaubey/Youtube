import React, { useRef } from 'react'


function Demo2() {
    let x=0;
    const ref = useRef(0)
    return (
        <div className='w-96 h-96 border border-black p-2  m-4'>
            <button 
            onClick={()=>{
                ref.current=ref.current+1;
            }} 
            className='w-fit h-fit p-2 m-2 bg-black text-white'>Increase</button>
            <h1 className='font-bold text-xl'>Ref={ref.current}</h1>
        </div>
    )
}

export default Demo2
