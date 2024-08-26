import React from 'react';

function VideoCard({ info }) {
    if (!info) {
        return null; // Render nothing if info is not available
    }

    const { snippet, statistics } = info;

    // Use optional chaining and default values to prevent errors
    return (
        <div className='m-2 w-72 min-h-56 shadow-lg flex-4'>
            <img 
                className='rounded-lg'
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
                    {statistics?.viewCount ? `${statistics.viewCount / 1000}K views` : 'unavailable'}
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
