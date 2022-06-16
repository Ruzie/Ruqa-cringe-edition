import type { Message } from "eris";
import RichEmbed from "../utils/RichEmbed";

export default async (messageClass: Message, msg: string): Promise<void> => {
    await messageClass.channel.createMessage({
        embeds: [
            new RichEmbed()
            .setColor(RichEmbed.embedColor)
            .setDescription(msg),
        ],
    });
};
