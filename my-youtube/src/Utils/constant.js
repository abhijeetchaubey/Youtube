const GOOGLE_API_KEY ="AIzaSyDEzXxevM13lV2QXSx-ATMt79fcilR4I7o";

export const OFFSET_LIVE_CHAT = 25;
export const YOUTUBE_VIDEOS_API ="https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key="+GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API ="http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const timeAgo=(date)=>{
        const currentDate = new Date();
        const pastDate = new Date(date);
        const diffInMs = currentDate - pastDate;
        
        const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
        const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));
        const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));
    
        if (diffInMinutes < 60) {
            return `${diffInMinutes} minute${diffInMinutes > 1 ? 's' : ''} ago`;
        } else if (diffInHours < 24) {
            return `${diffInHours} hour${diffInHours > 1 ? 's' : ''} ago`;
        } else {
            return `${diffInDays} day${diffInDays > 1 ? 's' : ''} ago`;
        }
    };

    export const formatNumber=(num)=>{
        if(num>=1000000){
            return (num/1000000).toFixed(1) + 'M'
        }
        else if(num>=1000){
            return (num/1000).toFixed(1) +'K'
        }
    }