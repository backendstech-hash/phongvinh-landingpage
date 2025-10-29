"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { PiX } from "react-icons/pi";
import { IoChatboxEllipsesOutline } from "react-icons/io5";
import { createThreadForUser, sendFormToThread, sendMessageToThread } from "@/app/services/discord/chatBot";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { setSessionId, setUsername } from "@/app/redux/slices/chat.slice";
import { VscSend } from "react-icons/vsc";
import TextareaAutosize from "react-textarea-autosize";
import { pushNewMessage } from "@/app/redux/slices/messageChat.slice";
import ReusableForm, { FormValues } from "./components/formInfo";
import React from "react";

export default function ChatBox() {
    const dispatch = useAppDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [nameInput, setNameInput] = useState("");
    const [messageInput, setMessageInput] = useState("");
    const { sessionId, username } = useAppSelector(store => store.chat);
    const { messages, adminIsOnline } = useAppSelector(store => store.messageChat);
    const containerMessageRef = useRef<HTMLDivElement>(null);

    const timeout1Ref = useRef<NodeJS.Timeout>();
    const timeout2Ref = useRef<NodeJS.Timeout>();
    const [sentFirstBotMessage, setSentFirstBotMessage] = useState(false); // 👈 để biết có cần clear timeout không


    useEffect(() => {
        if (!messages || messages.length === 0 || adminIsOnline) return;

        const lastMessage = messages[messages.length - 1];
        const isBotMessage = /\*\*\[BOT AUTO<7>\]\*/.test(lastMessage.message);

        // Nếu là tin bot thì bỏ qua
        if (isBotMessage) return;

        // Reset lại cờ
        setSentFirstBotMessage(false);

        // Clear timeout cũ
        clearTimeout(timeout1Ref.current);
        clearTimeout(timeout2Ref.current);

        // Sau 3 phút gửi tin 1
        timeout1Ref.current = setTimeout(() => {
            sendMessageHandle("**[BOT AUTO<7>]** Quý khách cần hỗ trợ gì thêm không ạ?");
            setSentFirstBotMessage(true);
        }, 3 * 60 * 1000); // test: 3s (thực tế 3 * 60 * 1000)

        // Cleanup khi user gửi tin mới
        return () => clearTimeout(timeout1Ref.current);
    }, [messages, adminIsOnline]);

    // useEffect 2: sau khi tin 1 gửi ra -> tạo timeout 2
    useEffect(() => {
        if (!sentFirstBotMessage || adminIsOnline) return;
        console.log("chạy")
        // Khi bot đã gửi tin 1 -> setup timeout gửi tin 2
        timeout2Ref.current = setTimeout(() => {
            sendMessageHandle("**[BOT AUTO<7>]** Cảm ơn Quý khách đã liên hệ công ty.");
            setSentFirstBotMessage(false); // reset để tránh lặp
        }, 5 * 60 * 1000); // test: 5s (thực tế 5 * 60 * 1000)

        return () => clearTimeout(timeout2Ref.current);
    }, [sentFirstBotMessage, adminIsOnline]);

    useEffect(() => {
        if (adminIsOnline) {
            clearTimeout(timeout1Ref.current);
            clearTimeout(timeout2Ref.current);
        }
    }, [adminIsOnline])




    useEffect(() => {
        if (isOpen) {
            const el = containerMessageRef.current;
            if (el) {
                el.scrollTop = el.scrollHeight; // scroll xuống cuối cùng
            }
        }
    }, [isOpen])

    // ngăn scroll body khi mở box chat trên mobile
    useEffect(() => {
        if (!isOpen) {
            document.body.style.overflow = "";
            return;
        }

        // Chỉ áp dụng khi màn hình nhỏ hơn 640px (Tailwind `sm`)
        if (window.matchMedia("(max-width: 640px)").matches) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "";
        }

        return () => {
            document.body.style.overflow = "";
        };
    }, [isOpen]);

    const startChat = useCallback(async () => {
        if (!nameInput.length) return;
        // handleUserChat(name);
        const threadId = await createThreadForUser(nameInput);
        dispatch(setSessionId(threadId));
        dispatch(setUsername(nameInput));
        // Gửi tin nhắn mở đầu từ bot admin
        const sendResponse = await sendMessageToThread(threadId, `👋 tôi cần hỗ trợ!`, nameInput);
        console.log("sendResponse: ", sendResponse);
    }, [nameInput]);

    const handleKeyDown = useCallback((e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (!messageInput.length) return;
        // Nếu nhấn Enter mà không giữ Shift → gửi tin nhắn
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault(); // Ngăn xuống dòng
            setMessageInput("");
            sendMessageHandle(messageInput)
        }
    }, [messageInput]);

    const sendMessageHandle = useCallback(async (message: string, replyForBotId?: number, optionId?: number) => {
        if (!sessionId || !username) return;
        dispatch(pushNewMessage({fromMe: true, message }))
        
        const sendRes = await sendMessageToThread(sessionId, message, username, replyForBotId, optionId);
        // console.log("sendRes: ", sendRes);
    }, [sessionId, username]);

    useEffect(() => {
        const el = containerMessageRef.current;
        if (el) {
            el.scrollTop = el.scrollHeight; // scroll xuống cuối cùng
        }
    }, [messages])

    const handleSubmit = useCallback(async (data: FormValues) => {
        if (!sessionId) return;
        console.log("Form submitted:", data);
        const formData = new FormData();
        formData.append("productName", data.productName);
        formData.append("quantity", data.quantity.toString());
        formData.append("address", data.address);
        formData.append("image", data.image[0]); // gửi file thật
        formData.append("threadId", sessionId);

    
        const res = await sendFormToThread(formData);
        console.log("res: ", res);
    }, [sessionId]);


    return <>
        {
            isOpen ? 
                <div
                    className={`
                        fixed z-10 right-2 bottom-2 flex flex-col
                        bg-white border border-gray-300 shadow-xl rounded-md
                        transition-all duration-300 overflow-hidden
                        w-[350px] h-[500px] max-sm:w-full max-sm:h-full max-sm:bottom-0 max-sm:right-0
                    `}
                >
                    <div className="flex h-fit justify-between items-center border-b-solid border-b-[1px] border-b-blue-3/20 p-2 cursor-pointer" onClick={() => setIsOpen(false)}>
                        <p className="text-[16px] font-semibold font-poppins flex gap-1">Assistant<div className={`text-sm my-auto font-poppins font-light`}>({adminIsOnline ? 'online' : 'offline'})</div></p>
                        <PiX className="w-6 h-6" />
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
                                                messages.filter(i => i.message !== "").map((i, index) => {
                                                    const input = i.message;
                                                    const regex = /\*\*\[BOT AUTO<(\d+)>\]\*\*/;

                                                    const match = input.match(regex);

                                                    let fullTag;
                                                    let id;
                                                    let message;

                                                    if (match) {
                                                        fullTag = match[0]; // 👉 "**[BOT AUTO<123>]**"
                                                        id = match[1];      // 👉 "123"
                                                        message = input.replace(regex, "").trim(); // 👉 "Xin chào, đây là tin nhắn!"
                                                        // console.log({ fullTag, id, message });
                                                    }

                                                    if (i.fromMe && !fullTag) {
                                                        return <div key={index} className="w-full flex justify-end">
                                                            <div className="max-w-[80%] w-fit break-words p-2 flex flex-col gap-1 rounded-lg bg-[#e5f1ff] shadow-md text-black">
                                                                <p className="font-poppins text-[16px]">{
                                                                        i.message.replace(/\*\*.*?\*\*/g, '').split('\n').map((text, index) => (
                                                                            <React.Fragment key={index}>
                                                                                {text}
                                                                                <br />
                                                                            </React.Fragment>
                                                                        ))
                                                                    }</p>
                                                            </div>
                                                        </div>
                                                    }
                                                    return <div key={index} className="w-full">
                                                        <div className="max-w-[80%] w-fit break-words p-2 flex flex-col gap-1 rounded-lg shadow-md bg-gray-100">
                                                            <p className="font-poppins text-[16px] text-black">{
                                                                        i.message.replace(/\*\*.*?\*\*/g, '').split('\n').map((text, index) => (
                                                                            <React.Fragment key={index}>
                                                                                {text}
                                                                                <br />
                                                                            </React.Fragment>
                                                                        ))
                                                                    }</p>
                                                            {
                                                                (id && parseInt(id) == 1) && 
                                                                    <div className="flex flex-col gap-1">
                                                                        <p className="p-2 bg-blue-100 cursor-pointer hover:bg-blue-200 rounded-lg" onClick={() => sendMessageHandle('Tư vấn sản phẩm', 1, 1)}>Tư vấn sản phẩm</p>
                                                                        <p className="p-2 bg-blue-100 cursor-pointer hover:bg-blue-200 rounded-lg" onClick={() => sendMessageHandle('Báo giá/Đặt hàng', 1, 2)}>Báo giá/Đặt hàng</p>
                                                                        <p className="p-2 bg-blue-100 cursor-pointer hover:bg-blue-200 rounded-lg" onClick={() => sendMessageHandle('Liên hệ với nhân viên', 1, 3)}>Liên hệ với nhân viên</p>
                                                                    </div>
                                                            }
                                                            {
                                                                (id && parseInt(id) == 2) && 
                                                                    <div className="flex flex-col gap-1">
                                                                        <p className="p-2 bg-blue-100 cursor-pointer hover:bg-blue-200 rounded-lg" onClick={() => sendMessageHandle('Đèn UV', 2, 1)}>Đèn UV</p>
                                                                        <p className="p-2 bg-blue-100 cursor-pointer hover:bg-blue-200 rounded-lg" onClick={() => sendMessageHandle('Túi/ cốc lọc', 2, 2)}>Túi/ cốc lọc</p>
                                                                        <p className="p-2 bg-blue-100 cursor-pointer hover:bg-blue-200 rounded-lg" onClick={() => sendMessageHandle('Màng RO/UE', 2, 3)}>Màng RO/UE</p>
                                                                        <p className="p-2 bg-blue-100 cursor-pointer hover:bg-blue-200 rounded-lg" onClick={() => sendMessageHandle('Vỏ Màng', 2, 4)}>Vỏ Màng</p>
                                                                        <p className="p-2 bg-blue-100 cursor-pointer hover:bg-blue-200 rounded-lg" onClick={() => sendMessageHandle('Lưới Lọc/ Chụp Lọc', 2, 5)}>Lưới Lọc/ Chụp Lọc</p>
                                                                        <p className="p-2 bg-blue-100 cursor-pointer hover:bg-blue-200 rounded-lg" onClick={() => sendMessageHandle('Khác/ chưa rõ cần tư vấn', 2, 6)}>Khác/ chưa rõ cần tư vấn</p>
                                                                    </div>
                                                            }
                                                            {
                                                                (id && parseInt(id) == 4) && 
                                                                    <ReusableForm onSubmit={handleSubmit}/>
                                                            }
                                                            {
                                                                (id && parseInt(id) == 5) && 
                                                                    <div className="flex flex-col gap-1">
                                                                        <p className="p-2 bg-blue-100 cursor-pointer hover:bg-blue-200 rounded-lg" onClick={() => sendMessageHandle('Có, giữ hàng.', 5, 1)}>Có, giữ hàng.</p>
                                                                        <p className="p-2 bg-blue-100 cursor-pointer hover:bg-blue-200 rounded-lg" onClick={() => sendMessageHandle('Chưa cần, đang tham khảo', 5, 2)}>Chưa cần, đang tham khảo</p>
                                                                    </div>
                                                            }
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
                :
                <div className="cursor-pointer w-fit gap-3 h-[40px] !bg-blue-2 rounded text-white flex p-2 justify-between fixed z-10 right-2 bottom-2" onClick={() => setIsOpen(true)}>
                    <IoChatboxEllipsesOutline className="w-6 h-6 text-white my-auto" />
                    <p className="text-[16px] font-semibold font-poppins my-auto">Assistant</p>
                </div>
        }
    </>
}