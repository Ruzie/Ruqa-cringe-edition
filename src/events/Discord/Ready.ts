import { env } from "process";
import ruqa from "../..";
import GatewayEvent from "../../structures/GatewayEvent";
import Logger from "../../utils/Logger";
import type { Tag } from "../../typings/Tag";

export default new GatewayEvent("ready", () => {
    ruqa.audio.start(env.DEVMODE! === "true" ? env.DEV_BOT_ID! : env.BOT_ID!);
    Logger.ok(`Logged in as ${((ruqa.user) as unknown as Tag).tag}`);
});
