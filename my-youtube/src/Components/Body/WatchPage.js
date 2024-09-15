import React, { useEffect,useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../../Utils/appSlice';
import { useSearchParams, useLocation } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
import { formatNumber, timeAgo } from '../../Utils/constant';
import {MdOutlineSubscriptions} from 'react-icons/md';
import { AiOutlineLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import { RiShareForwardLine } from "react-icons/ri";
import { AiFillLike } from "react-icons/ai";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { useSelector } from 'react-redux';


function WatchPage() {
    const [showDescription,setShowDescription] = useState()
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    const [searchParams] = useSearchParams();
    const videoId = searchParams.get("v");

    const [like,setLike]= useState(true)
    
    const [showChat,SetOpenChat]=useState(false)

    const handleDescriptionBox=()=>{
        setShowDescription(!showDescription)
    }
    const handleLikeIcon=()=>{
        setLike(!like)
    }
    const toggleChat=()=>{
        SetOpenChat(!showChat)
    }
    
    const location = useLocation();
    const { videoData } = location.state || {};  // Get the passed video data from Link state
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch]);

    if (!videoData) {
        return <div>Loading...</div>;
    }

    return (
        <div className='px-5 pl-10 pt-2 w-fit'>
            <div className='flex gap-4'>
                <div>
                    
                    <iframe
                        width={isMenuOpen ?"870":"900"}
                        height={isMenuOpen?"650":"600"}
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title={videoData.snippet.title}  // Use video title
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                    <div>
                        <h1 className='pt-4 text-4xl p-2'>{videoData.snippet.title}</h1>
                        <br/>
                        <div className='flex justify-around items-center'>
                            <div className='flex gap-2'>
                            <p>
                                <MdOutlineSubscriptions size={28} />
                            </p>
                            <p className='font-bold text-xl'>{videoData.snippet.channelTitle}</p>
                            </div>
                            <button className=' rounded-full bg-white text-black font-bold p-2 text-center'>Subscribe</button>
                            <div className='flex items-center rounded-full bg-[#282828] gap-1 p-2 w-[150px] justify-around hover:bg-[#222020]'>
                                <p className='cursor-pointer'>
                                    {
                                        like ? <AiOutlineLike size={20}  onClick={handleLikeIcon}/> : <AiFillLike onClick={handleLikeIcon} size={20} />
                                    }
                                </p>
                                <p>
                                {formatNumber(videoData.statistics?.likeCount)}
                                </p>
                                <p className='border-l-2 p-2'>
                                <BiDislike size={20} />
                                </p>
                            </div>
                            <div className='flex items-center rounded-full bg-[#282828] gap-4 pl-4 p-2 w-[100px]  hover:bg-[#222020]'>
                            <p >
                                <RiShareForwardLine size={20}/>
                            </p>
                            <p>Share</p>
                            </div>
                            
                        </div>
                        <div className='flex flex-wrap gap-x-2 mt-8 bg-[#282828] rounded-xl p-4 overflow-y-auto w-fit  h-fit'>
                        <h1 className='text-xl font-bold'>{formatNumber(videoData.statistics.viewCount) +" views"}</h1>
                            <h1 className='text-xl font-bold inline'>{timeAgo(videoData.snippet?.publishedAt)}</h1>
                            <br/>
                            {videoData?.snippet?.tags?.map((tag, index) => (
                                    <p key={index} className='text-sky-400'>{`#${tag}`}</p>
                                    
                                ))}
                            <div>
                                <span 
                                onClick={handleDescriptionBox}
                                className='text-sky-700 cursor-pointer'>
                                    {showDescription ? "":"show More..."}
                                </span>                                
                                <br/>
                                {showDescription && videoData.snippet.localized.description}
                                <p 
                                onClick={handleDescriptionBox}
                                className='text-sky-700 cursor-pointer'>{showDescription ? "Show Less...":""}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full'>
                    <h1 className='ml-2 rounded-lg rounded-b-none mt-0 border border-white w-[400px] p-4 font-bold text-xl'>
                        <div className='flex items-center'>
                        <p className='font-bold'>Top Chat</p>
                        <p className='cursor-pointer'>{showChat ?<RiArrowDropUpLine onClick={toggleChat} size={24} />:<RiArrowDropDownLine size={24} onClick={toggleChat}/>}</p>

                        </div>
                    </h1>
                    <LiveChat className={`${showChat ?``:'hidden'}`}/>
                </div>
            </div>
            <div>
                <CommentsContainer />
            </div>
        </div>
    );
}

export default WatchPage;
