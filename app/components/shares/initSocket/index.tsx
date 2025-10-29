"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { setSessionId, setUsername } from "@/app/redux/slices/chat.slice";
import { countMember, pushNewMessage, pushNewMessages, setAdminOnline, setMemberId } from "@/app/redux/slices/messageChat.slice";
import { useCallback, useEffect, useRef } from "react";
import { io } from "socket.io-client";

export default function InitSocket() {
    const dispatch = useAppDispatch();
    const { sessionId, username } = useAppSelector(store => store.chat);
    const { memberId } = useAppSelector(store => store.messageChat);
    const memberIdRef = useRef(memberId);

    useEffect(() => { memberIdRef.current = memberId; }, [memberId]);

    const demo = useCallback((adminId: string) => {
        console.log("memberId ======: ", memberId)
        console.log("adminId: ======== ", adminId);
        
    }, []);

    // useEffect(() => {
    //     if (!sessionId) return;

    //     // ✅ tạo socket mới khi có sessionId
    //     const socket = io("http://localhost:3001", {
    //         transports: ["websocket"], // 👈 giúp ổn định hơn (bỏ polling)
    //     });

    //     socket.on("connect", () => {
    //         console.log("✅ Connected:", socket.id);

    //         // Tham gia room theo thread/sessionId
    //         console.log("sessionId join thread: ", sessionId)
    //         socket.emit("join_thread", sessionId, username);
    //     });

    //     // Lắng nghe tin nhắn Discord gửi về
    //     const handleMessage = (data: any) => {
    //         console.log("📩 New message in thread:", data);
    //         dispatch(pushNewMessage({fromMe: data.fromMe ? data.fromMe : false, message: data.content}));
    //     };

    //     const handleThreadNotfound = (data: any) => {
    //         console.log("📩 Thread not found:", data);
    //         dispatch(setUsername(undefined));
    //         dispatch(setSessionId(undefined));
    //     }

    //     const handleThreadOldMessages = (data: {messages: [], memberId: {id: string, status: "offline" | "online"}[]}) => {
    //         if (data.memberId.filter((i: any) => i.status == "online").length) { 
    //             dispatch(setAdminOnline(true)); 
    //         } 
    //         dispatch(countMember(memberId.length)); 
    //         console.log("get old ==========: ", data.memberId.map(i => i.id));
    //         dispatch(setMemberId(data.memberId.map(i => i.id)))

    //         dispatch(pushNewMessages(
    //             data.messages.map((i: { author: string, message: string }) => {
    //                 if (i.author == "phongving-landing-page-chat") {
    //                     return {
    //                         fromMe: true,
    //                         message: i.message
    //                     }
    //                 }
    //                 return {
    //                     fromMe: false,
    //                     message: i.message
    //                 }
    //             })
    //         ))
    //     }

    //     socket.on("thread_member_count", (data) => { 
    //         console.log("data.memberCount: ", data.memberCount);
    //         if (data.memberCount) { 
    //             dispatch(setAdminOnline(true)); 
    //         } 
    //         dispatch(countMember(data.memberCount)); 
    //         dispatch(setMemberId(data.memberId)) 
    //     });

    //     socket.on("discord_message", handleMessage);

    //     socket.on("thread_notfound", handleThreadNotfound);

    //     socket.on("thread_old_messages", handleThreadOldMessages);

    //     socket.on("admin_online", (data: { adminId: number }) => {
    //         if ((memberIdRef.current as any).includes(data.adminId)) {
    //             dispatch(setAdminOnline(true));
    //         }
    //     });

    //     socket.on("admin_offline", (data: { adminId: string }) => {
    //         if ((memberIdRef.current as any).includes(data.adminId)) {
    //             dispatch(setAdminOnline(false));
    //         }
    //     });

    //     // ✅ cleanup khi unmount hoặc đổi sessionId
    //     return () => {
    //         socket.off("discord_message", handleMessage);
    //         socket.off("thread_notfound", handleThreadNotfound);
    //         socket.off("thread_old_messages", handleThreadNotfound);
    //         socket.disconnect();
    //     };
    // }, [sessionId, username]);


    return <></>
}