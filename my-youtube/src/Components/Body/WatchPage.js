import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../Utils/appSlice';
import {  useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';
function WatchPage() {

    const [searchParams] =useSearchParams()
    // console.log(searchParams.get("v"));
    
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
    },[])

    

    return (
        <div className='px-5 pl-10 pt-2  w-full'>
            <div className='flex'>
                <div>
                    <iframe 
                    width="1100" 
                    height="600" 
                    src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
                    title="YouTube video player" 
                    frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen>
                    </iframe>
                </div>
                <div className='w-full'>
                    <LiveChat/>
                </div>
            </div>
            <div>
                <CommentsContainer/>
            </div>
        </div>
    )
}

export default WatchPage
