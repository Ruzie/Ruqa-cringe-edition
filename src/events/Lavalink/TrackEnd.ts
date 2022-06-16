import type { Player } from "vulkava";
import ruqa from "../..";
import PlayerEvent from "../../structures/PlayerEvent";

export default new PlayerEvent("trackEnd", async (player: Player) => {
    if (!player.queue?.length) {
        await ruqa.cachedTrackStartMsg.delete();
        player?.destroy();
    } else {
        await ruqa.cachedTrackStartMsg.delete();
    }
});
