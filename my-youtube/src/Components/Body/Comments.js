import React from "react"
import { FaUserCircle } from "react-icons/fa";
import CommentsList from "./CommentsList";

const Comments =({data})=>{
    const {name,text,replies}=data;
    return(
        <div>
            <div className="flex gap-3 shadow-lg bg-gray-100 p-2 rounded-lg items-center">
                <div>
                    <FaUserCircle size={32}/>
                </div>
                <div>
                <p>{name}</p>
                <p>{text}</p>
                <CommentsList info={replies}/>
                </div>
            </div>

        </div>
    )
}

export default Comments;