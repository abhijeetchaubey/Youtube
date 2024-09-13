import React from 'react';
import { formatNumber, timeAgo } from '../../Utils/constant';

// import { useSelector } from 'react-redux';

function VideoCard({ info }) {
    if (!info) {
        return null; // Render nothing if info is not available
    }

    const { snippet, statistics } = info;
    // const isMenuOpen =useSelector(store=>store.app.isMenuOpen);

    // Use optional chaining and default values to prevent errors
    return (
        <div className={`m-2  min-h-56 shadow-lg `}>
            <img 
                className='rounded-lg w-full h-full'
                alt='' 
                src={snippet?.thumbnails?.medium?.url || 'unavailable'}
            />
            <ul className='p-4 pb-2 pt-0'>
                <li className='font-bold py-2'>
                    {snippet?.title?.length > 80 ? snippet?.title.substring(0, 65) + "..." : snippet?.title || 'unavailable'}
                </li>
                <li className='font-medium text-lg'>
                    {snippet?.channelTitle || 'unavailable'}
                </li>
                <li className='font-medium'>
                    {statistics?.viewCount ? formatNumber(statistics.viewCount) : 'unavailable'} 
                    <span className='text-center pl-1 inline '>•
                    </span>
                    <span className='pl-2 text-[#FFFAFA]'>{snippet?.publishedAt ? timeAgo(snippet.publishedAt) : 'Date unavailable'}
                    </span>
                </li>
            </ul>

        </div>
    );
}

// Higher Order Component 
export const AdVideoCard = ({ info }) => {
    return (
        <div className='p-1 m-1 border border-red-900'>
            <VideoCard info={info} />
        </div>
    );
};

export default VideoCard;
