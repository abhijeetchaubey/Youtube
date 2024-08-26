import React from 'react'
import Button from './Button'

const lists =["All", "Development","Live","Gaming","Cricket","Comedy"]

function ButtonList() {
    return (
        <div className='flex border-b-2 border-black'>
            {lists.map((list,index)=>(<Button key={index}  name={list}/>))

            }
        </div>
    )
}

export default ButtonList
