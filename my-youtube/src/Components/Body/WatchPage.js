import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenu } from "../../Utils/appSlice";
import { useSearchParams, useLocation } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";
import LiveChat from "./LiveChat";
import { formatNumber, timeAgo } from "../../Utils/constant";
import { MdOutlineSubscriptions } from "react-icons/md";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { BiDislike } from "react-icons/bi";
import {
  RiShareForwardLine,
  RiArrowDropDownLine,
  RiArrowDropUpLine,
} from "react-icons/ri";

function WatchPage() {
  const [showDescription, setShowDescription] = useState(false);
  const [like, setLike] = useState(true);
  const [showChat, SetOpenChat] = useState(false);
  const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  const location = useLocation();
  const { videoData } = location.state || {};

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  if (!videoData) return <div>Loading...</div>;

  const handleDescriptionBox = () => setShowDescription(!showDescription);
  const handleLikeIcon = () => setLike(!like);
  const toggleChat = () => SetOpenChat(!showChat);

  return (
    <div className="px-2 sm:px-4 md:px-10 pt-2 w-full">
      <div className="flex flex-col lg:flex-row gap-4">
        {/* Video and Metadata */}
        <div className="w-full">
          {/* Responsive YouTube iframe */}
          <div className="relative w-full pt-[56.25%]">
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-lg"
              src={`https://www.youtube.com/embed/${videoId}`}
              title={videoData.snippet.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>

          <h1 className="pt-4 text-2xl sm:text-3xl p-2">
            {videoData.snippet.title}
          </h1>

          {/* Channel, Like, Share, Subscribe */}
          <div className="flex flex-col gap-4 mt-4">
            {/* Row 1: Channel Info + Subscribe (same row) */}
            <div className="flex flex-row sm:flex-row justify-between items-start sm:items-center gap-4">
              <div className="flex items-center gap-2">
                <MdOutlineSubscriptions size={28} />
                <p className="font-bold text-lg sm:text-xl">
                  {videoData.snippet.channelTitle}
                </p>
              </div>
              <button className="rounded-full bg-white text-black font-bold py-1 px-4">
                Subscribe
              </button>
            </div>

            {/* Row 2: Like/Dislike + Share */}
            <div className="flex flex-row sm:flex-row gap-4 sm:justify-start">
              {/* Like/Dislike */}
              <div className="flex items-center rounded-full bg-[#282828] gap-1 px-4 py-2 hover:bg-[#222020] w-fit">
                <p className="cursor-pointer" onClick={handleLikeIcon}>
                  {like ? (
                    <AiOutlineLike size={20} />
                  ) : (
                    <AiFillLike size={20} />
                  )}
                </p>
                <p>{formatNumber(videoData.statistics?.likeCount)}</p>
                <p className="border-l-2 pl-2 ml-2">
                  <BiDislike size={20} />
                </p>
              </div>

              {/* Share */}
              <div className="flex items-center rounded-full bg-[#282828] gap-2 pl-4 py-2 px-3 hover:bg-[#222020] w-fit">
                <RiShareForwardLine size={20} />
                <p>Share</p>
              </div>
            </div>
          </div>

          {/* Description & Tags */}
          <div className="flex flex-wrap gap-2 mt-8 bg-[#282828] rounded-xl p-4 w-full break-words">
            <h1 className="text-lg sm:text-xl font-bold">
              {formatNumber(videoData.statistics.viewCount)} views
            </h1>
            <h1 className="text-lg sm:text-xl font-bold">
              {timeAgo(videoData.snippet?.publishedAt)}
            </h1>

            {videoData?.snippet?.tags?.map((tag, index) => (
              <p key={index} className="text-sky-400">{`#${tag}`}</p>
            ))}

            <div className="w-full mt-2">
              {!showDescription && (
                <span
                  onClick={handleDescriptionBox}
                  className="text-sky-700 cursor-pointer"
                >
                  Show More...
                </span>
              )}
              {showDescription && (
                <>
                  <p className="whitespace-pre-wrap mt-2">
                    {videoData.snippet.localized.description}
                  </p>
                  <p
                    onClick={handleDescriptionBox}
                    className="text-sky-700 cursor-pointer mt-2"
                  >
                    Show Less...
                  </p>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Live Chat */}
        <div className="w-full max-w-full lg:max-w-[400px]">
          <h1 className="ml-2 rounded-lg rounded-b-none border border-white w-full p-4 font-bold text-lg sm:text-xl">
            <div className="flex items-center justify-between">
              <p>Top Chat</p>
              <p className="cursor-pointer">
                {showChat ? (
                  <RiArrowDropUpLine onClick={toggleChat} size={24} />
                ) : (
                  <RiArrowDropDownLine onClick={toggleChat} size={24} />
                )}
              </p>
            </div>
          </h1>
          <LiveChat className={`${showChat ? "" : "hidden"} w-full`} />
        </div>
      </div>

      {/* Comments */}
      <div className="mt-6">
        <CommentsContainer />
      </div>
    </div>
  );
}

export default WatchPage;
