import type { Message } from "eris";
import checkIfActive from "../../functions/checkIfActive";
import createEmbedPost from "../../functions/createEmbedPost";
import Command from "../../structures/Command";

export default new Command({
    name: "skip",
    aliases: ["sk", "next"],
    description: "Skip the current playback",
    category: "Music",
    requirements: ["insideVC", "sameVC"],
    permissions: ["none"],

    run: async ({ message, args }: {
        message: Message,
        args: string[],
    }) => {
        const [player, has] = await checkIfActive(message);
        if (!has) {
            return;
        }
        if (!player.queue.length) {
            await createEmbedPost(message, "There are so songs in the queue to skip.");
            return;
        }
        const index = args[0];
        if (Number.isNaN(Number(index))) {
            await createEmbedPost(message, "Index must be a number.");
            return;
        }
        if (Number(index) > player.queue.length || Number(index) < player.queue.length) {
            await createEmbedPost(message, "Index range must be lower than the queue size and higher than zero.");
            return;
        }
        player.skip(Number(index) || undefined);
    },
});
