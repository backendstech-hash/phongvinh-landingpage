"use server";

export async function sendDiscordMessage(data: {
  name: string;
  email: string;
  phone: string;
  message: string;
}) {
    const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;
    const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID;

    if (!DISCORD_BOT_TOKEN) {
        throw new Error("DISCORD_BOT_TOKEN not configured");
    }

    if (!DISCORD_CHANNEL_ID) {
        throw new Error("DISCORD_CHANNEL_ID not configured");
    }

    const now = new Date();
    const timestamp = `========= ${now.toLocaleString()} ==========\n`;

    const content = `${timestamp}\n👤 **Name**: ${data.name}\n✉️ **Email**: ${data.email}\n📞 **Phone**: ${data.phone}\n📝 **Message**: ${data.message}\n\n======================================`;


    const res = await fetch(`https://discord.com/api/v10/channels/${DISCORD_CHANNEL_ID}/messages`, {
        method: "POST",
        headers: {
            "Authorization": `Bot ${DISCORD_BOT_TOKEN}`,
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
    });

    if (!res.ok) {
        const error = await res.text().catch(() => res.statusText);
        throw new Error(`Failed to send message: ${res.status} ${error}`);
    }

    return await res.json();
}