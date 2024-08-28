import React from "react"
import { FaUserCircle } from "react-icons/fa";

const Comments =({data})=>{
    const {name,text}=data;
    return(
        <div>
            <div className="flex gap-3 shadow-lg bg-gray-100 p-2 rounded-lg items-center">
                <div>
                    <FaUserCircle size={32}/>
                </div>
                <div>
                <p>{name}</p>
                <p>{text}</p>
                {/* <p>{replies}</p> */}
                </div>
            </div>

        </div>
    )
}

export default Comments;