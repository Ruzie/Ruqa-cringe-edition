import type { Client, Message } from "eris";
import checkIfActive from "../../functions/checkIfActive";
import Command from "../../structures/Command";
import emojis from "../../config/emojis.json";
import wrapTryCatchError from "../../functions/wrapTryCatch";

export default new Command({
    name: "stop",
    aliases: ["die"],
    description: "Stop the current playback and leave voice channel",
    category: "Music",
    example: "stop",
    requirements: ["insideVC", "sameVC"],
    permissions: ["reactions"],

    run: async ({ ruqa, message }: {
        ruqa: Client,
        message: Message,
    }) => {
        const [player, has] = await checkIfActive(message);
        if (!has) {
            return;
        }
        ruqa.audio.emit("trackEnd", () => { });
        player.destroy();
        wrapTryCatchError<void>(message.addReaction(emojis.ok_hand));
    },
});
