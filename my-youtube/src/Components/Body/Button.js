import React from 'react'

function Button({name}) {
    return (
        <div className=''>
        <button className='min-w-fit m-2 px-5 py-2  rounded-lg bg-[#282828] hover:bg-[#393935]'>{name}</button>
        </div>
    )
}

export default Button
