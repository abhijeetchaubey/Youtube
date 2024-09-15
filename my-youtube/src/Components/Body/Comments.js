import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import CommentsList from "./CommentsList";

const Comments = ({ data }) => {
    const { name, text, replies } = data;
    const [showReplies, setShowReplies] = useState(false);

    // Toggle replies visibility
    const handleReplies = () => {
        setShowReplies(!showReplies); // Toggle the visibility of replies
    };

    return (
        <div className="mb-4 ">
            <div className="flex gap-3 shadow-lg bg-[#282828] text-white p-2  rounded-lg items-center w-[70%]">
                <FaUserCircle size={32} />
                <div>
                    <p className="font-semibold">{name}</p>
                    <p>{text}</p>
                    {replies && replies.length > 0 && (
                        <button
                            className="text-blue-800 mt-2 hover:bg-blue-300 rounded-full p-1"
                            onClick={handleReplies}
                        >
                            {showReplies ? "Hide Replies" : "Show Replies"}
                        </button>
                    )}
                </div>
            </div>

            {/* Conditionally render replies */}
            {showReplies && replies && (
                <div className="ml-6 mt-3">
                    <CommentsList info={replies} />
                </div>
            )}
        </div>
    );
};

export default Comments;
