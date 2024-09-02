import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../Utils/liveChatSlice";
import { generateRandomName, makeRandomMessage } from "../../Utils/helper";

// API Polling 

const LiveChat = () => {
    const [LiveMessage, setLiveMessage]= useState("")

    
    const dispatch = useDispatch();
    const chatContainerRef = useRef(null); // Ref to access the chat container

    const ChatMessages = useSelector(store => store.chat.messages);
    
    useEffect(() => {
        const interval = setInterval(() => {
            // API Polling;
            dispatch(addMessage({
                name: generateRandomName(),
                message: makeRandomMessage(20)
            }));
        }, 1500);

        return () => clearInterval(interval);
    }, [dispatch]);

    useEffect(() => {
        // Scroll to the bottom when a new message is added
        if (chatContainerRef.current) {
            chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
        }
    }, [ChatMessages]);

    return (
        <>
        <div className="w-full h-[600px] ml-2 p-2 border border-black bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
            <div ref={chatContainerRef} >
            {ChatMessages.map((c, index) => (
                <ChatMessage key={index} name={c.name} message={c.message} />
            ))}
            </div>
        </div>
        <form className="w-full p-2 ml-2 border border-black flex " onSubmit={(e)=>{
            e.preventDefault()
            dispatch(addMessage({
                name:"Abhijeet",
                message:LiveMessage
            }))
            setLiveMessage("");
            
        }}>
            <input 
            value={LiveMessage}
            onChange={(e)=>{
                setLiveMessage(e.target.value)
            }}
            className="w-96"
            type="text"/>
            <button type="submit" className="px-2 mx-2 bg-green-200">send</button>
        </form>
        </>

    );
}

export default LiveChat;
