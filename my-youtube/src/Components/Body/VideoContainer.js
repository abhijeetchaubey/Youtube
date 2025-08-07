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
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 ml-2 overflow-y-auto w-full bg-black h-full`}>
            {videos[0] && <AdVideoCard info={videos[0]} />}
            {videos.map((video) => (
                <Link
                    to={{
                        pathname: "/watch",
                        search: `?v=${video.id}`,
                    }}
                    key={video.id}
                    state={{ videoData: video }}
                >
                    <VideoCard info={video} className="w-full" />
                </Link>
            ))}
        </div>
    );
}

export default VideoContainer;
