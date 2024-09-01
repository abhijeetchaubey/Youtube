import { useEffect } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../Utils/liveChatSlice";

// API Polling 

const LiveChat=()=>{

    const dispatch = useDispatch()

    const ChatMessages = useSelector(store=>store.chat.messages)
    
    useEffect(()=>{
                const i=setInterval(()=>{
            // API Polling;
            dispatch(addMessage ({
                name:"Abhijeet",
                message:"Bhai kb tak ban jayega"
            }))
    
            
        },1000);

        return ()=>clearInterval(i);
    },[addMessage])

    return(
        <div className=" w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg">
            <h1>Top Chat</h1> 
            {
            ChatMessages.map((c,index)=>
            <ChatMessage key={index} name={c.name} message={c.message}/>
            )}
        </div>
    )
}
export default LiveChat;