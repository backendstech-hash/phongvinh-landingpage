"use client";
import { useAppDispatch, useAppSelector } from "@/app/redux/hook";
import { pushNewMessage } from "@/app/redux/slices/chat.slice";
import { useEffect } from "react";
import { io } from "socket.io-client";

export default function InitSocket() {
    const dispatch = useAppDispatch();
    const { sessionId } = useAppSelector(store => store.chat);

    // useEffect(() => {
    //     if (!sessionId) return;

    //     // ✅ tạo socket mới khi có sessionId
    //     const socket = io("http://localhost:3001", {
    //         transports: ["websocket"], // 👈 giúp ổn định hơn (bỏ polling)
    //     });

    //     socket.on("connect", () => {
    //         console.log("✅ Connected:", socket.id);

    //         // Tham gia room theo thread/sessionId
    //         socket.emit("join_thread", sessionId);
    //     });

    //     // Lắng nghe tin nhắn Discord gửi về
    //     const handleMessage = (data: any) => {
    //         console.log("📩 New message in thread:", data);
    //         dispatch(pushNewMessage({fromMe: false, message: data.content}));
    //         // TODO: update UI
    //     };

    //     socket.on("discord_message", handleMessage);

    //     // ✅ cleanup khi unmount hoặc đổi sessionId
    //     return () => {
    //         socket.off("discord_message", handleMessage);
    //         socket.disconnect();
    //     };
    // }, [sessionId]);


    return <></>
}