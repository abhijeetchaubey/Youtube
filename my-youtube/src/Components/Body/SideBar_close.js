import { MdHomeFilled } from "react-icons/md";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { SiYoutubemusic } from "react-icons/si";
import { MdDownload } from "react-icons/md";

const SidebarClosed =()=>{
    return(
        <div className="h-screen w-[100px] flex-col items-center bg-black text-white">
            <div className="mb-8 mt-2 ">
                <div className="px-8">
                    <MdHomeFilled size={28} />
                </div>
                <div className="px-6">
                    Home
                </div>
            </div>
            <div className="mb-8">
            <div className="px-8">
                <SiYoutubeshorts size={28} />
            </div>
            <div className="px-6">Shorts</div>
            </div>
            <div className="mb-8">
                <div className="px-8">
                <MdOutlineSubscriptions size={28} />
                </div>
            <div className="px-2">Subscription</div>
            </div>
            <div className="mb-8">
                <div className="px-8">
                    <SiYoutubemusic size={28} />
                </div>
            <div className="px-4">YouTube Music</div>
            </div>
            <div className="mb-8 ">
                <div className="px-8">
                    <MdDownload size={28} />
                </div>
            <div className="px-4">Download</div>
            </div>
        </div>
    )
}

export default SidebarClosed;