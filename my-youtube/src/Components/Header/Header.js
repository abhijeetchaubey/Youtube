import React, { useEffect, useState } from 'react'
import { GiHamburgerMenu } from "react-icons/gi";

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
        console.log(json[1]);
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
    const handleSuggestionClick = (suggestions)=>{
        console.log("sUGGESTION cLICKED");
        setSearchQuerry(suggestions)
        setShowSuggestions(false)
    }

    return (
<div className='p-2 md:p-4 m-2 mx-0 mt-0 shadow-lg rounded-md'>
  {/* Desktop/tablet layout using grid | mobile uses flex */}
  <div className='flex md:grid md:grid-cols-12 items-center justify-between gap-y-2'>

    {/* Left section: Hamburger + Logo (mobile: flex left, desktop: col-span-2) */}
    <div className='flex items-center gap-x-3 md:gap-x-5 ml-2 md:ml-4 col-span-2'>
      <div onClick={toggleMenuHandler}>
        <GiHamburgerMenu size={28} className='md:size-28' />
      </div>
      <img className='h-6 md:h-8 text-white' src={logo} alt='YouTube-logo' />
    </div>

    {/* Center section: Search bar (desktop only) */}
    <div className='hidden md:flex justify-center col-span-8'>
      <div className='w-[50vw] relative z-[1]'>
        <div className='flex items-center'>
          <input
            value={searchQuerry}
            onFocus={() => setShowSuggestions(true)}
            onBlur={() => setTimeout(() => setShowSuggestions(false), 400)}
            onChange={(e) => setSearchQuerry(e.target.value)}
            className='w-full border placeholder:text-white hover:bg-[#3f3c3c] bg-[#282828] border-gray-800 rounded-l-full border-r-0 p-2 pl-3 text-sm md:text-base'
            type='text'
            placeholder='Search'
          />
          <button
            title='Search'
            className='border border-gray-800 rounded-r-full bg-[#b6a3a327] p-2 px-3 md:px-5'
          >
            <CiSearch size={20} />
          </button>
        </div>
        {showSuggestions && (
          <div className='absolute bg-black text-white py-2 px-3 md:px-5 w-full cursor-pointer'>
            <ul>
              {suggestions.map((sug) => (
                <li
                  key={sug}
                  onClick={() => handleSuggestionClick(sug)}
                  className='py-2 px-3 shadow-sm hover:bg-[#282828] rounded-xl'
                >
                  {sug}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>

    {/* Right section: Notifications + User Icon (mobile: flex right, desktop: col-span-2) */}
    <div className='flex items-center gap-2 md:gap-4 justify-end mr-2 md:mr-4 col-span-2'>
      <IoIosNotificationsOutline size={24} className='md:size-32' />
      <FaUserCircle size={24} className='md:size-32' />
    </div>
  </div>

  {/* Mobile search bar: below icon row only on mobile */}
  <div className='flex md:hidden justify-center mt-3'>
    <div className='w-full relative z-[1]'>
      <div className='flex items-center'>
        <input
          value={searchQuerry}
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setTimeout(() => setShowSuggestions(false), 400)}
          onChange={(e) => setSearchQuerry(e.target.value)}
          className='w-5/6 border placeholder:text-white hover:bg-[#3f3c3c] bg-[#282828] border-gray-800 rounded-l-full border-r-0 p-2 pl-3 text-sm'
          type='text'
          placeholder='Search'
        />
        <button
          title='Search'
          className='border border-gray-800 rounded-r-full bg-[#b6a3a327] p-2 px-3'
        >
          <CiSearch size={20} />
        </button>
      </div>
      {showSuggestions && (
        <div className='absolute bg-black text-white py-2 px-3 w-[90vw] cursor-pointer'>
          <ul>
            {suggestions.map((sug) => (
              <li
                key={sug}
                onClick={() => handleSuggestionClick(sug)}
                className='py-2 px-3 shadow-sm hover:bg-[#282828] rounded-xl'
              >
                {sug}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  </div>
</div>

)

}

export default Header
