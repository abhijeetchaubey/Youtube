import React from 'react'
import Hamburger from 'hamburger-react'
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from '../../Utils/Youtube Premium logo.png'
import { useDispatch } from 'react-redux';
import {toggleMenu} from '../../Utils/appSlice'
function Header() {
    const dispatch = useDispatch();

    const toggleMenuHandler = ()=>{
        console.log("Hamburger clicked!");
        
        dispatch(toggleMenu());
        console.log("Menu State Toggled");
        
    }
    return (
        <div className='grid grid-flow-col p-4 m-2 mx-0 shadow-lg rounded-md'>
            {/* logo */}
            <div className='flex  items-center gap-x-4 col-span-1'>
            <div onClick={toggleMenuHandler} ><Hamburger/></div>

                <img
                className='h-6'
                src={logo}
                alt='YOutube-logo'
                />
            </div>
            {/* Search bar */}
            <div className='col-span-10 flex items-center px-48'>
                <input className='w-1/2 border placeholder:text-gray-700 border-gray-800 rounded-l-full border-r-0 p-2 pl-3' type='text' placeholder='Search' name='Search'/>
                <button 
                title='Search'
                className=' border border-gray-800  rounded-r-full bg-[#b6a3a327] p-2 px-5 '><CiSearch size={24} className=''/></button>
            </div>
            {/* user-icon */}
            <div className='col-span-1 flex gap-4 items-center'>
            <IoIosNotificationsOutline size={32} />
                <FaUserCircle size={32}/>

            </div>
        </div>
        
    )
}

export default Header
