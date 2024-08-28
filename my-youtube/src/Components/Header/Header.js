import React, { useEffect, useState } from 'react'
import Hamburger from 'hamburger-react'
import { FaUserCircle } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import logo from '../../Utils/Youtube Premium logo.png'
import { useDispatch, useSelector } from 'react-redux';
import {toggleMenu} from '../../Utils/appSlice'
import { YOUTUBE_SEARCH_API } from '../../Utils/constant';
import { cacheResults } from '../../Utils/searchSlice';

function Header() {

    const [searchQuerry,setSearchQuerry]= useState("");
    const [suggestions,setSuggestions]= useState([])
    const [showSuggestions,setShowSuggestions]=useState(false);
    
    const searchCache =useSelector(store=>store.search)
    const dispatch =useDispatch()

    useEffect(()=>{
        // API call
        // make an api call after every key press 
        // but if the difference b/w 2 API call is <200ms
        // decline the API call
// Debouncing->
        const timer =setTimeout(()=>{
            if(searchCache[searchQuerry]){
                setSuggestions(searchCache[searchQuerry]);
            } else{
                getSearchSuggestions()
            }
            },200);

        return()=>{
            clearTimeout(timer)

        }
    },[searchQuerry])


    const getSearchSuggestions =async()=>{
        console.log("API call",searchQuerry);
        const data = await fetch(YOUTUBE_SEARCH_API+searchQuerry);
        const json = await data.json()
        // console.log(json[1]);
        setSuggestions(json[1]);
        
        // Update cache 
        dispatch(cacheResults({
            [searchQuerry]:json[1],
        }))
    }

    const toggleMenuHandler = ()=>{
        console.log("Hamburger clicked!");
        
        dispatch(toggleMenu());
        console.log("Menu State Toggled");
        
    }

    return (
        <div className='grid grid-flow-col p-4 m-2 mx-0 shadow-lg rounded-md '>
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
                <div>
                    <div className='flex items-center w-[50vw] relative z-[1]'>
                        <input 
                        value={searchQuerry}
                        onFocus={()=>setShowSuggestions(true)}
                        onBlur={()=>setShowSuggestions(false)}
                        onChange={(e)=>setSearchQuerry(e.target.value)}
                        className='w-1/2 border placeholder:text-gray-700 border-gray-800 rounded-l-full border-r-0 p-2 pl-3' type='text' placeholder='Search' name='Search'/>
                        <button 
                        title='Search'
                        className=' border border-gray-800  rounded-r-full bg-[#b6a3a327] p-2 px-5 '><CiSearch size={24} className=''/>
                        </button>
                    </div>
                    {showSuggestions && (
                        <div className=' absolute bg-white py-2 px-5 w-[24rem] cursor-pointer'>
                        <ul>
                            {suggestions.map((s)=>
                                <li className='py-2 px-3 shadow-sm hover:bg-gray-100 rounded-xl' key={s}>{s} </li>
                            )}
                        </ul>
                    </div>
                    )}
                </div>
                
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
