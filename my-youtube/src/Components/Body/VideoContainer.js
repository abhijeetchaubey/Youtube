import React, { useEffect, useState } from 'react';
import { YOUTUBE_VIDEOS_API } from '../../Utils/constant';
import VideoCard, { AdVideoCard } from './VideoCard';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function VideoContainer() {
    const isMenuOpen = useSelector(store => store.app.isMenuOpen);
    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YOUTUBE_VIDEOS_API);
        const json = await data.json();
        setVideos(json.items || []);
        console.log(json.items);
        
    };

    return (
        <div className={`grid ${isMenuOpen ? 'grid-cols-3' : 'grid-cols-4'} ml-2 overflow-y-auto w-fit bg-black h-screen`}>
            {videos[0] && <AdVideoCard info={videos[0]} />}
            {videos.map((video) => (
                <Link
                    to={{
                        pathname: "/watch",
                        search: `?v=${video.id}`, // Pass the video ID as a query parameter
                    }}
                    key={video.id}
                    state={{ videoData: video }} // Pass the full video data as state
                >
                    <VideoCard info={video} className={`${isMenuOpen ? 'w-96' : 'w-72'}`} />
                </Link>
            ))}
        </div>
    );
}

export default VideoContainer;
