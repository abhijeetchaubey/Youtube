import { useEffect, useRef, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../../Utils/liveChatSlice";
import { generateRandomName, makeRandomMessage } from "../../Utils/helper";

// API Polling 

const LiveChat = ({className}) => {
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
<div className={`w-[400px] h-[600px] ml-2 p-2 pt-4 border border-white border-b-0 rounded-t-none rounded-b-none bg-black text-white rounded-lg overflow-y-scroll flex flex-col-reverse ${className}`}>
            <div ref={chatContainerRef} >
            {ChatMessages.map((c, index) => (
                <ChatMessage key={index} name={c.name} message={c.message} />
            ))}
            </div>
        </div>
        <form className="w-full  ml-2  border-black flex " onSubmit={(e)=>{
            e.preventDefault()
            dispatch(addMessage({
                name:"Abhijeet",
                message:LiveMessage
            }))
            setLiveMessage("");
            
        }}>
            <div className={`border border-white  w-[400px] h-[70px] ml-0 rounded-lg rounded-t-none ${className}`}>
            <input 
            value={LiveMessage}
            onChange={(e)=>{
                setLiveMessage(e.target.value)
            }}
            className="w-[300px] p-2 rounded-full bg-[#282828] text-white m-2 ml-8"
            placeholder="Chat as Subscriber..."
            type="text"/>
            {/* <button type="submit" className="px-2 mx-2 bg-green-200">send</button> */}
            </div>
        </form>
        </>

    );
}

export default LiveChat;
