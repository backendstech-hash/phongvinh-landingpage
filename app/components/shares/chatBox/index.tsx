"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PiX } from "react-icons/pi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { createThreadForUser, sendMessageToThread } from "@/app/services/discord/chatBot";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { pushNewMessage, setSessionId, setUsername } from "@/app/redux/slices/chat.slice";
import { VscSend } from "react-icons/vsc";
import TextareaAutosize from "react-textarea-autosize";

export default function ChatBox() {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [nameInput, setNameInput] = useState("");
    const [messageInput, setMessageInput] = useState("");
    const { sessionId, username, messages } = useAppSelector(store => store.chat);
    const containerMessageRef = useRef<HTMLDivElement>(null);

    const startChat = useCallback(async () => {
        if (!nameInput.length) return;
        // handleUserChat(name);
        const threadId = await createThreadForUser(nameInput);
        dispatch(setSessionId(threadId));
        dispatch(setUsername(nameInput));
        // Gửi tin nhắn mở đầu từ bot admin
        const sendResponse = await sendMessageToThread(threadId, `👋 Hello ${nameInput}, how can I help you today?`);
        console.log("sendResponse: ", sendResponse);
    }, [nameInput]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        // Nếu nhấn Enter mà không giữ Shift → gửi tin nhắn
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // Ngăn xuống dòng
            setMessageInput("");
            sendMessageHandle(messageInput)
        }
    }, [messageInput]);

    const sendMessageHandle = useCallback(async (message: string) => {
        if (!sessionId || !username) return;
        const el = containerMessageRef.current;
        if (el) {
            el.scrollTop = el.scrollHeight; // scroll xuống cuối cùng
        }
        dispatch(pushNewMessage({fromMe: true, message }))
        const sendRes = await sendMessageToThread(sessionId, `💬 ${username}: ${message}`);
        // console.log("sendRes: ", sendRes);
    }, [sessionId, username]);


    return <>
        <div
            className={`
                fixed z-10 right-2 bottom-2 flex flex-col
                bg-white border border-gray-300 shadow-xl rounded-md
                transition-all duration-300 overflow-hidden
                ${isOpen ? "w-[350px] h-[500px] max-sm:w-full max-sm:h-full max-sm:bottom-0 max-sm:right-0" : "w-[150px] h-[40px] !bg-blue-2 text-white"}
            `}
        >
            <div className="flex h-fit justify-between items-center border-b-solid border-b-[1px] border-b-blue-3/20 p-2 cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
                <p className="text-[16px] font-semibold font-poppins">Assistant</p>
                {isOpen ? <PiX className="w-6 h-6" /> : <IoChatboxEllipsesOutline className="w-5 h-5 text-white my-auto" />}
            </div>

            {isOpen && (
                <div className="flex-1 w-full flex flex-col items-center overflow-y-hidden">
                    {/* Nội dung chatbox */}
                    {
                        (!sessionId || !username) ?
                            <>
                                <div className="max-auto border-b-solid py-2 mt-20 border-b-[1px] border-b-gray-500 w-[50%]">
                                    <input value={nameInput} onChange={e => { if (e.target.value.length <= 20) { setNameInput(e.target.value) }}} className="w-full mx-auto border-none outline-none text-center text-[16px] font-poppins" placeholder="Nhập tên để bắt đầu"/>
                                </div>
                                <div className="text-white bg-blue-2 font-poppins px-3 rounded-md mt-2 font-semibold py-1 cursor-pointer hover:bg-blue-3" onClick={() => startChat()}>Chat</div>
                            </>
                            :
                            <>
                                <div className="flex-1 gap-2 w-full flex flex-col p-2 overflow-y-auto" ref={containerMessageRef}>
                                    {
                                        messages.map((i, index) => {
                                            if (i.fromMe) {
                                                return <div key={index} className="w-full flex justify-end">
                                                    <div className="max-w-[80%] break-words p-2 flex flex-col gap-1 rounded-lg bg-[#e5f1ff] shadow-md text-black">
                                                        <p className="font-poppins text-[16px]">{i.message}</p>
                                                    </div>
                                                </div>
                                            }
                                            return <div key={index} className="w-full">
                                                <div className="max-w-[80%] break-words p-2 flex flex-col gap-1 rounded-lg shadow-md bg-gray-100">
                                                    <p className="font-poppins text-[16px] text-black">{i.message}</p>
                                                </div>
                                            </div>
                                        })
                                    }
                                </div>
                                <div className="flex flex-col w-full h-fit p-2">
                                    
                                    <div className="flex w-full h-fit gap-1 border-y-gray-300">
                                        
                                        <TextareaAutosize
                                            minRows={1}
                                            maxRows={6}
                                            value={messageInput}
                                            onKeyDown={handleKeyDown}
                                            onChange={e => setMessageInput(e.target.value)}
                                            className="w-full resize-none p-2 border-[1px] border-gray-300 outline-none rounded-md font-poppins"
                                            placeholder="Type your message..."
                                        />
                                        <VscSend className="w-8 h-8 mt-auto mb-[5px] text-black" onClick={() => {
                                            setMessageInput("");
                                            sendMessageHandle(messageInput);
                                        }}/>
                                    </div>
                                </div>
                            </>
                    }
                </div>
            )}
        </div>
    </>
}