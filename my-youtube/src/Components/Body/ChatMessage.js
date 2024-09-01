import { FaUserCircle } from "react-icons/fa";

const ChatMessage=({name,message})=>{
    return(
        <div>
            <div className="flex  mt-2 items-center">
            <FaUserCircle size={32}/>
            <span className="font-semibold px-2 ">{name}</span>
            <p>{message}</p>
            </div>
        </div>

    )
}

export default ChatMessage;