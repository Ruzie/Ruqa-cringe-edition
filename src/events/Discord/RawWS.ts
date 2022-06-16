import type { RawPacket } from "eris";
import ruqa from "../..";
import GatewayEvent from "../../structures/GatewayEvent";

export default new GatewayEvent("rawWS", (packet: RawPacket) => {
    switch (packet.t) {
        case "VOICE_SERVER_UPDATE":
            ruqa.audio.handleVoiceUpdate(packet);
            break;

        case "VOICE_STATE_UPDATE":
            ruqa.audio.handleVoiceUpdate(packet);
            break;

        default:
            break;
    }
});
