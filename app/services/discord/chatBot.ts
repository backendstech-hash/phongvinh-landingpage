"use server";

// const sessions: Record<string, string> = {}; // username -> threadId
const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN_CHAT;
const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

export async function createThreadForUser(username: string) {
    const res = await fetch(`https://discord.com/api/v10/channels/${DISCORD_CHANNEL_ID}/threads`, {
        method: 'POST',
        headers: {
            "Authorization": `Bot ${DISCORD_BOT_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({
            name: `Support-${username}`,
            type: 11, // public thread
            auto_archive_duration: 1440 // 24h tự archive
        })
    });

    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Failed to create thread: ${err}`);
    }

    const data = await res.json();
    return data.id; // threadId
}

export async function sendMessageToThread(threadId: string, message: string, username: string, replyForBotId?: number, optionId?: number) {
    // http://discord.com/api/v10/channels/${threadId}/messages
    const res = await fetch(`http://localhost:3001/message/send`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ message, threadId, username, replyForBotId, optionId }),
    });

    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Failed to send message: ${err}`);
    }

    return await res.json();
}

export async function sendFormToThread(data: FormData) {
    // http://discord.com/api/v10/channels/${threadId}/messages
    const res = await fetch("http://localhost:3001/message/send-form", {
        method: "POST",
        body: data,
    });

    if (!res.ok) {
        const err = await res.text();
        throw new Error(`Failed to send message: ${err}`);
    }

    return await res.json();
}

// export async function handleUserChat(username: string) {
//     let threadId = sessions[username];

//     // Nếu chưa có thread → tạo thread mới
//     if (!threadId) {
//         threadId = await createThreadForUser(username);
//         sessions[username] = threadId;

//         // Gửi tin nhắn mở đầu từ bot admin
//         await sendMessageToThread(threadId, `👋 Hello ${username}, how can I help you today?`);
//     }

//     return true
// }

// Gửi message của user vào thread
// await sendMessageToThread(threadId, `💬 ${username}: ${message}`);