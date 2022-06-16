import type { Message } from "eris";
import checkIfActive from "../../functions/checkIfActive";
import createEmbedPost from "../../functions/createEmbedPost";
import Command from "../../structures/Command";

export default new Command({
    name: "unloop",
    aliases: ["unl"],
    description: "Unloop the track or queue",
    category: "Music",
    requirements: ["insideVC", "sameVC"],
    permissions: ["none"],

    run: async ({ message }: {
        message: Message,
    }) => {
        const [player, has] = await checkIfActive(message);
        if (!has) {
            return;
        }
        if (player.trackRepeat || player.queueRepeat) {
            await createEmbedPost(message, `Disabled ${player.trackRepeat ? "track" : "queue"} repeat.`);
        } else {
           await createEmbedPost(message, "There isn't any loop mode enabled yet."); 
        }
    },
});
