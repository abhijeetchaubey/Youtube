import React from 'react'
import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { MdHistory } from "react-icons/md";
import { MdOutlineWatchLater } from "react-icons/md";
import { AiOutlineLike } from "react-icons/ai";
import { MdOutlinePlaylistPlay } from "react-icons/md";
import { HiDownload } from "react-icons/hi";
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import SidebarClosed from './SideBar_close';
function Sidebar() {
    const isMenuOpen =useSelector(store=>store.app.isMenuOpen);

    // Early Return
    if(!isMenuOpen) return <SidebarClosed/>;
    return (
        <div className=' p-5 px-4  pr-6 w-fit h-screen  bg-black text-white '>
            <section className='border-b-2 border-black mb-4'>
                <Link to={"/"}>
                    <div className='flex gap-x-2 items-center pb-2 '>
                        <MdHomeFilled size={28} />
                        <h1 className=' text-2xl'>Home</h1>
                    </div>
                </Link>
                <div className='flex gap-2 items-center pb-2'>
                <SiYoutubeshorts size={28} />
                <h1 className=' text-2xl'>Shorts</h1>

                </div>
                <div className='flex gap-2 items-center pb-2'>
                <MdOutlineSubscriptions size={28}/>
                <h1 className='text-2xl'>Subscription</h1>
                </div>
                <div className='flex gap-2 items-center pb-4 '>
                    <SiYoutubemusic size={28} />
                    <h1 className='text-2xl'>YouTube Music</h1>

                </div>
                
            </section>
            <section className='border-b-2 border-black'>
                <div>
                    <h1 className='text-3xl pb-2'>You</h1>
                </div>
                <div className='flex gap-x-2 items-center pb-2 '>
                    <MdHistory size={28}/>
                    <h1 className=' text-2xl'>History</h1>
                </div>
                <div className='flex gap-x-2 items-center pb-2 '>
                    <MdOutlinePlaylistPlay size={28}/>
                    <h1 className=' text-2xl'>History</h1>

                </div>
                <div className='flex gap-2 items-center pb-2'>
                <MdOutlineWatchLater size={28} />
                <h1 className=' text-2xl'>Watch Later</h1>

                </div>
                <div className='flex gap-2 items-center pb-2'>
                < AiOutlineLike size={28}/>
                <h1 className='text-2xl'>Liked Videos</h1>
                </div>
                <div className='flex gap-2 items-center pb-2 '>
                    <HiDownload size={28} />
                    <h1 className='text-2xl'>Download</h1>

                </div>
                
            </section>
        </div>
    )
}

export default Sidebar
