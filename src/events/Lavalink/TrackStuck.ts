import type { Player, Track } from "vulkava";
import ruqa from "../..";
import PlayerEvent from "../../structures/PlayerEvent";
import RichEmbed from "../../utils/RichEmbed";

export default new PlayerEvent("trackStuck", async (player: Player, track: Track) => {
    if (player.queue.length > 0) {
        await ruqa.createMessage(player.textChannelId!, {
            embeds: [
                new RichEmbed()
                .setColor(RichEmbed.embedColor)
                .setDescription(`${track.title} was been stucked. Skipping current playback...`),
            ],
        });
        player.skip();
    } else {
        await ruqa.createMessage(player.textChannelId!, {
            embeds: [
                new RichEmbed()
                .setColor(RichEmbed.embedColor)
                .setDescription(`${track.title} was been stucked. Destroying current playback...`),
            ],
        });
        player.destroy();
    }
});
