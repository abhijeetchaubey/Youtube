import React from 'react'

function Button({name}) {
    return (
        <div className=''>
        <button className='min-w-fit m-2 px-5 py-2  rounded-lg bg-gray-200'>{name}</button>
        </div>
    )
}

export default Button
