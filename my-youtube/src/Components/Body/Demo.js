import React, { useMemo, useState } from 'react'
import { findNthPrime } from '../../Utils/helper';

function Demo() {
    const [text,setText]= useState("")
    const [isDarkTheme, setIsDarkTheme] =useState(true)
    console.log("Rendering...");
    const prime = useMemo(()=>findNthPrime(text),[text]);
    
    return (
        <div className={'m-4 p-2 w-96 h-96 border border-black '+(isDarkTheme && "bg-gray-900 text-white")}>
                <div>
                    <button  
                    onClick={()=>setIsDarkTheme(!isDarkTheme)}
                    className='m-10 p-2 bg-green-300'>
                        Toggle</button>
                </div>
            <div>
                <input 
                className={'border border-black w-72 px-2 '+(isDarkTheme &&"bg-gray-500")}
                type='number' 
                value={text} 
                onChange={(e)=>setText(e.target.value)}/>
            </div>
            <h1>nth Prime :{prime}</h1>
        </div>
    )
}

export default Demo
