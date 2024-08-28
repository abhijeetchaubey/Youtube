import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../../Utils/appSlice';
import {  useSearchParams } from 'react-router-dom';
import { YOUTUBE_COMMENTS_API } from '../../Utils/constant';
import CommentsContainer from './CommentsContainer';

function WatchPage() {

    const [searchParams] =useSearchParams()
    // console.log(searchParams.get("v"));
    
    const dispatch =useDispatch();
    useEffect(()=>{
        dispatch(closeMenu())
        getComments()
    },[])

    const getComments = async ()=>{
        try {
            const data = await fetch(YOUTUBE_COMMENTS_API);
            const json = await data.json()
            console.log("comments",json);
        } catch (error) {
            console.log("Failed to fetch comments:",error);
            
        }
        
    }

    return (
        <div className='px-5 pl-10 pt-2 '>
            <div>
                <iframe 
                width="1200" 
                height="600" 
                src={"https://www.youtube.com/embed/"+searchParams.get("v")} 
                title="YouTube video player" 
                frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                allowFullScreen>
                </iframe>
            </div>
            <div>
                <CommentsContainer/>
            </div>
        </div>
    )
}

export default WatchPage
