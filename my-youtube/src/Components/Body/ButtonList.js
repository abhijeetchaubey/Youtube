import React, { useRef } from 'react'
import Button from './Button'
import { FaAngleRight } from "react-icons/fa";

const lists = ["All", "Live", "Development", "Gaming", "AI", "Cricket", "Comedy", "DSA", "Music", "Engineering"]

function ButtonList() {
    const scrollRef = useRef(null)

    const handleRightClick = () => {
        if (scrollRef.current) {
            scrollRef.current.scrollBy({
                left: 200, // Adjust scroll distance
                behavior: 'smooth'
            })
        }
    }

    return (
        <div className='relative w-full border-b-2 border-black'>
            <div
                ref={scrollRef}
                className='flex overflow-x-auto space-x-4 p-4 scroll-smooth scrollbar-hide'
            >
                {lists.map((list, index) => (
                    <Button key={index} name={list} />
                ))}
            </div>
            <div className='absolute right-2 top-1/2 transform -translate-y-1/2 z-10'>
                <FaAngleRight
                    size={28}
                    className='bg-[#282828] text-white p-1 rounded cursor-pointer'
                    onClick={handleRightClick}
                />
            </div>
        </div>
    )
}

export default ButtonList
